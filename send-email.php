<?php
// ===== CONFIGURATION =====
$recipient_email = 'hiinteractifstudio@gmail.com';
$website_name = 'Camping Horizon';

// ===== VALIDATION DES DONNÉES =====
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupérer les données JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Valider les champs requis
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Le champ '$field' est requis"]);
        exit;
    }
}

$name = trim($data['name']);
$email = trim($data['email']);
$subject = trim($data['subject']);
$message = trim($data['message']);

// Valider l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide']);
    exit;
}

// Valider la longueur
if (strlen($name) < 2 || strlen($name) > 100) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Le nom doit contenir entre 2 et 100 caractères']);
    exit;
}

if (strlen($subject) < 3 || strlen($subject) > 100) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Le sujet doit contenir entre 3 et 100 caractères']);
    exit;
}

if (strlen($message) < 10 || strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Le message doit contenir entre 10 et 5000 caractères']);
    exit;
}

// ===== PRÉVENTION DU SPAM =====
// Vérifier les en-têtes d'injection
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $subject)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données invalides']);
    exit;
}

// ===== CONSTRUCTION DE L'EMAIL =====
$email_subject = "Nouveau message de contact - $subject";

$email_body = "
===========================================
NOUVEAU MESSAGE DE CONTACT - $website_name
===========================================

Nom: $name
Email: $email
Sujet: $subject

Message:
---------
$message
---------

===========================================
Cet email a été envoyé depuis le formulaire de contact du site $website_name
===========================================
";

// ===== EN-TÊTES DE L'EMAIL =====
$headers = array(
    'From' => "noreply@" . $_SERVER['HTTP_HOST'],
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

// Construire les en-têtes
$headers_str = "From: {$headers['From']}\r\n";
$headers_str .= "Reply-To: {$headers['Reply-To']}\r\n";
$headers_str .= "X-Mailer: {$headers['X-Mailer']}\r\n";
$headers_str .= "Content-Type: {$headers['Content-Type']}\r\n";

// ===== ENVOI DE L'EMAIL =====
if (mail($recipient_email, $email_subject, $email_body, $headers_str)) {
    // Succès
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message envoyé avec succès! Nous vous répondrons dès que possible.'
    ]);
} else {
    // Erreur
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    ]);
}

?>
