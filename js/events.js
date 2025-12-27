// ===== 设置事件监听器 =====
function setupEventListeners() {
    // 主题切换
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // 首页按钮
    DOM.homeButton.addEventListener('click', () => {
        scrollToSection('home');
        triggerBuff('RECENTERED');
    });
    
    // 日志按钮
    DOM.logsButton.addEventListener('click', () => {
        toggleWitchBot(true);
        triggerBuff('LOGS ACCESSED');
    });
    
    // 关闭WitchBot
    DOM.witchbotClose.addEventListener('click', () => {
        toggleWitchBot(false);
    });
    
    // 导航按钮
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            if (section) {
                scrollToSection(section);
                triggerBuff('NAVIGATED');
            }
        });
    });
    
    // 页脚链接
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', () => {
            const section = link.dataset.section;
            if (section) {
                scrollToSection(section);
                triggerBuff('STORAGE ACCESSED');
            }
        });
    });
    
    // WitchBot发送消息
    DOM.witchbotSend.addEventListener('click', sendWitchBotMessage);
    DOM.witchbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendWitchBotMessage();
        }
    });
    
    // 点击弹窗外部关闭
    DOM.detailOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.detailOverlay) {
            closeDetail();
        }
    });
    
    DOM.witchbotOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.witchbotOverlay) {
            toggleWitchBot(false);
        }
    });
    
    // 窗口resize
    window.addEventListener('resize', handleResize);
}