// ===== 渲染Sections =====
function renderSections() {
    DOM.shelvesContainer.innerHTML = '';
    
    state.sections.forEach((section, sectionIndex) => {
        const sectionElement = createSectionElement(section, sectionIndex);
        DOM.shelvesContainer.appendChild(sectionElement);
        
        // 为section添加观察器
        if (state.observer) {
            state.observer.observe(sectionElement);
        }
    });
}

// ===== 创建Section元素 =====
function createSectionElement(section, index) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'shelf-section scroll-reveal';
    sectionDiv.id = section.id;
    sectionDiv.dataset.index = index;
    
    // 创建header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'shelf-header';
    headerDiv.innerHTML = `
        <div class="shelf-header-icon">
            <div class="shelf-icon">${section.icon}</div>
        </div>
        <div class="shelf-title-container">
            <h3 class="shelf-title">${section.name}</h3>
            <p class="shelf-subtitle">${state.theme === 'dark' ? 'LEVEL_ARCHIVE_DATA' : 'CURATED_SECTOR_01'}</p>
        </div>
        <div class="shelf-divider"></div>
    `;
    
    // 创建grid
    const gridDiv = document.createElement('div');
    gridDiv.className = 'shelf-grid';
    
    // 创建项目卡片
    section.items.forEach((item, itemIndex) => {
        const card = createItemSlot(item, itemIndex);
        gridDiv.appendChild(card);
    });
    
    // 创建分隔线
    const dividerDiv = document.createElement('div');
    dividerDiv.className = 'shelf-divider-line';
    
    sectionDiv.appendChild(headerDiv);
    sectionDiv.appendChild(gridDiv);
    if (index < state.sections.length - 1) {
        sectionDiv.appendChild(dividerDiv);
    }
    
    return sectionDiv;
}

// ===== 创建Item Slot =====
function createItemSlot(item, index) {
    const isDark = state.theme === 'dark';
    const isRare = ['Masterwork', 'Legendary', 'Artifact', 'Vessel', 'Soul', 'Contract'].includes(item.category);
    
    const slot = document.createElement('div');
    slot.className = `item-slot ${isRare ? 'item-slot-rare' : ''}`;
    
    // 设置动画延迟
    if (isDark) {
        slot.style.animationDelay = `${index * 0.5}s`;
    }
    
    slot.innerHTML = `
        <div class="item-slot-frame">
            <div class="progress-bar-inner"></div>
            
            <div class="item-hud">
                <span class="category-badge">${item.category}</span>
                <span class="hover-hint">${isDark ? 'ANALYZING_CORE...' : 'CURATING_ITEM...'}</span>
            </div>
            
            <img src="${item.image}" alt="${item.title}" class="item-image">
        </div>
        
        <div class="item-info">
            <h4 class="item-slot-title">${item.title}</h4>
            <p class="item-slot-description">${item.description}</p>
            
            <div class="interaction-hint">
                <div class="hint-dot"></div>
                <span class="hint-text">Inspect</span>
            </div>
        </div>
    `;
    
    // 添加交互事件
    slot.addEventListener('click', () => {
        handleItemClick(item);
    });
    
    slot.addEventListener('mouseenter', (e) => {
        slot.style.zIndex = '10';
        if (isDark) {
            slot.style.animation = 'none';
        }
        
        // 更新悬停提示
        const hint = slot.querySelector('.hover-hint');
        if (hint) {
            hint.style.opacity = '1';
        }
    });
    
    slot.addEventListener('mouseleave', (e) => {
        slot.style.zIndex = '1';
        if (isDark) {
            slot.style.animation = `floatDream 10s ease-in-out infinite ${index * 0.5}s`;
        }
        
        // 重置悬停提示
        const hint = slot.querySelector('.hover-hint');
        if (hint) {
            hint.style.opacity = '0';
        }
    });
    
    return slot;
}

// ===== 加载初始数据 =====
function loadInitialData() {
    state.sections = state.theme === 'light' ? DATA.light : DATA.dark;
    renderSections();
}

// ===== 更新主题相关的UI元素 =====
function updateThemeUI() {
    const isDark = state.theme === 'dark';
    
    // 更新logo
    DOM.logoIcon.textContent = isDark ? '🔮' : '🏛️';
    
    // 更新标题
    DOM.siteTitle.textContent = isDark ? 'INNER_ALCHEMIST' : 'PUBLIC_CURATOR';
    
    // 更新中文标题
    DOM.chineseTitle.textContent = isDark ? '深渊旅者' : '象牙塔主';
    
    // 更新状态
    DOM.statusActive.textContent = isDark ? 'STASIS_MODE' : 'CORE_ACTIVE';
    DOM.statusActive.style.color = isDark ? '#a855f7' : '#4f46e5';
    
    // 更新介绍标题
    DOM.introTitleMain.textContent = isDark ? '幽影' : '自叙';
    DOM.introSubtitle.textContent = isDark ? 'Persona Card' : 'Introduction';
    
    // 更新介绍文本
    DOM.introDescription.textContent = isDark 
        ? "深渊的观测者，破碎梦境的缝补匠。在虚无的静态中提取代码的魔力，将逻辑萃取为致幻的数字药水。欢迎进入我的里人格档案。" 
        : "设计师、开发者，以及视觉逻辑的策展人。执着于在精密技术与人文美学之间寻找那一抹呼吸感。欢迎来到我的个人陈列馆。";
    
    // 更新页脚文本
    DOM.footerText.textContent = isDark 
        ? "The shadow has been documented. The narrative continues in the silence." 
        : "The curator has finished the daily log. Identity synchronization complete.";
    
    // 更新主题按钮图标
    DOM.themeIcon.textContent = isDark ? '👁️' : '⚖️';
    
    // 更新暗黑光晕
    DOM.darkGlow.style.display = isDark ? 'block' : 'none';

    // 更新粒子容器
    if (isDark) {
        createParticlesBackground();
    } else {
        DOM.particlesContainer.innerHTML = '';
    }
    
    // 重新渲染sections
    renderSections();
}

// ===== 处理项目点击 =====
function handleItemClick(item) {
    state.selectedItem = item;
    openDetail(item);
    triggerBuff('ITEM SELECTED');
}