// ===== 设置WitchBot切换按钮 =====
function setupWitchBotToggle() {
    const witchbotToggle = document.createElement('div');
    witchbotToggle.className = 'witchbot-toggle';
    witchbotToggle.id = 'witchbotToggle';
    witchbotToggle.innerHTML = '<span id="witchbotToggleIcon">✒️</span>';
    
    witchbotToggle.addEventListener('click', () => {
        toggleWitchBot(!state.isBotOpen);
    });
    
    // 添加到页面
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.appendChild(witchbotToggle);
    }
}

// ===== 切换WitchBot =====
function toggleWitchBot(open) {
    state.isBotOpen = open;
    const witchbotOverlay = DOM.witchbotOverlay;
    const witchbotToggle = document.getElementById('witchbotToggle');
    const witchbotToggleIcon = document.getElementById('witchbotToggleIcon');
    
    if (open) {
        witchbotOverlay.classList.add('active');
        if (witchbotToggle) {
            witchbotToggle.style.transform = 'rotate(12deg)';
            witchbotToggleIcon.textContent = '✕';
        }
        
        // 更新WitchBot头部文本
        if (DOM.witchbotHeaderText) {
            DOM.witchbotHeaderText.textContent = state.theme === 'dark' ? 'Signal Received' : 'Curator Desk';
        }
        
        // 聚焦输入框
        setTimeout(() => {
            if (DOM.witchbotInput) {
                DOM.witchbotInput.focus();
            }
        }, 100);
    } else {
        witchbotOverlay.classList.remove('active');
        if (witchbotToggle) {
            witchbotToggle.style.transform = '';
            witchbotToggleIcon.textContent = state.theme === 'dark' ? '👁️' : '✒️';
        }
    }
}

// ===== WitchBot发送消息 =====
function sendWitchBotMessage() {
    const input = DOM.witchbotInput;
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息
    addUserMessage(message);
    
    // 清空输入框
    input.value = '';
    
    // 滚动到底部
    DOM.witchbotMessages.scrollTop = DOM.witchbotMessages.scrollHeight;
    
    // 获取AI回复
    setTimeout(() => {
        const response = getWitchBotResponse(message);
        addBotMessage(response);
    }, 800 + Math.random() * 400);
}

// ===== 添加用户消息 =====
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    DOM.witchbotMessages.appendChild(messageDiv);
    
    // 添加到状态
    state.witchbotMessages.push({ role: 'user', text: message });
}

// ===== 添加Bot消息 =====
function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    DOM.witchbotMessages.appendChild(messageDiv);
    
    // 添加到状态
    state.witchbotMessages.push({ role: 'bot', text: message });
    
    // 滚动到底部
    DOM.witchbotMessages.scrollTop = DOM.witchbotMessages.scrollHeight;
}