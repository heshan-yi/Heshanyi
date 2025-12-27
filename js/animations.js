// ===== 切换主题 =====
function toggleTheme() {
    if (state.glitch) return;
    
    // 清理现有粒子
    DOM.particlesContainer.innerHTML = '';

    // 开始glitch效果
    state.glitch = true;
    DOM.glitchMask.classList.add('active');
    DOM.body.classList.add('glitch-active');
    
    // 创建粒子效果
    createGlitchParticles();
    
    setTimeout(() => {
        // 切换主题
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        state.sections = state.theme === 'light' ? DATA.light : DATA.dark;
        
        // 更新body class
        DOM.body.className = `${state.theme}-theme paper-texture loaded`;
        if (state.theme === 'dark') {
            DOM.body.classList.add('dark-theme');
        }
        
        // 更新UI
        updateThemeUI();
        
        // 重新渲染sections
        renderSections();
        
        // 重新观察元素
        setTimeout(() => {
            document.querySelectorAll('.scroll-reveal').forEach(el => {
                state.observer?.observe(el);
            });
        }, 100);
        
        // 更新WitchBot切换图标
        const witchbotToggleIcon = document.getElementById('witchbotToggleIcon');
        if (witchbotToggleIcon && !state.isBotOpen) {
            witchbotToggleIcon.textContent = state.theme === 'dark' ? '👁️' : '✒️';
        }
        
        // 结束glitch效果
        setTimeout(() => {
            DOM.glitchMask.classList.remove('active');
            DOM.body.classList.remove('glitch-active');
            state.glitch = false;
        }, 400);
        
        // 显示BUFF
        triggerBuff(state.theme === 'light' ? '+1 LOGIC' : '+1 MANA');
        
    }, 400);
}

// ===== 创建glitch粒子效果 =====
function createGlitchParticles() {
    const colors = state.theme === 'light' 
        ? ['#4f46e5', '#7c3aed', '#a855f7'] 
        : ['#a855f7', '#c084fc', '#e879f9'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 0.5 + 0.3;
        const delay = Math.random() * 0.2;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: glitchParticleFloat ${duration}s ease-out ${delay}s forwards;
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
        `;
        
        DOM.particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, (duration + delay) * 1000);
    }
    
    // 添加粒子浮动动画
    if (!document.querySelector('#glitch-particle-animation')) {
        const style = document.createElement('style');
        style.id = 'glitch-particle-animation';
        style.textContent = `
            @keyframes glitchParticleFloat {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.8;
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== 创建粒子背景 =====
function createParticlesBackground() {
    DOM.particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 20;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: radial-gradient(circle, rgba(168,85,247,0.8), transparent 70%);
            animation: backgroundParticleFloat ${duration}s infinite linear ${delay}s;
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.3;
        `;
        
        DOM.particlesContainer.appendChild(particle);
    }
    
    // 添加背景粒子动画
    if (!document.querySelector('#background-particle-animation')) {
        const style = document.createElement('style');
        style.id = 'background-particle-animation';
        style.textContent = `
            @keyframes backgroundParticleFloat {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}