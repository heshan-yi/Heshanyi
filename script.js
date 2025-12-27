// ===== 完全仿照原文件的网站数据 =====
const DATA = {
    light: [
        {
            id: 'works',
            name: '作品：向外展示',
            icon: '🖼️',
            items: [
                { 
                    id: 'proj-a', 
                    title: '项目 A', 
                    description: '高精度的商业逻辑与艺术视觉的平衡之作。', 
                    image: 'https://picsum.photos/seed/wa1/600/800', 
                    category: 'Exhibit',
                    content: '这是一个关于高精度商业逻辑与艺术视觉平衡的项目。通过深入理解用户需求，结合前沿的设计理念和技术实现，打造出既美观又实用的解决方案。在项目中，我主要负责视觉设计和前端交互实现，使用了React、TypeScript和Framer Motion等技术栈。项目的核心理念是在严谨的商业逻辑中注入艺术美感，让用户体验既高效又愉悦。',
                    tags: ['商业设计', '前端开发', '用户体验'],
                    detailedContent: `
                        <div class="project-detail-module">
                            <div class="project-grid">
                                <div class="project-section">
                                    <h3 class="project-section-title">Exhibit 02 / Genesis & Research</h3>
                                    <p class="project-section-subtitle">前期调研与策划构思</p>
                                    <p class="project-section-description">
                                        通过对竞品分析及用户心流映射，确定了核心玩法循环。我们专注于在精密逻辑中植入艺术美感。
                                    </p>
                                    <div class="project-metrics">
                                        <div class="metric">
                                            <span class="metric-label">TARGET_USER</span>
                                            <p class="metric-value">Creative Gamers</p>
                                        </div>
                                        <div class="metric">
                                            <span class="metric-label">CORE_LOOP</span>
                                            <p class="metric-value">Discover -> Create -> Refine</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-timeline">
                                    <div class="timeline-item">
                                        <div class="timeline-number">1</div>
                                        <div class="timeline-line"></div>
                                        <div class="timeline-label">IDEATION</div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-number">2</div>
                                        <div class="timeline-line"></div>
                                        <div class="timeline-label">UX_MAPPING</div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-number">3</div>
                                        <div class="timeline-line"></div>
                                        <div class="timeline-label">PROTOTYPE</div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-number">4</div>
                                        <div class="timeline-line"></div>
                                        <div class="timeline-label">POLISH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'proj-b', 
                    title: '项目 B', 
                    description: '关于交互流动的深度探索与技术实践。', 
                    image: 'https://picsum.photos/seed/wa2/600/800', 
                    category: 'Exhibit',
                    content: '交互流动是现代设计的核心要素。本项目探索了如何通过流畅的交互设计提升用户体验，并实践了多种前沿的交互技术。包括手势识别、微交互、页面过渡动画等。通过精心设计的交互流程，让用户操作变得直觉化，降低学习成本，提升使用效率。',
                    tags: ['交互设计', '动画', '用户体验'],
                    detailedContent: `
                        <div class="ability-detail-module">
                            <div class="ability-grid">
                                <div class="ability-section">
                                    <h4 class="ability-section-title">Logic Pillars</h4>
                                    <div class="ability-metrics">
                                        <div class="ability-metric">
                                            <div class="metric-header">
                                                <span>MODULE_STABILITY_0</span>
                                                <span>85%</span>
                                            </div>
                                            <div class="metric-bar">
                                                <div class="metric-bar-fill" style="width: 85%"></div>
                                            </div>
                                        </div>
                                        <div class="ability-metric">
                                            <div class="metric-header">
                                                <span>MODULE_STABILITY_1</span>
                                                <span>92%</span>
                                            </div>
                                            <div class="metric-bar">
                                                <div class="metric-bar-fill" style="width: 92%"></div>
                                            </div>
                                        </div>
                                        <div class="ability-metric">
                                            <div class="metric-header">
                                                <span>MODULE_STABILITY_2</span>
                                                <span>78%</span>
                                            </div>
                                            <div class="metric-bar">
                                                <div class="metric-bar-fill" style="width: 78%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ability-quote">
                                    <p class="quote-text">
                                        能力不仅仅是工具的堆砌，更是对复杂系统进行解构与重组的直觉。
                                    </p>
                                </div>
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'exp-concept', 
                    title: '实验 / 概念', 
                    description: '未定义的边界，纯粹的视觉与逻辑游戏。', 
                    image: 'https://picsum.photos/seed/wa3/600/800', 
                    category: 'Experimental',
                    content: '实验性项目，探索设计与技术的边界。不设限的创意过程，追求纯粹的视觉表达与逻辑美学的结合。这个项目是我个人探索的一部分，尝试突破常规的设计模式，寻找新的表现形式和技术可能性。',
                    tags: ['实验性', '概念设计', '创新'],
                    detailedContent: `
                        <div class="hobby-detail-module">
                            <div class="hobby-grid">
                                ${Array(8).fill().map((_, i) => `
                                    <div class="hobby-item ${i % 2 === 0 ? 'hobby-item-shifted' : ''}">
                                        <img src="https://picsum.photos/seed/hb-${i+1}/400/400" alt="Hobby ${i+1}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'abilities',
            name: '能力：方法与结构',
            icon: '🧠',
            items: [
                { 
                    id: 'skill-tree', 
                    title: '技能树', 
                    description: '全栈覆盖的技术图谱与艺术审美的交集。', 
                    image: 'https://picsum.photos/seed/wa4/600/800', 
                    category: 'Attribute',
                    content: '覆盖前端、后端、设计、产品等多个领域的技能图谱。强调技术与艺术的交叉融合，形成独特的设计思维和方法论。从前端的React、Vue到后端的Node.js、Python，从UI/UX设计到产品策划，形成了完整的技能闭环。',
                    tags: ['全栈开发', '设计思维', '方法论'],
                    detailedContent: `
                        <div class="project-detail-module">
                            <div class="project-grid">
                                <div class="project-section">
                                    <h3 class="project-section-title">Exhibit 02 / Genesis & Research</h3>
                                    <p class="project-section-subtitle">前期调研与策划构思</p>
                                    <p class="project-section-description">
                                        通过对竞品分析及用户心流映射，确定了核心玩法循环。我们专注于在精密逻辑中植入艺术美感。
                                    </p>
                                    <div class="project-metrics">
                                        <div class="metric">
                                            <span class="metric-label">TARGET_USER</span>
                                            <p class="metric-value">Creative Gamers</p>
                                        </div>
                                        <div class="metric">
                                            <span class="metric-label">CORE_LOOP</span>
                                            <p class="metric-value">Discover -> Create -> Refine</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'workflow', 
                    title: '工作流程', 
                    description: '从混沌到有序，标准化的高效创作路径。', 
                    image: 'https://picsum.photos/seed/wa5/600/800', 
                    category: 'System',
                    content: '经过多年实践优化的工作流程，从需求分析到设计实现，再到测试部署，形成了一套高效的系统化创作方法。这套流程包括了敏捷开发、设计冲刺、用户测试等多个环节，确保项目质量和效率。',
                    tags: ['工作流', '效率', '方法论'],
                    detailedContent: `
                        <div class="ability-detail-module">
                            <div class="ability-grid">
                                <div class="ability-section">
                                    <h4 class="ability-section-title">Logic Pillars</h4>
                                    <div class="ability-metrics">
                                        <div class="ability-metric">
                                            <div class="metric-header">
                                                <span>MODULE_STABILITY_0</span>
                                                <span>85%</span>
                                            </div>
                                            <div class="metric-bar">
                                                <div class="metric-bar-fill" style="width: 85%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'mindset', 
                    title: '思维方式', 
                    description: '不仅是解决问题，更是解构世界的方式。', 
                    image: 'https://picsum.photos/seed/wa6/600/800', 
                    category: 'Core',
                    content: '独特的思维方式，将复杂问题拆解为可执行的步骤。注重系统思维和创造性解决问题的能力的培养。这种思维方式不仅适用于技术问题，也适用于生活和工作中的各种挑战。',
                    tags: ['思维方式', '解决问题', '系统思维'],
                    detailedContent: `
                        <div class="hobby-detail-module">
                            <div class="hobby-grid">
                                ${Array(4).fill().map((_, i) => `
                                    <div class="hobby-item ${i % 2 === 0 ? 'hobby-item-shifted' : ''}">
                                        <img src="https://picsum.photos/seed/hb-${i+1}/400/400" alt="Hobby ${i+1}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'hobbies',
            name: '爱好：人格底色',
            icon: '🌿',
            items: [
                { 
                    id: 'interests', 
                    title: '兴趣领域', 
                    description: '构成自我的那些琐碎而热烈的事物。', 
                    image: 'https://picsum.photos/seed/wa7/600/800', 
                    category: 'Flavor',
                    content: '摄影、旅行、阅读、音乐、电影...这些兴趣构成了我生活的底色，也影响了我的设计和工作方式。从不同领域汲取灵感，让创作更加丰富多元。',
                    tags: ['摄影', '阅读', '音乐', '旅行'],
                    detailedContent: `
                        <div class="hobby-detail-module">
                            <div class="hobby-grid">
                                ${Array(8).fill().map((_, i) => `
                                    <div class="hobby-item ${i % 2 === 0 ? 'hobby-item-shifted' : ''}">
                                        <img src="https://picsum.photos/seed/hobby-${i+1}/400/400" alt="Hobby ${i+1}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'long-term', 
                    title: '长期主题', 
                    description: '时间河流中，始终坚持的某种叙事。', 
                    image: 'https://picsum.photos/seed/wa8/600/800', 
                    category: 'Legend',
                    content: '对美的追求、对技术的探索、对人文的关怀，这些是我长期坚持的主题。无论时代如何变化，这些核心价值始终指引着我的方向。',
                    tags: ['美学', '技术', '人文', '探索'],
                    detailedContent: `
                        <div class="hobby-detail-module">
                            <div class="hobby-grid">
                                ${Array(4).fill().map((_, i) => `
                                    <div class="hobby-item">
                                        <img src="https://picsum.photos/seed/longterm-${i+1}/400/400" alt="Long Term ${i+1}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'inspiration', 
                    title: '私人灵感源', 
                    description: '那些隐秘的、照亮创作瞬间的光。', 
                    image: 'https://picsum.photos/seed/wa9/600/800', 
                    category: 'Soul',
                    content: '自然景观、深夜思考、意外邂逅、梦境碎片...这些看似随机的事物，往往成为创作中最珍贵的灵感来源。',
                    tags: ['灵感', '自然', '梦境', '思考'],
                    detailedContent: `
                        <div class="hobby-detail-module">
                            <div class="hobby-grid">
                                ${Array(6).fill().map((_, i) => `
                                    <div class="hobby-item ${i % 3 === 0 ? 'hobby-item-shifted' : ''}">
                                        <img src="https://picsum.photos/seed/inspiration-${i+1}/400/400" alt="Inspiration ${i+1}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                }
            ]
        }
    ],
    dark: [
        {
            id: 'oc-world',
            name: 'OC / 世界观',
            icon: '🌌',
            items: [
                { 
                    id: 'vessel', 
                    title: '容器原型', 
                    description: '关于"我"在不同维度的投射与化身。', 
                    image: 'https://picsum.photos/seed/wd1/600/800', 
                    category: 'Vessel',
                    content: '探索身份认同的多维表达，通过不同的艺术形式表现"自我"在不同维度中的投射与化身。这个项目是对身份流动性的思考，每个人都是多个"我"的集合体。',
                    tags: ['身份认同', '艺术表达', '多维度', '化身'],
                    detailedContent: `
                        <div class="world-detail-module">
                            <div class="world-section">
                                <h4 class="world-section-title">世界观地图 / Forbidden Chart</h4>
                                <div class="world-map">
                                    <img src="https://picsum.photos/seed/fantasy-world/1600/900" alt="Fantasy World">
                                    <div class="world-map-overlay">
                                        <span class="world-map-label">THE_UNDISCOVERED_COUNTRY</span>
                                    </div>
                                </div>
                            </div>
                            <div class="world-grid">
                                <div class="world-section">
                                    <h4 class="world-section-title">主要住民 / Resident OCs</h4>
                                    <div class="world-ocs">
                                        ${[
                                            { name: "Sylas Vane", role: "Keykeeper of the Void", status: "Watcher" },
                                            { name: "Lyra Dawn", role: "Echo Weaver", status: "Manifested" },
                                            { name: "The Alchemist", role: "Curator of Static", status: "Host" }
                                        ].map((oc, i) => `
                                            <div class="world-oc">
                                                <div class="oc-avatar">
                                                    <img src="https://picsum.photos/seed/oc-portrait-${i}/300/300" alt="${oc.name}">
                                                </div>
                                                <div class="oc-info">
                                                    <p class="oc-name">${oc.name}</p>
                                                    <p class="oc-role">${oc.role}</p>
                                                </div>
                                                <div class="oc-status">${oc.status}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="world-section">
                                    <h4 class="world-section-title">人际网 / Relationship Weave</h4>
                                    <div class="world-relationships">
                                        <p class="relationship-text">"Lyra 寻找着 Sylas 弄丢的钥匙，而 Sylas 却在 Lyra 的回声中迷失。他们从未交谈，但呼吸却在同一个频率跳动。"</p>
                                        <div class="relationship-info">
                                            <span>Log Source: Fragment #902</span>
                                            <span>Entropy Level: Moderate</span>
                                        </div>
                                        <div class="relationship-lines">
                                            ${Array(3).fill().map(() => `<div class="relationship-line"></div>`).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'lore', 
                    title: '世界观残卷', 
                    description: '碎裂的逻辑，拼凑出一个非欧几里得的梦境。', 
                    image: 'https://picsum.photos/seed/wd2/600/800', 
                    category: 'Fragment',
                    content: '破碎的世界观片段，试图通过非线性叙事构建一个超越常规几何逻辑的梦境空间。这是我对现实与虚构边界的探索，也是对自己内心世界的映射。',
                    tags: ['世界观', '梦境', '非线性', '碎片'],
                    detailedContent: `
                        <div class="log-detail-module">
                            <div class="log-quote">
                                "每一次记录都是对虚无的一次反击。我们在这里堆砌逻辑，试图在混沌中搭建一座永恒的图书馆，哪怕它最终会被名为'遗忘'的洪水淹没。"
                            </div>
                            <div class="log-fragments">
                                ${Array(4).fill().map((_, i) => `
                                    <div class="log-fragment">
                                        <span class="fragment-icon">📜</span>
                                        <div class="fragment-info">
                                            <span class="fragment-label">Fragment</span>
                                            <span class="fragment-name">Echo_${(i+1)*2}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'growth-thoughts',
            name: '成长记录 / 思考',
            icon: '📓',
            items: [
                { 
                    id: 'echoes', 
                    title: '昨日回响', 
                    description: '成长的疼痛与喜悦，被封存在泛黄的瓶子里。', 
                    image: 'https://picsum.photos/seed/wd3/600/800', 
                    category: 'Echo',
                    content: '记录成长过程中的重要时刻，无论是成功的喜悦还是失败的教训，都值得被珍藏和反思。这些经历塑造了今天的我。',
                    tags: ['成长', '反思', '记忆', '记录'],
                    detailedContent: `
                        <div class="log-detail-module">
                            <div class="log-quote">
                                "记忆是时间的琥珀，封存着过去的自己。每一次打开，都是与旧日的对话。"
                            </div>
                            <div class="log-fragments">
                                ${Array(3).fill().map((_, i) => `
                                    <div class="log-fragment">
                                        <span class="fragment-icon">📖</span>
                                        <div class="fragment-info">
                                            <span class="fragment-label">Memory</span>
                                            <span class="fragment-name">Echo_${i+1}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'monologue', 
                    title: '深渊独白', 
                    description: '在无声的深夜，对存在意义的反复推敲。', 
                    image: 'https://picsum.photos/seed/wd4/600/800', 
                    category: 'Log',
                    content: '深夜的思考，对自我、存在、意义的探索。这些思考可能没有答案，但过程本身就是一种成长。',
                    tags: ['哲学', '存在', '思考', '深夜'],
                    detailedContent: `
                        <div class="log-detail-module">
                            <div class="log-quote">
                                "在深渊的边缘行走，每一步都是对存在的拷问。或许答案不在深渊之底，而在探索的过程本身。"
                            </div>
                            <div class="log-fragments">
                                ${Array(4).fill().map((_, i) => `
                                    <div class="log-fragment">
                                        <span class="fragment-icon">💭</span>
                                        <div class="fragment-info">
                                            <span class="fragment-label">Thought</span>
                                            <span class="fragment-name">Fragment_${i+1}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'creations',
            name: '约稿与私人创作',
            icon: '🗡️',
            items: [
                { 
                    id: 'commissions', 
                    title: '契约之作', 
                    description: '为他人绘制的灵魂切片，严谨且附带代价。', 
                    image: 'https://picsum.photos/seed/wd5/600/800', 
                    category: 'Contract',
                    content: '为客户定制的创作，每一次都是新的挑战。在满足需求的同时，保持自己的艺术风格和标准。',
                    tags: ['商业合作', '定制', '艺术', '契约'],
                    detailedContent: `
                        <div class="art-detail-module">
                            <div class="art-tags">
                                ${['正比插画', 'Q版小人', '平面设计', '契约绘制', '私人藏品'].map(tag => `
                                    <span class="art-tag">${tag}</span>
                                `).join('')}
                            </div>
                            <div class="art-presentation">
                                <div class="art-image-container">
                                    <img src="https://picsum.photos/seed/commission-final/1200/1600" alt="Commission Art">
                                    <div class="art-verification">
                                        <span>CONTRACT<br/>VERIFIED</span>
                                    </div>
                                </div>
                                <div class="art-metadata">
                                    <div class="metadata-info">
                                        <div class="metadata-item">
                                            <span class="metadata-label">ELAPSED_TIME</span>
                                            <span>72_MOON_CYCLES</span>
                                        </div>
                                        <div class="metadata-divider"></div>
                                        <div class="metadata-item">
                                            <span class="metadata-label">FILE_ID</span>
                                            <span>COMM_#0923_ART</span>
                                        </div>
                                    </div>
                                    <div class="metadata-status">
                                        STATUS: FINALIZED
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                { 
                    id: 'private-art', 
                    title: '禁忌秘艺', 
                    description: '不被定义的、仅属于个人的危险创作。', 
                    image: 'https://picsum.photos/seed/wd6/600/800', 
                    category: 'Artifact',
                    content: '个人创作，不受商业限制，完全表达自我。这些作品可能不被大众理解，但却是最真实的自我表达。',
                    tags: ['个人创作', '实验', '表达', '禁忌'],
                    detailedContent: `
                        <div class="art-detail-module">
                            <div class="art-tags">
                                ${['禁忌', '实验', '个人表达', '危险创作', '灵魂切片'].map(tag => `
                                    <span class="art-tag">${tag}</span>
                                `).join('')}
                            </div>
                            <div class="art-presentation">
                                <div class="art-image-container">
                                    <img src="https://picsum.photos/seed/private-art/1200/1600" alt="Private Art">
                                    <div class="art-verification">
                                        <span>PRIVATE<br/>COLLECTION</span>
                                    </div>
                                </div>
                                <div class="art-metadata">
                                    <div class="metadata-info">
                                        <div class="metadata-item">
                                            <span class="metadata-label">CREATION_DATE</span>
                                            <span>UNDISCLOSED</span>
                                        </div>
                                        <div class="metadata-divider"></div>
                                        <div class="metadata-item">
                                            <span class="metadata-label">FILE_ID</span>
                                            <span>PRIVATE_#001</span>
                                        </div>
                                    </div>
                                    <div class="metadata-status">
                                        STATUS: SECRET
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        }
    ]
};

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

// ===== WitchBot回复库 =====
const WITCHBOT_RESPONSES = {
    greetings: [
        "你好，旅者。欢迎来到我的陈列馆。有什么我可以帮你的吗？",
        "欢迎，探索者。我是WitchBot，这里的数字守护者。",
        "你好，我是你的AI助手。这个空间记录了我的创作和思考。",
        "欢迎来到这个双面世界。光明与黑暗，理性与感性，都在这里交汇。"
    ],
    
    about: [
        "这是一个双主题的作品集网站，展示了我在不同维度的创作。",
        "网站分为光明和黑暗两种模式，代表不同的创作面向和个人表达。",
        "这里记录了我的技术实践、艺术探索和哲学思考。",
        "每个作品都是我在某个时刻的思考结晶，承载着特定的意义和价值。"
    ],
    
    theme: [
        "按T键可以快速切换主题，体验不同的视觉风格和内容维度。",
        "光明模式展示公开作品和技术实践，黑暗模式探索内心世界和艺术表达。",
        "两种主题代表着我的不同创作面向，但都源自同一个核心。",
        "切换主题时会有glitch效果，象征着维度的转换和认知的重构。"
    ],
    
    works: [
        "我的作品涵盖了设计、开发、艺术、思考等多个领域。",
        "每个项目都有其独特的故事和创作背景，点击卡片可以查看详情。",
        "作品展示了我在技术实现和艺术表达之间的平衡探索。",
        "从商业项目到个人实验，从理性设计到感性表达，这里都有记录。"
    ],
    
    skills: [
        "我的技能覆盖全栈开发、UI/UX设计、产品策划等多个领域。",
        "技术方面擅长React、TypeScript、Node.js等现代技术栈。",
        "设计方面注重用户体验、视觉美学和交互细节。",
        "同时也在不断探索新的技术可能性和艺术表达形式。"
    ],
    
    random: [
        "这个问题让我思考了一下...",
        "我还在学习中，这个问题的答案可能需要更多探索。",
        "或许你可以换个角度思考这个问题？",
        "这个问题的答案可能就隐藏在这个网站的某个角落。",
        "作为一个数字助手，我的知识在不断扩展和更新。",
        "让我想想如何更好地回答你的问题..."
    ]
};

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

// ===== 创建loading屏幕 =====
function createLoadingScreen() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">LOADING ARCHIVE...</div>
    `;
    DOM.body.appendChild(loadingOverlay);
}

// ===== 加载初始数据 =====
function loadInitialData() {
    state.sections = state.theme === 'light' ? DATA.light : DATA.dark;
    renderSections();
}

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
    
    // 设置动画延迟（原版效果）
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

// ===== 设置滚动进度条 =====
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

// ===== 设置Intersection Observer =====
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

// ===== 设置键盘快捷键 =====
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

// ===== 滚动到指定区域 =====
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

// ===== 触发BUFF效果 =====
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

// ===== 处理项目点击 =====
function handleItemClick(item) {
    state.selectedItem = item;
    openDetail(item);
    triggerBuff('ITEM SELECTED');
}

// ===== 打开详情页面 =====
function openDetail(item) {
    if (!item) return;
    
    // 创建详情内容
    DOM.detailContainer.innerHTML = createDetailHTML(item);
    DOM.detailOverlay.classList.add('active');
    
    // 阻止背景滚动
    DOM.body.style.overflow = 'hidden';
    
    // 触发mounted效果（原版中的opacity过渡）
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

function createLightDetailHTML(item, type) {
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
                <!-- Introduction Hero -->
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
                    </div>
                </section>
                
                <div class="gallery-content">
                    ${item.content || ''}
                    
                    ${item.detailedContent || ''}
                    
                    ${item.tags ? `
                    <div class="gallery-tags">
                        ${item.tags.map(tag => `<span class="gallery-tag-item">${tag}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ===== 关闭详情页面 =====
function closeDetail() {
    DOM.detailOverlay.classList.remove('active');
    state.selectedItem = null;
    DOM.body.style.overflow = '';
    
    // 重置详情容器opacity
    if (DOM.detailContainer) {
        DOM.detailContainer.style.opacity = '0';
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

// ===== 获取WitchBot回复 =====
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

// ===== 获取随机回复 =====
function getRandomResponse(type) {
    const responses = WITCHBOT_RESPONSES[type] || WITCHBOT_RESPONSES.random;
    return responses[Math.floor(Math.random() * responses.length)];
}

// ===== 窗口resize处理 =====
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

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', init);

// ===== 全局函数（供HTML调用） =====
window.openDetail = openDetail;
window.closeDetail = closeDetail;
window.scrollToSection = scrollToSection;
window.triggerBuff = triggerBuff;
window.toggleTheme = toggleTheme;