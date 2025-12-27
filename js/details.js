// ===== 打开详情页面 =====
function openDetail(item) {
    if (!item) return;
    
    // 创建详情内容
    DOM.detailContainer.innerHTML = createDetailHTML(item);
    DOM.detailOverlay.classList.add('active');
    
    // 阻止背景滚动
    DOM.body.style.overflow = 'hidden';
    
    // 初始化轮播图和其他交互
    setTimeout(() => {
        // 初始化项目阶段轮播图
        if (item.projectStages && item.projectStages.length > 0) {
            initProjectStagesSlider();
        }
        
        // 初始化技术进度条动画
        if (item.technology) {
            initTechProgressBars();
        }
        
        // 绑定图片点击事件
        document.querySelectorAll('.art-gallery-item, .testing-image').forEach(img => {
            img.addEventListener('click', function() {
                const imgSrc = this.querySelector('img')?.src;
                const title = this.querySelector('img')?.alt || 'Image';
                if (imgSrc) {
                    openLightbox(imgSrc, title);
                }
            });
        });
    }, 100);
    
    // 触发mounted效果
    setTimeout(() => {
        if (DOM.detailContainer) {
            DOM.detailContainer.style.opacity = '1';
        }
    }, 50);
}

// ===== 创建详情HTML =====
function createDetailHTML(item) {
    const isDark = state.theme === 'dark';
    const layoutType = getLayoutType(item.id, isDark);
    
    if (isDark) {
        return createDarkDetailHTML(item, layoutType);
    } else {
        return createLightDetailHTML(item, layoutType);
    }
}

function getLayoutType(itemId, isDark) {
    if (isDark) {
        if (itemId.includes('vessel') || itemId.includes('lore')) return 'world';
        if (itemId.includes('commissions') || itemId.includes('art')) return 'art';
        return 'log';
    } else {
        if (itemId.includes('proj') || itemId.includes('exp')) return 'project';
        if (itemId.includes('skill') || itemId.includes('work') || itemId.includes('mind')) return 'ability';
        return 'hobby';
    }
}

function createDarkDetailHTML(item, type) {
    return `
        <div class="dark-detail-view">
            <div class="dark-detail-header">
                <button class="detail-back-btn" onclick="closeDetail()">
                    <span class="back-arrow">←</span>
                    <span class="back-text">EXIT_SANCTUM</span>
                </button>
                <div class="detail-type">
                    <p class="detail-type-label">RECORD_TYPE</p>
                    <p class="detail-type-value">${type}</p>
                </div>
            </div>
            
            <!-- 药瓶效果 -->
            <div class="potion-bottle">
                <div class="potion-body">
                    <img src="${item.image}" alt="${item.title}" class="potion-image">
                    <div class="potion-overlay"></div>
                    <span class="potion-label">EXTRACTING_ESSENCE</span>
                </div>
            </div>
            
            <!-- 卷轴效果 -->
            <div class="dark-scroll">
                <div class="scroll-roller top">
                    <div class="roller-left"></div>
                    <div class="roller-center"></div>
                    <div class="roller-right"></div>
                </div>
                <div class="scroll-body">
                    <div class="scroll-header">
                        <div>
                            <span class="scroll-category">Codex Archive / ${type}</span>
                            <h2>${item.title}</h2>
                        </div>
                        <div class="scroll-tag">${item.category}</div>
                    </div>
                    
                    <div class="scroll-narrative">${item.description}</div>
                    
                    <div class="scroll-content">
                        ${item.detailedContent || item.content || ''}
                    </div>
                    
                    <div class="scroll-footer">
                        <div class="scroll-seal">
                            <span>SEALED_UNDER_THE_ECLIPSE</span>
                            <div class="seal-dots">
                                ${Array(5).fill().map(() => '<div class="dot"></div>').join('')}
                            </div>
                        </div>
                        <div class="scroll-feather">🪶</div>
                    </div>
                </div>
                <div class="scroll-roller bottom">
                    <div class="roller-left"></div>
                    <div class="roller-center"></div>
                    <div class="roller-right"></div>
                </div>
            </div>
            
            <div class="detail-bottom-border"></div>
        </div>
    `;
}

// 修改createLightDetailHTML函数
function createLightDetailHTML(item, type) {
    // 如果是项目A且有结构化数据，使用新的模板
    if (item.id === 'proj-a' && item.research) {
        return createProjectAHTML(item);
    }
    
    // 其他项目使用原来的模板
    return `
        <div class="light-detail-view">
            <div class="light-detail-header">
                <button class="detail-back-btn" onclick="closeDetail()">
                    <span class="back-arrow">←</span>
                    <span class="back-text">BACK_TO_ARCHIVE</span>
                </button>
                <div class="detail-type">
                    <p class="detail-type-label">RECORD_TYPE</p>
                    <p class="detail-type-value">${type}</p>
                </div>
            </div>
            
            <div class="gallery-container">
                <!-- 顶部：左边图片右边介绍 -->
                <section class="gallery-hero">
                    <div class="gallery-frame-wrapper">
                        <div class="gallery-frame">
                            <div class="gallery-image-container">
                                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                            </div>
                        </div>
                    </div>
                    <div class="gallery-info">
                        <span class="gallery-tag">Exhibit / ${type}</span>
                        <h2>${item.title}</h2>
                        <p class="gallery-description">${item.description}</p>
                        <div class="gallery-content">
                            ${item.content || ''}
                        </div>
                        ${item.tags ? `
                        <div class="gallery-tags">
                            ${item.tags.map(tag => `<span class="gallery-tag-item">${tag}</span>`).join('')}
                        </div>
                        ` : ''}
                    </div>
                </section>
                
                ${item.detailedContent || ''}
            </div>
        </div>
    `;
}

// 创建项目A的特殊模板
function createProjectAHTML(item) {
    return `
        <div class="light-detail-view">
            <div class="light-detail-header">
                <button class="detail-back-btn" onclick="closeDetail()">
                    <span class="back-arrow">←</span>
                    <span class="back-text">BACK_TO_ARCHIVE</span>
                </button>
                <div class="detail-type">
                    <p class="detail-type-label">PROJECT_PORTFOLIO</p>
                    <p class="detail-type-value">${item.category}</p>
                </div>
            </div>
            
            <div class="gallery-container">
                <!-- 顶部：左边图片右边介绍 -->
                <section class="gallery-hero">
                    <div class="gallery-frame-wrapper">
                        <div class="gallery-frame">
                            <div class="gallery-image-container">
                                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                            </div>
                        </div>
                    </div>
                    <div class="gallery-info">
                        <span class="gallery-tag">Exhibit / Case Study</span>
                        <h2>${item.title}</h2>
                        <p class="gallery-description">${item.description}</p>
                        <div class="gallery-content">
                            ${item.content}
                        </div>
                        ${item.tags ? `
                        <div class="gallery-tags">
                            ${item.tags.map(tag => `<span class="gallery-tag-item">${tag}</span>`).join('')}
                        </div>
                        ` : ''}
                    </div>
                </section>
                
                <!-- 项目阶段轮播图 -->
                ${item.projectStages ? `
                <section class="project-section-module">
                    <h3 class="section-title">项目阶段 / Project Stages</h3>
                    <p class="section-description">项目的关键阶段和里程碑，展示从概念到实现的完整流程。</p>
                    
                    // 在轮播图部分修复HTML结构
                    <div class="project-stages-slider">
                        <div class="image-slider" id="projectStagesSlider">
                            <div class="image-counter">1 / ${item.projectStages.length}</div>
                            ${item.projectStages.map((stage, index) => `
                                <div class="stage-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                                    <img src="${stage.image}" alt="${stage.title}">
                                    <div class="stage-info">
                                        <h4>${stage.title}</h4>
                                        <p>${stage.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                            ${item.projectStages.length > 1 ? `
                                <button class="slider-arrow prev">←</button>
                                <button class="slider-arrow next">→</button>
                            ` : ''}
                            <div class="slider-nav">
                                ${item.projectStages.map((_, index) => `
                                    <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>
                ` : ''}
                
                <!-- 前期调研 -->
                ${item.research ? `
                <section class="project-section-module">
                    <h3 class="section-title">${item.research.title}</h3>
                    <p class="section-description">${item.research.description}</p>
                    
                    <div class="research-module">
                        <div class="research-findings">
                            ${item.research.findings ? item.research.findings.map(finding => `
                                <div class="finding-item">
                                    <p>${finding}</p>
                                </div>
                            `).join('') : ''}
                        </div>
                        ${item.research.image ? `
                        <div class="research-visual">
                            <img src="${item.research.image}" alt="Research" class="flowchart-image">
                        </div>
                        ` : ''}
                    </div>
                </section>
                ` : ''}
                
                <!-- 流程图 -->
                ${item.flowchart ? `
                <section class="project-section-module">
                    <h3 class="section-title">${item.flowchart.title}</h3>
                    <p class="section-description">${item.flowchart.description}</p>
                    
                    <div class="flowchart-module">
                        ${item.flowchart.image ? `
                        <img src="${item.flowchart.image}" alt="Flowchart" class="flowchart-image">
                        ` : ''}
                    </div>
                </section>
                ` : ''}
                
                <!-- 关卡策划 -->
                ${item.levelDesign ? `
                <section class="project-section-module">
                    <h3 class="section-title">${item.levelDesign.title}</h3>
                    <p class="section-description">${item.levelDesign.description}</p>
                    
                    <div class="level-design-module">
                        ${item.levelDesign.image ? `
                        <img src="${item.levelDesign.image}" alt="Level Design" class="flowchart-image">
                        ` : ''}
                        
                        ${item.levelDesign.levels ? `
                        <div class="level-progress">
                            ${item.levelDesign.levels.map(level => `
                                <div class="level-item">
                                    <span class="level-name">${level.name}</span>
                                    <div class="level-bar">
                                        <div class="level-progress-bar" 
                                             style="width: ${level.progress}%; background-color: ${level.color};"></div>
                                    </div>
                                    <span class="level-percentage">${level.progress}%</span>
                                </div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                </section>
                ` : ''}
                
                <!-- 美术设计 -->
                ${item.artDesign ? `
                <section class="project-section-module">
                    <h3 class="section-title">${item.artDesign.title}</h3>
                    
                    <div class="art-design-module">
                        <div class="art-sections">
                            ${item.artDesign.sections ? item.artDesign.sections.map(section => `
                                <div class="art-section">
                                    <h4 class="art-section-title">${section.name}</h4>
                                    <p class="art-section-description">${section.description}</p>
                                    <div class="art-gallery">
                                        ${section.images ? section.images.map((img, idx) => `
                                            <div class="art-gallery-item" onclick="openLightbox('${img}', '${section.name} ${idx + 1}')">
                                                <img src="${img}" alt="${section.name} ${idx + 1}">
                                            </div>
                                        `).join('') : ''}
                                    </div>
                                </div>
                            `).join('') : ''}
                        </div>
                    </div>
                </section>
                ` : ''}
                
                <!-- 技术实现 -->
                ${item.technology ? `
                <section class="project-section-module">
                    <h3 class="section-title">${item.technology.title}</h3>
                    <p class="section-description">${item.technology.description}</p>
                    
                    <div class="technology-module">
                        ${item.technology.stack ? `
                        <div class="tech-stack">
                            ${item.technology.stack.map(tech => `
                                <div class="tech-item">
                                    <div class="tech-header">
                                        <span class="tech-name">${tech.name}</span>
                                        <span class="tech-level">${tech.level}%</span>
                                    </div>
                                    <div class="tech-bar">
                                        <div class="tech-progress" style="width: ${tech.level}%;"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        ` : ''}
                        
                        ${item.technology.features ? `
                        <div class="tech-features">
                            ${item.technology.features.map(feature => `
                                <span class="tech-feature">${feature}</span>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                </section>
                ` : ''}
                
                <!-- 测试反馈 -->
                ${item.testing ? `
                <section class="project-section-module">
                    <h3 class="section-title">${item.testing.title}</h3>
                    <p class="section-description">${item.testing.description}</p>
                    
                    <div class="testing-module">
                        ${item.testing.feedback ? `
                        <div class="testing-timeline">
                            ${item.testing.feedback.map(phase => `
                                <div class="testing-phase">
                                    <div class="phase-info">
                                        <span class="phase-name">${phase.stage}</span>
                                        <span class="phase-score">${phase.score}/10</span>
                                    </div>
                                    ${phase.improvements ? `
                                    <div class="improvements">
                                        ${phase.improvements.map(imp => `
                                            <span class="improvement-tag">${imp}</span>
                                        `).join('')}
                                    </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                        ` : ''}
                        
                        ${item.testing.images ? `
                        <div class="testing-gallery">
                            ${item.testing.images.map((img, idx) => `
                                <div class="testing-image" onclick="openLightbox('${img}', 'Testing ${idx + 1}')">
                                    <img src="${img}" alt="Testing ${idx + 1}">
                                </div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                </section>
                ` : ''}
            </div>
        </div>
    `;
}

// 添加图片灯箱功能
function openLightbox(imageSrc, title) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            <img src="${imageSrc}" alt="${title}" class="lightbox-image">
            <div class="lightbox-title">${title}</div>
        </div>
    `;
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });
    
    document.body.appendChild(lightbox);
}

// 添加灯箱样式到CSS
const lightboxStyle = document.createElement('style');
lightboxStyle.textContent = `
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 2rem;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    }
    
    .lightbox-image {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .lightbox-title {
        position: absolute;
        bottom: -2rem;
        left: 0;
        width: 100%;
        text-align: center;
        color: white;
        font-family: 'Cinzel', serif;
        font-size: 0.875rem;
        padding: 0.5rem;
        opacity: 0.8;
    }
    
    .lightbox-close {
        position: absolute;
        top: -2.5rem;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        transition: opacity 0.3s;
    }
    
    .lightbox-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(lightboxStyle);

// ===== 关闭详情页面 =====
function closeDetail() {
    // 停止轮播
    const slider = document.querySelector('.image-slider');
    if (slider) {
        const intervalId = slider.dataset.intervalId;
        if (intervalId) clearInterval(intervalId);
    }
    
    DOM.detailOverlay.classList.remove('active');
    state.selectedItem = null;
    DOM.body.style.overflow = '';
    
    // 重置详情容器opacity
    if (DOM.detailContainer) {
        DOM.detailContainer.style.opacity = '0';
    }
}

// ===== 多图展示功能 =====
function createImageSlider(images, descriptions = []) {
    if (!images || images.length === 0) return '';
    
    let sliderHTML = `
        <div class="image-slider">
            <div class="image-counter">1 / ${images.length}</div>
    `;
    
    // 添加主图
    images.forEach((img, index) => {
        sliderHTML += `
            <img src="${img}" 
                 alt="项目图片 ${index + 1}" 
                 class="slider-main-image ${index === 0 ? 'active' : ''}"
                 data-index="${index}">
        `;
    });
    
    // 添加导航箭头
    sliderHTML += `
            <button class="slider-arrow prev">←</button>
            <button class="slider-arrow next">→</button>
            <div class="slider-nav">
    `;
    
    // 添加导航点
    images.forEach((_, index) => {
        sliderHTML += `
            <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `;
    });
    
    sliderHTML += `
            </div>
        </div>
    `;
    
    return sliderHTML;
}

function createThumbnailNav(images, descriptions = []) {
    if (!images || images.length === 0) return '';
    
    let thumbnailHTML = '<div class="thumbnail-nav">';
    
    images.forEach((img, index) => {
        thumbnailHTML += `
            <div class="thumbnail-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${img}" alt="缩略图 ${index + 1}">
                ${descriptions[index] ? `<div class="thumbnail-label">${descriptions[index]}</div>` : ''}
            </div>
        `;
    });
    
    thumbnailHTML += '</div>';
    return thumbnailHTML;
}

function createImageGrid(images, descriptions = []) {
    if (!images || images.length === 0) return '';
    
    let gridHTML = '<div class="image-grid">';
    
    images.forEach((img, index) => {
        gridHTML += `
            <div class="grid-image-item" data-index="${index}">
                <img src="${img}" alt="网格图片 ${index + 1}">
                ${descriptions[index] ? `
                    <div class="grid-image-overlay">
                        <p>${descriptions[index]}</p>
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    gridHTML += '</div>';
    return gridHTML;
}

// ===== 初始化图片轮播 =====
function initImageSlider() {
    const slider = document.querySelector('.image-slider');
    if (!slider) return;
    
    const images = slider.querySelectorAll('.slider-main-image');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = slider.querySelector('.slider-arrow.prev');
    const nextBtn = slider.querySelector('.slider-arrow.next');
    const counter = slider.querySelector('.image-counter');
    const thumbnailItems = document.querySelectorAll('.thumbnail-item');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    // 切换到指定图片
    function goToSlide(index) {
        // 移除当前活跃状态
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        if (thumbnailItems[currentIndex]) {
            thumbnailItems[currentIndex].classList.remove('active');
        }
        
        // 更新索引
        currentIndex = (index + totalImages) % totalImages;
        
        // 添加新活跃状态
        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        if (thumbnailItems[currentIndex]) {
            thumbnailItems[currentIndex].classList.add('active');
            // 滚动到可见区域
            thumbnailItems[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
        
        // 更新计数器
        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${totalImages}`;
        }
    }
    
    // 下一张
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // 上一张
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // 绑定事件
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // 绑定导航点点击事件
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            goToSlide(index);
        });
    });
    
    // 绑定缩略图点击事件
    if (thumbnailItems) {
        thumbnailItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                goToSlide(index);
            });
        });
    }
    
    // 绑定键盘事件
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // 自动轮播（可选）
    let autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // 鼠标悬停时暂停自动轮播
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // 保存intervalId到slider元素上
    slider.dataset.intervalId = autoSlideInterval;
    
    // 开始自动轮播
    startAutoSlide();
}

// 初始化项目阶段轮播图
// 初始化项目阶段轮播图
function initProjectStagesSlider() {
    const slider = document.querySelector('.project-stages-slider .image-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.stage-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = slider.querySelector('.slider-arrow.prev');
    const nextBtn = slider.querySelector('.slider-arrow.next');
    const counter = slider.querySelector('.image-counter');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    function goToSlide(index) {
        // 移除当前活跃状态
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        // 更新索引
        currentIndex = (index + totalSlides) % totalSlides;
        
        // 添加新活跃状态
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        
        // 更新计数器
        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
        }
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // 绑定事件
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            if (!isNaN(index)) {
                goToSlide(index);
            }
        });
    });
    
    // 键盘导航
    const keyboardHandler = (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        }
    };
    
    document.addEventListener('keydown', keyboardHandler);
    
    // 自动轮播
    let autoSlideInterval;
    function startAutoSlide() {
        if (totalSlides > 1) {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    }
    
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }
    
    // 鼠标悬停暂停
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // 开始自动轮播
    startAutoSlide();
    
    // 清理函数
    return () => {
        stopAutoSlide();
        document.removeEventListener('keydown', keyboardHandler);
        if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
        if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
    };
}

// 在openDetail函数中初始化
function openDetail(item) {
    if (!item) return;
    
    // 创建详情内容
    DOM.detailContainer.innerHTML = createDetailHTML(item);
    DOM.detailOverlay.classList.add('active');
    
    // 阻止背景滚动
    DOM.body.style.overflow = 'hidden';
    
    // 初始化轮播图
    setTimeout(() => {
        initProjectStagesSlider();
        
        // 如果是项目A，还需要初始化技术进度条动画
        if (item.id === 'proj-a' && item.technology) {
            initTechProgressBars();
        }
    }, 100);
    
    // 触发mounted效果
    setTimeout(() => {
        if (DOM.detailContainer) {
            DOM.detailContainer.style.opacity = '1';
        }
    }, 50);
}

// 初始化技术进度条动画
function initTechProgressBars() {
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        const progressBar = item.querySelector('.tech-progress');
        if (progressBar) {
            // 触发重绘以启动动画
            void progressBar.offsetWidth;
            progressBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
    
    const levelBars = document.querySelectorAll('.level-progress-bar');
    levelBars.forEach(bar => {
        void bar.offsetWidth;
        bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}