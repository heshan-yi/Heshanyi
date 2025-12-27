// ===== 初始化 =====
function init() {
    // 创建loading效果
    createLoadingScreen();
    
    // 延迟初始化以展示loading效果
    setTimeout(() => {
        loadInitialData();
        setupEventListeners();
        setupScrollProgress();
        setupKeyboardShortcuts();
        setupIntersectionObserver();
        updateThemeUI();
        setupWitchBotToggle();
        
        // 隐藏loading
        const loadingOverlay = document.querySelector('.loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
        
        // 初始动画
        DOM.body.classList.add('loaded');
        
        // 触发初始BUFF
        setTimeout(() => {
            triggerBuff('WELCOME');
        }, 1000);
        
        // 初始化粒子效果
        if (state.theme === 'dark') {
            createParticlesBackground();
        }
    }, 1500);
}

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', init);

// ===== 全局函数（供HTML调用） =====
window.openDetail = openDetail;
window.closeDetail = closeDetail;
window.scrollToSection = scrollToSection;
window.triggerBuff = triggerBuff;
window.toggleTheme = toggleTheme;