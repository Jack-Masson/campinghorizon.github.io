import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mountain, Tent, Flame, Users, DollarSign, Sparkles, Zap, TreePine, ChevronDown } from 'lucide-react';

export default function CampingHorizonSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadLinks = {
    windows: 'DOWNLOAD_WINDOWS_URL',
    linux: 'DOWNLOAD_LINUX_URL',
    macos: 'DOWNLOAD_MACOS_URL'
  };

  return (
    <div style={{ backgroundColor: '#0a0804', color: '#e8dcc8', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(10, 8, 4, 0.7)',
        borderBottom: '1px solid rgba(139, 117, 91, 0.3)',
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mountain size={28} color="#d4a574" />
            <span>CAMPING HORIZON</span>
          </div>
          
          <div style={{ display: 'none' }} className="desktop-nav">
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="#jeu" style={{ color: '#e8dcc8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#d4a574'} onMouseLeave={(e) => e.target.style.color = '#e8dcc8'}>LE JEU</a>
              <a href="#fonctionnalites" style={{ color: '#e8dcc8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#d4a574'} onMouseLeave={(e) => e.target.style.color = '#e8dcc8'}>FONCTIONNALITÉS</a>
              <a href="#galerie" style={{ color: '#e8dcc8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#d4a574'} onMouseLeave={(e) => e.target.style.color = '#e8dcc8'}>GALERIE</a>
              <a href="#telecharger" style={{ color: '#e8dcc8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#d4a574'} onMouseLeave={(e) => e.target.style.color = '#e8dcc8'}>TÉLÉCHARGER</a>
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#8b753b',
                color: '#e8dcc8',
                border: '2px solid #a89050',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)'
              }} onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#9a8447';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8b753b';
                e.target.style.transform = 'scale(1)';
              }}>
                JOUER MAINTENANT
              </button>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d4a574' }} className="mobile-menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(139, 117, 91, 0.3)' }}>
            <a href="#jeu" style={{ color: '#e8dcc8', textDecoration: 'none' }}>LE JEU</a>
            <a href="#fonctionnalites" style={{ color: '#e8dcc8', textDecoration: 'none' }}>FONCTIONNALITÉS</a>
            <a href="#galerie" style={{ color: '#e8dcc8', textDecoration: 'none' }}>GALERIE</a>
            <a href="#telecharger" style={{ color: '#e8dcc8', textDecoration: 'none' }}>TÉLÉCHARGER</a>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#8b753b',
              color: '#e8dcc8',
              border: '2px solid #a89050',
              borderRadius: '4px',
              fontWeight: 'bold',
              width: '100%',
              cursor: 'pointer'
            }}>
              JOUER MAINTENANT
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '80px',
        background: `linear-gradient(180deg, #0a0804 0%, #1a140f 50%, #2d1f14 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Campfire animation background */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '200px',
          opacity: 0.15
        }}>
          <Flame size={120} color="#d4a574" style={{ animation: 'pulse 2s ease-in-out infinite', margin: 'auto' }} />
        </div>

        <div style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px', padding: '2rem' }}>
          {/* Logo */}
          <div style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '4px 4px 8px rgba(0,0,0,0.7), 2px 2px 0px rgba(139,117,91,0.5)',
            letterSpacing: '0.1em',
            lineHeight: '1.1'
          }}>
            <div style={{ color: '#e8dcc8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <Mountain size={80} color="#d4a574" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }} />
              <div>
                <div>CAMPING</div>
                <div>HORIZON</div>
              </div>
            </div>
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#d4a574'
          }}>
            Construisez le camping de vos rêves.
          </h2>

          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            color: '#c9b59f',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Installez vos campeurs, aménagez votre terrain, gérez votre équipe et faites grandir votre camping au cœur de paysages magnifiques.
          </p>

          {/* Download Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            {[
              { label: 'WINDOWS', icon: '🪟', url: downloadLinks.windows },
              { label: 'LINUX', icon: '🐧', url: downloadLinks.linux },
              { label: 'MACOS', icon: '🍎', url: downloadLinks.macos }
            ].map((os) => (
              <button
                key={os.label}
                onClick={() => window.open(os.url, '_blank')}
                style={{
                  padding: '1rem',
                  backgroundColor: '#6b5a2c',
                  border: '2px solid #8b753b',
                  color: '#e8dcc8',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.4)',
                  background: 'linear-gradient(180deg, #7a6831 0%, #5a4a20 100%)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#8b753b';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = 'inset 0 2px 0 rgba(255,255,255,0.2), 0 6px 12px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6b5a2c';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'inset 0 2px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.4)';
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{os.icon}</div>
                <div style={{ fontSize: '0.9rem' }}>{os.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#b8a878' }}>Télécharger</div>
              </button>
            ))}
          </div>

          <p style={{ color: '#8b7a5f', fontSize: '0.95rem', marginBottom: '3rem' }}>
            Version PC • Jeu indépendant
          </p>

          {/* Scroll Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite'
          }}>
            <ChevronDown size={32} color="#d4a574" style={{ opacity: 0.6 }} />
          </div>
        </div>

        {/* Hero Illustration Placeholder */}
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(139, 117, 91, 0.1)',
          borderTop: '2px solid rgba(139, 117, 91, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          color: '#8b7a5f',
          marginTop: '2rem'
        }}>
          [ILLUSTRATION PANORAMIQUE - Camping au coucher du soleil avec montagnes, lac, tentes, caravanes, feu de camp]
        </div>
      </section>

      {/* Game Presentation Section */}
      <section id="jeu" style={{
        padding: '4rem 2rem',
        backgroundColor: '#0a0804',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#e8dcc8',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '0.05em'
          }}>
            VOTRE CAMPING. VOTRE HISTOIRE.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'rgba(139, 117, 91, 0.15)',
            border: '2px solid #8b753b',
            borderRadius: '6px',
            padding: '1.5rem',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8b7a5f',
            fontSize: '1rem'
          }}>
            [CAPTURE DU JEU - Interface principale de gestion du camping]
          </div>

          <div>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#c9b59f',
              marginBottom: '1.5rem'
            }}>
              Transformez un petit terrain sauvage en destination incontournable. Construisez, aménagez, accueillez vos visiteurs et prenez les bonnes décisions pour faire prospérer votre camping.
            </p>

            <p style={{
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#a8956f'
            }}>
              Camping Horizon est bien plus qu'un jeu de gestion. C'est une expérience immersive où chaque décision compte, où la stratégie rencontre la détente, et où votre camping devient votre fierté.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" style={{
        padding: '4rem 2rem',
        backgroundColor: 'rgba(26, 20, 15, 0.6)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#e8dcc8',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '0.05em'
          }}>
            FAITES GRANDIR VOTRE CAMPING
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { title: 'CONSTRUISEZ', desc: 'Créez les emplacements, installez des équipements et développez votre camping.', icon: <Zap size={32} /> },
            { title: 'ACCUEILLEZ VOS CAMPEURS', desc: 'Observez les besoins de vos visiteurs et offrez-leur un séjour inoubliable.', icon: <Users size={32} /> },
            { title: 'GÉREZ VOS FINANCES', desc: 'Contrôlez vos dépenses, fixez vos tarifs et investissez intelligemment.', icon: <DollarSign size={32} /> },
            { title: 'PERSONNALISEZ', desc: 'Aménagez chaque espace selon votre vision et créez un camping unique.', icon: <Sparkles size={32} /> },
            { title: 'PROFITEZ DE LA NATURE', desc: 'Découvrez des paysages magnifiques et faites évoluer votre camping au fil des saisons.', icon: <TreePine size={32} /> },
            { title: 'DEVENEZ INCONTOURNABLE', desc: 'Développez votre réputation et attirez toujours plus de campeurs.', icon: <Mountain size={32} /> }
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(139, 117, 91, 0.1)',
                border: '2px solid #8b753b',
                borderRadius: '6px',
                padding: '1.5rem',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 117, 91, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 117, 91, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: '#d4a574', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#e8dcc8', marginBottom: '0.5rem', textAlign: 'center' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#c9b59f', lineHeight: '1.6', textAlign: 'center' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" style={{
        padding: '4rem 2rem',
        backgroundColor: '#0a0804',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#e8dcc8',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '0.05em'
          }}>
            EXPLOREZ CAMPING HORIZON
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {Array(6).fill(0).map((_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(139, 117, 91, 0.1)',
                border: '2px solid #8b753b',
                borderRadius: '6px',
                aspectRatio: '16/10',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                color: '#8b7a5f'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(212, 165, 116, 0.2), inset 0 0 20px rgba(212, 165, 116, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              [SCREENSHOT {i + 1}]
            </div>
          ))}
        </div>
      </section>

      {/* Progression Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'rgba(26, 20, 15, 0.6)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#e8dcc8',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '0.05em'
          }}>
            DE PETIT TERRAIN À GRAND CAMPING
          </h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {['PETIT CAMPING', 'PREMIERS CAMPEURS', 'NOUVELLES INSTALLATIONS', 'CAMPING FLORISSANT', 'DESTINATION INCONTOURNABLE'].map((stage, i) => (
            <div key={i} style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(139, 117, 91, 0.2)',
                border: '2px solid #8b753b',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#d4a574',
                fontSize: '2rem'
              }}>
                {i + 1}
              </div>
              <p style={{ color: '#e8dcc8', fontWeight: 'bold', fontSize: '0.95rem' }}>
                {stage}
              </p>
              {i < 4 && <div style={{ color: '#8b753b', marginTop: '1rem', fontSize: '1.5rem' }}>↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Atmosphere Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#0a0804',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: 'rgba(139, 117, 91, 0.1)',
          border: '2px solid #8b753b',
          borderRadius: '6px',
          padding: '4rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#d4a574',
            marginBottom: '1rem'
          }}>
            Prenez le temps de respirer.
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#c9b59f',
            lineHeight: '1.8',
            marginBottom: '0',
            fontStyle: 'italic'
          }}>
            Construisez. Gérez. Explorez.<br />Et profitez simplement de l'horizon.
          </p>
        </div>

        <div style={{
          marginTop: '2rem',
          width: '100%',
          height: '300px',
          backgroundColor: 'rgba(139, 117, 91, 0.1)',
          border: '2px solid #8b753b',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#8b7a5f',
          fontSize: '1rem'
        }}>
          [ILLUSTRATION COUCHER DE SOLEIL - Vue panoramique relaxante du camping]
        </div>
      </section>

      {/* Download Section */}
      <section id="telecharger" style={{
        padding: '4rem 2rem',
        backgroundColor: 'rgba(26, 20, 15, 0.6)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: 'rgba(139, 117, 91, 0.15)',
          border: '2px solid #8b753b',
          borderRadius: '6px',
          padding: '3rem 2rem',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#e8dcc8',
            marginBottom: '0.5rem'
          }}>
            PRÊT À OUVRIR VOTRE CAMPING ?
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#c9b59f',
            marginBottom: '2rem'
          }}>
            Téléchargez Camping Horizon et commencez votre aventure.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {[
              { label: 'WINDOWS', icon: '🪟', url: downloadLinks.windows },
              { label: 'LINUX', icon: '🐧', url: downloadLinks.linux },
              { label: 'MACOS', icon: '🍎', url: downloadLinks.macos }
            ].map((os) => (
              <div key={os.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{os.icon}</div>
                <p style={{ color: '#e8dcc8', fontWeight: 'bold', marginBottom: '0.5rem' }}>{os.label}</p>
                <button
                  onClick={() => window.open(os.url, '_blank')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#6b5a2c',
                    border: '2px solid #8b753b',
                    color: '#e8dcc8',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    width: '100%',
                    background: 'linear-gradient(180deg, #7a6831 0%, #5a4a20 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#8b753b';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#6b5a2c';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Télécharger
                </button>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.95rem', color: '#8b7a5f' }}>
            Compatible Windows • Linux • macOS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0a0804',
        borderTop: '2px solid rgba(139, 117, 91, 0.3)',
        padding: '3rem 2rem',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e8dcc8', marginBottom: '0.5rem' }}>
                CAMPING HORIZON
              </h3>
              <p style={{ color: '#c9b59f', fontSize: '0.95rem' }}>
                "Construisez votre camping. Créez votre horizon."
              </p>
            </div>

            <div>
              <h4 style={{ color: '#d4a574', fontWeight: 'bold', marginBottom: '1rem' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Accueil', 'Le jeu', 'Fonctionnalités', 'Galerie', 'Télécharger'].map((link) => (
                  <li key={link} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#c9b59f', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#d4a574'} onMouseLeave={(e) => e.target.style.color = '#c9b59f'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#d4a574', fontWeight: 'bold', marginBottom: '1rem' }}>Communauté</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Discord', 'Twitch', 'Contact'].map((link) => (
                  <li key={link} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#c9b59f', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#d4a574'} onMouseLeave={(e) => e.target.style.color = '#c9b59f'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(139, 117, 91, 0.3)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#8b7a5f',
            fontSize: '0.9rem'
          }}>
            © 2026 Camping Horizon. Tous droits réservés.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: block !important; }

          h2 { font-size: 2rem !important; }

          div[style*="grid-template-columns: 'repeat"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu { display: none !important; }
        }

        * {
          box-sizing: border-box;
        }

        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0804;
        }

        ::-webkit-scrollbar-thumb {
          background: #8b753b;
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a89050;
        }
      `}</style>
    </div>
  );
}
