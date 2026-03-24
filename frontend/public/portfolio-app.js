// Portfolio Application - Vanilla JavaScript
class PortfolioApp {
    constructor() {
        this.currentScreen = 'start';
        this.app = document.getElementById('app');
        this.init();
    }

    init() {
        this.render();
        this.setupESCKey();
    }

    setupESCKey() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.currentScreen === 'menu') {
                    this.navigateTo('start');
                } else if (this.currentScreen !== 'start') {
                    this.navigateTo('menu');
                }
            }
        });
    }

    navigateTo(screen) {
        this.currentScreen = screen;
        this.render();
    }

    render() {
        let html = '';
        switch(this.currentScreen) {
            case 'start':
                html = this.renderStartScreen();
                break;
            case 'menu':
                html = this.renderMainMenu();
                break;
            case 'lore':
                html = this.renderLoreLog();
                break;
            case 'stats':
                html = this.renderCharacterStats();
                break;
            case 'levels':
                html = this.renderLevelSelect();
                break;
            case 'certificates':
                html = this.renderCertificates();
                break;
            case 'credits':
                html = this.renderCredits();
                break;
        }
        this.app.innerHTML = html;
        this.attachEventListeners();
    }

    renderStartScreen() {
        return `
            <div class="start-screen screen active" onclick="app.navigateTo('menu')">
                <div class="start-content">
                    <svg class="gamepad-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="6" y1="11" x2="10" y2="11"></line>
                        <line x1="8" y1="9" x2="8" y2="13"></line>
                        <line x1="15" y1="12" x2="15.01" y2="12"></line>
                        <line x1="18" y1="10" x2="18.01" y2="10"></line>
                        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                    </svg>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <p class="title-2026">2026</p>
                        <h1 class="title-portfolio">PORTFOLIO</h1>
                        <p class="subtitle">Game Designer</p>
                    </div>
                    
                    <div class="click-begin">
                        <p class="click-begin-text">[ CLICK ANYWHERE TO BEGIN ]</p>
                        <div class="click-border"></div>
                    </div>

                    <p class="footer-text">Pratham Warambhey • Game Designer • Level Designer</p>
                </div>
            </div>
        `;
    }

    renderMainMenu() {
        const menuItems = [
            { title: 'LORE LOG', action: 'lore', color: '#39ff14', icon: 'book' },
            { title: 'CHARACTER STATS', action: 'stats', color: '#00f0ff', icon: 'user' },
            { title: 'SELECT LEVEL', action: 'levels', color: '#ff006e', icon: 'map' },
            { title: 'CERTIFICATES', action: 'certificates', color: '#a855f7', icon: 'award' },
            { title: 'CREDITS', action: 'credits', color: '#ffff00', icon: 'award' }
        ];

        const menuBoxes = menuItems.map(item => `
            <button class="menu-box" 
                    onclick="app.navigateTo('${item.action}')"
                    style="border-color: ${item.color}; box-shadow: 0 10px 30px ${item.color}20">
                <div class="menu-box-content">
                    <div class="icon-container" style="background-color: ${item.color}15; box-shadow: 0 0 30px ${item.color}40">
                        ${this.getIcon(item.icon, item.color)}
                    </div>
                    <h3 class="menu-box-title" style="color: ${item.color}; text-shadow: 0 0 15px ${item.color}80, 0 0 30px ${item.color}40">
                        ${item.title}
                    </h3>
                </div>
                <div class="menu-box-line" style="background-color: ${item.color}; box-shadow: 0 0 20px ${item.color}"></div>
                <div class="menu-box-glow" style="background: radial-gradient(circle at 50% 50%, ${item.color}10 0%, transparent 70%)"></div>
            </button>
        `).join('');

        return `
            <div class="main-menu screen active">
                <div class="menu-header">
                    <h1 class="menu-title">MAIN MENU</h1>
                    <p class="menu-subtitle">SELECT YOUR QUEST</p>
                </div>
                
                <div class="menu-grid">
                    ${menuBoxes}
                </div>
                
                <div class="menu-footer">
                    <p class="menu-footer-text">[ ESC ] to return to start</p>
                </div>
            </div>
        `;
    }

    renderLoreLog() {
        const data = portfolioData.loreLog;
        return `
            <div class="screen-container screen active" style="background: linear-gradient(to bottom right, #050510, #0a0e27, #050510);">
                <style>
                    .lore-container { max-width: 64rem; margin: 0 auto; position: relative; z-index: 10; }
                    .lore-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3rem; }
                    .lore-title { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; font-weight: bold; color: #39ff14; text-shadow: 0 0 20px rgba(57, 255, 20, 0.8); }
                    .lore-content { background: #0a0e27; border: 2px solid #39ff14; padding: 3rem; box-shadow: 0 0 30px rgba(57, 255, 20, 0.3), inset 0 0 30px rgba(57, 255, 20, 0.05); margin-bottom: 2rem; }
                    .profile-image-container { display: flex; justify-content: center; margin-bottom: 2rem; }
                    .profile-image { width: 12rem; height: 12rem; border-radius: 50%; border: 4px solid #39ff14; box-shadow: 0 0 30px rgba(57, 255, 20, 0.6); object-fit: cover; }
                    .intro-title { font-family: 'Orbitron', sans-serif; font-size: 2rem; font-weight: bold; color: #39ff14; text-shadow: 0 0 15px rgba(57, 255, 20, 0.6); margin-bottom: 1rem; }
                    .description { color: #d1d5db; font-size: 1.125rem; line-height: 1.75; margin-bottom: 2rem; }
                    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #1f2937; }
                    .stat-item { text-align: center; padding: 1rem; border: 1px solid #1f2937; transition: all 0.3s; }
                    .stat-item:hover { border-color: #39ff14; }
                    .stat-value { font-family: 'Orbitron', sans-serif; font-size: 1.875rem; font-weight: bold; color: #39ff14; margin-bottom: 0.25rem; }
                    .stat-label { color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace; }
                    @media (max-width: 768px) {
                        .lore-title { font-size: 1.5rem; }
                        .lore-content { padding: 1.5rem; }
                        .profile-image { width: 8rem; height: 8rem; }
                        .intro-title { font-size: 1.5rem; }
                        .description { font-size: 1rem; }
                    }
                </style>
                
                <div class="lore-container">
                    <div class="lore-header">
                        <h1 class="lore-title">${this.getIcon('book', '#39ff14')} LORE LOG</h1>
                        <button class="close-btn" onclick="app.navigateTo('menu')" style="border-color: #39ff14; color: #39ff14;">
                            ${this.getIcon('x', '#39ff14')}
                        </button>
                    </div>
                    
                    <div class="lore-content">
                        <div class="profile-image-container">
                            <img src="${data.profileImage}" alt="Profile" class="profile-image">
                        </div>
                        
                        <div style="text-align: center; margin-bottom: 2rem;">
                            <h2 class="intro-title">${data.intro}</h2>
                        </div>
                        
                        <p class="description">${data.description}</p>
                        
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-value">${data.stats.yearsExperience}</div>
                                <div class="stat-label">Years Experience</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${data.stats.projectsCompleted}</div>
                                <div class="stat-label">Projects Completed</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${data.stats.gameJams}</div>
                                <div class="stat-label">Game Jams</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">${data.stats.dedication}</div>
                                <div class="stat-label">Dedication</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="back-btn" onclick="app.navigateTo('menu')" 
                                style="border-color: #39ff14; color: #39ff14; box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);">
                            [ BACK TO MENU ]
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderCharacterStats() {
        return `
            <div class="screen-container screen active">
                <style>
                    .stats-container { max-width: 64rem; margin: 0 auto; position: relative; z-index: 10; }
                    .stats-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3rem; }
                    .stats-title { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; font-weight: bold; color: #00f0ff; text-shadow: 0 0 20px rgba(0, 240, 255, 0.8); }
                    .stats-content { background: #0a0e27; border: 2px solid #00f0ff; padding: 3rem; box-shadow: 0 0 30px rgba(0, 240, 255, 0.3); margin-bottom: 2rem; }
                    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
                    .skill-card { background: linear-gradient(to bottom right, #0f1435, #0a0e27); border: 1px solid #1f2937; padding: 1rem; transition: all 0.3s; display: flex; align-items: center; gap: 0.75rem; }
                    .skill-card:hover { border-color: #00f0ff; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 240, 255, 0.4); }
                    .skill-icon { padding: 0.75rem; background: rgba(0, 240, 255, 0.1); border-radius: 0.5rem; }
                    .skill-name { color: white; font-family: 'Rajdhani', sans-serif; font-weight: 600; font-size: 1.125rem; }
                    .software-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; }
                    .software-card { background: linear-gradient(to bottom right, #0f1435, #0a0e27); border: 1px solid #1f2937; padding: 1rem; text-align: center; transition: all 0.3s; }
                    .software-card:hover { border-color: #00f0ff; transform: translateY(-8px) scale(1.05); box-shadow: 0 20px 40px rgba(0, 240, 255, 0.4); }
                    .software-logo { width: 4rem; height: 4rem; background: white; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; }
                    .software-logo img { max-width: 100%; max-height: 100%; object-fit: contain; padding: 0.5rem; }
                    .software-name { color: white; font-weight: 600; font-size: 0.875rem; }
                    @media (max-width: 768px) {
                        .stats-title { font-size: 1.5rem; }
                        .stats-content { padding: 1.5rem; }
                    }
                </style>
                
                <div class="stats-container">
                    <div class="stats-header">
                        <h1 class="stats-title">CHARACTER STATS</h1>
                        <button class="close-btn" onclick="app.navigateTo('menu')" style="border-color: #00f0ff; color: #00f0ff;">
                            ${this.getIcon('x', '#00f0ff')}
                        </button>
                    </div>
                    
                    <div class="stats-content">
                        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; font-family: 'Rajdhani', sans-serif; margin-bottom: 1rem;">CORE ABILITIES</h2>
                        <div class="skills-grid">
                            ${portfolioData.skills.map(skill => `
                                <div class="skill-card">
                                    <div class="skill-icon" style="box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);">
                                        ${this.getIcon(skill.icon, '#00f0ff')}
                                    </div>
                                    <span class="skill-name">${skill.name}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #1f2937;">
                            <h2 style="color: white; font-size: 1.5rem; font-weight: bold; font-family: 'Rajdhani', sans-serif; margin-bottom: 1.5rem;">SOFTWARE & TOOLS</h2>
                            <div class="software-grid">
                                ${portfolioData.software.map(tool => `
                                    <div class="software-card">
                                        <div class="software-logo">
                                            <img src="${tool.logo}" alt="${tool.name}">
                                        </div>
                                        <div class="software-name">${tool.name}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1.5rem; margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #1f2937;">
                            <div style="text-align: center;">
                                <div style="font-family: 'Orbitron', sans-serif; font-size: 1.875rem; font-weight: bold; color: #00f0ff; margin-bottom: 0.25rem;">10+</div>
                                <div style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace;">Projects</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-family: 'Orbitron', sans-serif; font-size: 1.875rem; font-weight: bold; color: #00f0ff; margin-bottom: 0.25rem;">1.5+</div>
                                <div style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace;">Years Exp</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-family: 'Orbitron', sans-serif; font-size: 1.875rem; font-weight: bold; color: #00f0ff; margin-bottom: 0.25rem;">5+</div>
                                <div style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace;">Game Jams</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-family: 'Orbitron', sans-serif; font-size: 1.875rem; font-weight: bold; color: #00f0ff; margin-bottom: 0.25rem;">100%</div>
                                <div style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace;">Dedication</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="back-btn" onclick="app.navigateTo('menu')" 
                                style="border-color: #00f0ff; color: #00f0ff; box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);">
                            [ BACK TO MENU ]
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderLevelSelect() {
        return `<div class="screen-container screen active"><h1 style="color: #ff006e; text-align: center; font-family: 'Orbitron', sans-serif;">Level Select - Coming Soon</h1><div style="text-align: center; margin-top: 2rem;"><button class="back-btn" onclick="app.navigateTo('menu')" style="border-color: #ff006e; color: #ff006e;">[ BACK TO MENU ]</button></div></div>`;
    }

    renderCertificates() {
        return `<div class="screen-container screen active"><h1 style="color: #a855f7; text-align: center; font-family: 'Orbitron', sans-serif;">Certificates - Coming Soon</h1><div style="text-align: center; margin-top: 2rem;"><button class="back-btn" onclick="app.navigateTo('menu')" style="border-color: #a855f7; color: #a855f7;">[ BACK TO MENU ]</button></div></div>`;
    }

    renderCredits() {
        const data = portfolioData.credits;
        return `
            <div class="screen-container screen active" style="background: linear-gradient(to bottom right, #050510, #0a0e27, #050510);">
                <style>
                    .credits-container { max-width: 64rem; margin: 0 auto; position: relative; z-index: 10; }
                    .credits-content { background: #0a0e27; border: 2px solid #ffff00; padding: 3rem; box-shadow: 0 0 30px rgba(255, 255, 0, 0.3); margin-bottom: 2rem; }
                    .credits-name { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; font-weight: bold; color: #ffff00; text-shadow: 0 0 15px rgba(255, 255, 0, 0.6); margin-bottom: 0.75rem; }
                    .credits-title { font-size: 1.5rem; color: #d1d5db; font-family: 'Rajdhani', sans-serif; }
                    .contact-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid #1f2937; margin-bottom: 1.5rem; transition: all 0.3s; }
                    .contact-item:hover { border-color: #ffff00; }
                    .social-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; }
                    .social-link { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid #1f2937; text-decoration: none; transition: all 0.3s; }
                    .social-link:hover { border-color: #ffff00; background: rgba(255, 255, 0, 0.1); }
                    @media (max-width: 768px) {
                        .credits-content { padding: 1.5rem; }
                        .credits-name { font-size: 1.5rem; }
                    }
                </style>
                
                <div class="credits-container">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 3rem;">
                        <h1 style="font-family: 'Orbitron', sans-serif; font-size: 2.5rem; font-weight: bold; color: #ffff00; text-shadow: 0 0 20px rgba(255, 255, 0, 0.8);">CREDITS</h1>
                        <button class="close-btn" onclick="app.navigateTo('menu')" style="border-color: #ffff00; color: #ffff00;">
                            ${this.getIcon('x', '#ffff00')}
                        </button>
                    </div>
                    
                    <div class="credits-content">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <h2 class="credits-name">${data.name}</h2>
                            <p class="credits-title">${data.title}</p>
                        </div>
                        
                        <div class="contact-item">
                            ${this.getIcon('mail', '#ffff00')}
                            <div>
                                <div style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace; margin-bottom: 0.25rem;">EMAIL</div>
                                <a href="mailto:${data.email}" style="color: white; font-size: 1.125rem; text-decoration: none;">${data.email}</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            ${this.getIcon('phone', '#ffff00')}
                            <div>
                                <div style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace; margin-bottom: 0.25rem;">PHONE</div>
                                <a href="tel:${data.phone}" style="color: white; font-size: 1.125rem; text-decoration: none;">${data.phone}</a>
                            </div>
                        </div>
                        
                        <div style="margin-top: 3rem;">
                            <h3 style="color: #ffff00; font-size: 1.5rem; font-weight: bold; font-family: 'Rajdhani', sans-serif; text-align: center; margin-bottom: 1.5rem;">CONNECT</h3>
                            <div class="social-grid">
                                ${data.social.map(social => `
                                    <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link">
                                        ${this.getIcon(social.icon, '#ffff00')}
                                        <span style="color: #9ca3af; font-size: 0.875rem; font-family: 'Courier New', monospace;">${social.platform}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div style="text-align: center; padding-top: 2rem; margin-top: 2rem; border-top: 2px solid #1f2937;">
                            <h3 style="color: #ffff00; font-size: 1.25rem; font-weight: bold; font-family: 'Rajdhani', sans-serif; margin-bottom: 1rem;">DOWNLOAD RESUME</h3>
                            <a href="${data.resumeUrl}" target="_blank" download 
                               style="display: inline-flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; border: 2px solid #ffff00; color: #ffff00; text-decoration: none; font-family: 'Courier New', monospace; font-weight: bold; box-shadow: 0 0 20px rgba(255, 255, 0, 0.3); transition: all 0.3s;">
                                ${this.getIcon('download', '#ffff00')}
                                DOWNLOAD RESUME.PDF
                            </a>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <button class="back-btn" onclick="app.navigateTo('menu')" 
                                style="border-color: #ffff00; color: #ffff00; box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);">
                            [ BACK TO MENU ]
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getIcon(name, color) {
        const icons = {
            'gamepad': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><line x1="6" y1="11" x2="10" y2="11"></line><line x1="8" y1="9" x2="8" y2="13"></line><line x1="15" y1="12" x2="15.01" y2="12"></line><line x1="18" y1="10" x2="18.01" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>`,
            'book': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
            'user': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
            'map': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,
            'award': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
            'x': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
            'mail': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
            'phone': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
            'linkedin': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
            'instagram': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
            'github': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
            'twitter': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`,
            'download': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
        };
        return icons[name] || icons['user'];
    }

    attachEventListeners() {
        // Event listeners are attached via inline onclick handlers
    }
}

// Initialize the app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PortfolioApp();
});
