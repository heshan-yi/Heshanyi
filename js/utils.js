// ===== 全局状态 =====
class AppState {
    constructor() {
        this.theme = 'light';
        this.glitch = false;
        this.scrollProgress = 0;
        this.showBuff = null;
        this.selectedItem = null;
        this.isBotOpen = false;
        this.sections = [];
        this.observer = null;
        this.particles = [];
        this.witchbotMessages = [
            { role: 'bot', text: '你好！我是你的数字助手，可以回答关于这个作品集的问题。' }
        ];
    }
}

const state = new AppState();

// ===== DOM元素缓存 =====
const DOM = {
    body: document.body,
    mainContent: document.getElementById('mainContent'),
    glitchMask: document.getElementById('glitchMask'),
    themeToggle: document.getElementById('themeToggle'),
    homeButton: document.getElementById('homeButton'),
    logoIcon: document.getElementById('logoIcon'),
    logsButton: document.getElementById('logsButton'),
    detailOverlay: document.getElementById('detailOverlay'),
    detailContainer: document.getElementById('detailContainer'),
    witchbotOverlay: document.getElementById('witchbotOverlay'),
    witchbotClose: document.getElementById('witchbotClose'),
    witchbotMessages: document.getElementById('witchbotMessages'),
    witchbotInput: document.getElementById('witchbotInput'),
    witchbotSend: document.getElementById('witchbotSend'),
    witchbotHeaderText: document.getElementById('witchbotHeaderText'),
    shelvesContainer: document.getElementById('shelvesContainer'),
    buffEffect: document.getElementById('buffEffect'),
    progressBar: document.getElementById('progressBar'),
    darkGlow: document.getElementById('darkGlow'),
    particlesContainer: document.getElementById('particlesContainer'),
    
    // 文本元素
    siteTitle: document.getElementById('siteTitle'),
    chineseTitle: document.getElementById('chineseTitle'),
    introTitleMain: document.getElementById('introTitleMain'),
    introSubtitle: document.getElementById('introSubtitle'),
    introDescription: document.getElementById('introDescription'),
    footerText: document.getElementById('footerText'),
    statusActive: document.getElementById('statusActive'),
    themeIcon: document.getElementById('themeIcon')
};

// ===== 工具函数 =====

// 触发BUFF效果
function triggerBuff(text) {
    state.showBuff = text;
    if (DOM.buffEffect) {
        DOM.buffEffect.textContent = text;
        DOM.buffEffect.style.color = state.theme === 'light' ? '#1a1a1a' : '#a855f7';
        DOM.buffEffect.classList.add('show');
        
        setTimeout(() => {
            DOM.buffEffect.classList.remove('show');
            state.showBuff = null;
        }, 1000);
    }
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// 获取WitchBot回复
function getWitchBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // 关键词匹配
    if (lowerMessage.includes('你好') || lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
        return getRandomResponse('greetings');
    }
    
    if (lowerMessage.includes('网站') || lowerMessage.includes('site') || lowerMessage.includes('作品集')) {
        return getRandomResponse('about');
    }
    
    if (lowerMessage.includes('主题') || lowerMessage.includes('theme') || lowerMessage.includes('模式') || lowerMessage.includes('t')) {
        return getRandomResponse('theme');
    }
    
    if (lowerMessage.includes('作品') || lowerMessage.includes('项目') || lowerMessage.includes('work') || lowerMessage.includes('project')) {
        return getRandomResponse('works');
    }
    
    if (lowerMessage.includes('技能') || lowerMessage.includes('能力') || lowerMessage.includes('skill') || lowerMessage.includes('技术')) {
        return getRandomResponse('skills');
    }
    
    // 默认回复
    return getRandomResponse('random');
}

// 获取随机回复
function getRandomResponse(type) {
    const responses = WITCHBOT_RESPONSES[type] || WITCHBOT_RESPONSES.random;
    return responses[Math.floor(Math.random() * responses.length)];
}

// 窗口resize处理
function handleResize() {
    // 重新计算卡片动画延迟
    document.querySelectorAll('.item-slot').forEach((slot, index) => {
        if (state.theme === 'dark') {
            slot.style.animationDelay = `${index * 0.5}s`;
        }
    });
    
    // 重新创建粒子背景
    if (state.theme === 'dark') {
        createParticlesBackground();
    }
}

// 设置滚动进度条
function setupScrollProgress() {
    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalScroll) * 100;
        state.scrollProgress = currentProgress;
        if (DOM.progressBar) {
            DOM.progressBar.style.width = `${state.scrollProgress}%`;
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始调用
}

// 设置Intersection Observer
function setupIntersectionObserver() {
    state.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 观察所有section
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        state.observer.observe(el);
    });
}

// 设置键盘快捷键
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // T键切换主题
        if (e.key.toLowerCase() === 't') {
            toggleTheme();
            triggerBuff(state.theme === 'light' ? '+1 MANA' : '+1 LOGIC');
        }
        
        // ESC键关闭弹窗
        if (e.key === 'Escape') {
            closeDetail();
            toggleWitchBot(false);
        }
        
        // 数字键1-3快速导航
        if (e.key >= '1' && e.key <= '3') {
            const index = parseInt(e.key) - 1;
            const sections = state.theme === 'light' ? DATA.light : DATA.dark;
            if (sections[index]) {
                scrollToSection(sections[index].id);
                triggerBuff('QUICK NAV');
            }
        }
    });
}

// 创建loading屏幕
function createLoadingScreen() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">LOADING ARCHIVE...</div>
    `;
    DOM.body.appendChild(loadingOverlay);
}