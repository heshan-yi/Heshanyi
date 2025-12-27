// ===== 完全仿照原文件的网站数据 =====
const DATA = {
    light: [
        {
            id: 'works',
            name: '作品：向外展示',
            icon: '♠',
            items: [
                {
                    id: 'proj-a', 
                    title: '项目 A', 
                    description: '高精度的商业逻辑与艺术视觉的平衡之作。', 
                    image: 'https://picsum.photos/seed/wa1/600/800', 
                    category: 'Exhibit',
                    content: '这是一个关于高精度商业逻辑与艺术视觉平衡的项目。通过深入理解用户需求，结合前沿的设计理念和技术实现，打造出既美观又实用的解决方案。项目涵盖了从前期调研到最终实现的完整流程。',
                    tags: ['商业设计', '前端开发', '用户体验', '全流程'],
                    
                    // 项目阶段图片（用于轮播）
                    projectStages: [
                        { 
                            image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
                            title: '前期调研',
                            description: '用户访谈与市场分析'
                        },
                        { 
                            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
                            title: '流程图设计',
                            description: '用户旅程与交互流程'
                        },
                        { 
                            image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
                            title: '原型设计',
                            description: '低保真与高保真原型'
                        },
                        { 
                            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
                            title: '场景美术',
                            description: '环境与氛围设计'
                        }
                    ],
                    
                    // 前期调研内容
                    research: {
                        title: '前期调研 / Preliminary Research',
                        description: '通过对目标用户群体的深度访谈和竞品分析，我们确定了项目的核心需求和技术方向。',
                        findings: [
                            '80% 的用户希望有更直观的操作界面',
                            '65% 的受访者关注系统的响应速度',
                            '90% 的用户重视数据可视化能力'
                        ],
                        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
                    },
                    
                    // 流程图
                    flowchart: {
                        title: '流程图 / Flow Chart',
                        description: '用户操作流程与系统交互逻辑的可视化展示，确保每一步都符合用户的心理预期。',
                        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
                    },
                    
                    // 关卡策划
                    levelDesign: {
                        title: '关卡策划 / Level Design',
                        description: '系统功能模块的阶段性规划，确保项目有序推进和用户渐进式学习。',
                        levels: [
                            { name: '新手引导', progress: 100, color: '#4CAF50' },
                            { name: '核心功能', progress: 90, color: '#2196F3' },
                            { name: '进阶操作', progress: 85, color: '#9C27B0' },
                            { name: '高级功能', progress: 75, color: '#FF9800' },
                            { name: '专家模式', progress: 60, color: '#F44336' }
                        ],
                        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
                    },
                    
                    // 美术设计
                    artDesign: {
                        title: '美术设计 / Art Design',
                        sections: [
                            {
                                name: '场景美术',
                                description: '环境氛围与空间布局设计',
                                images: [
                                    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                ]
                            },
                            {
                                name: '角色设计',
                                description: '角色造型与动作设计',
                                images: [
                                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w-800&q=80',
                                    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                ]
                            },
                            {
                                name: 'UI/UX设计',
                                description: '界面设计与用户体验',
                                images: [
                                    'https://images.unsplash.com/photo-1563013544-444a1327a552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1581271260334-7b53e1a9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                ]
                            }
                        ]
                    },
                    
                    // 技术开发
                    technology: {
                        title: '技术实现 / Technology',
                        description: '采用现代技术栈构建高性能、可扩展的系统架构。',
                        stack: [
                            { name: 'React', level: 95 },
                            { name: 'TypeScript', level: 90 },
                            { name: 'Node.js', level: 85 },
                            { name: 'MongoDB', level: 80 },
                            { name: 'Docker', level: 75 }
                        ],
                        features: [
                            '响应式设计，支持多终端',
                            '实时数据同步',
                            '高性能渲染引擎',
                            '模块化架构设计',
                            '自动化测试覆盖'
                        ]
                    },
                    
                    // 测试反馈
                    testing: {
                        title: '测试反馈 / Testing & Feedback',
                        description: '多轮测试收集的用户反馈与优化迭代过程。',
                        feedback: [
                            { stage: 'Alpha测试', score: 7.5, improvements: ['性能优化', '交互改进'] },
                            { stage: 'Beta测试', score: 8.8, improvements: ['Bug修复', 'UI优化'] },
                            { stage: '正式版', score: 9.2, improvements: ['稳定性提升', '用户体验优化'] }
                        ],
                        images: [
                            'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                            'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                            'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                            'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                        ]
                    },
                    
                    detailedContent: '' // 这个字段我们将不再使用，改用上面的结构化数据
                },
                {
                    id: 'proj-a', 
                    title: 'Hurry PoPo', 
                    description: '寻找卫生纸的冒险之旅。', 
                    image: 'image/ProjectA/项目一_介绍-1.png', 
                    category: 'Exhibit',
                    content: '这是一个关于高精度商业逻辑与艺术视觉平衡的项目。通过深入理解用户需求，结合前沿的设计理念和技术实现，打造出既美观又实用的解决方案。项目涵盖了从前期调研到最终实现的完整流程。',
                    tags: ['商业设计', '前端开发', '用户体验', '全流程'],
                    
                    // 项目阶段图片（用于轮播）
                    projectStages: [
                        { 
                            image: 'image/ProjectA/项目一_介绍.png',
                            title: '前期调研',
                            description: '用户访谈与市场分析'
                        },
                        { 
                            image: 'image/ProjectA/项目一_关卡设计.png',
                            title: '流程图设计',
                            description: '用户旅程与交互流程'
                        },
                        { 
                            image: 'image/ProjectA/项目一_关卡美术.png',
                            title: '原型设计',
                            description: '低保真与高保真原型'
                        },
                        { 
                            image: 'image/ProjectA/项目一_UI&角色.png',
                            title: '场景美术',
                            description: '环境与氛围设计'
                        }
                    ],
                    
                    // 前期调研内容
                    research: {
                        title: '前期调研 / Preliminary Research',
                        description: '通过对目标用户群体的深度访谈和竞品分析，我们确定了项目的核心需求和技术方向。',
                        findings: [
                            '80% 的用户希望有更直观的操作界面',
                            '65% 的受访者关注系统的响应速度',
                            '90% 的用户重视数据可视化能力'
                        ],
                        image: 'image/ProjectA/项目一_介绍.png'
                    },
                    
                    // 流程图
                    flowchart: {
                        title: '流程图 / Flow Chart',
                        description: '用户操作流程与系统交互逻辑的可视化展示，确保每一步都符合用户的心理预期。',
                        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
                    },
                    
                    // 关卡策划
                    levelDesign: {
                        title: '关卡策划 / Level Design',
                        description: '系统功能模块的阶段性规划，确保项目有序推进和用户渐进式学习。',
                        levels: [
                            { name: '新手引导', progress: 100, color: '#4CAF50' },
                            { name: '核心功能', progress: 90, color: '#2196F3' },
                            { name: '进阶操作', progress: 85, color: '#9C27B0' },
                            { name: '高级功能', progress: 75, color: '#FF9800' },
                            { name: '专家模式', progress: 60, color: '#F44336' }
                        ],
                        image: 'image/ProjectA/项目一_关卡设计.png'
                    },
                    
                    // 美术设计
                    artDesign: {
                        title: '美术设计 / Art Design',
                        sections: [
                            {
                                name: '场景美术',
                                description: '环境氛围与空间布局设计',
                                images: [
                                    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                ]
                            },
                            {
                                name: '角色设计',
                                description: '角色造型与动作设计',
                                images: [
                                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w-800&q=80',
                                    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                ]
                            },
                            {
                                name: 'UI/UX设计',
                                description: '界面设计与用户体验',
                                images: [
                                    'https://images.unsplash.com/photo-1563013544-444a1327a552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1581271260334-7b53e1a9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                                ]
                            }
                        ]
                    },
                    
                    // 技术开发
                    technology: {
                        title: '技术实现 / Technology',
                        description: '采用现代技术栈构建高性能、可扩展的系统架构。',
                        stack: [
                            { name: 'React', level: 95 },
                            { name: 'TypeScript', level: 90 },
                            { name: 'Node.js', level: 85 },
                            { name: 'MongoDB', level: 80 },
                            { name: 'Docker', level: 75 }
                        ],
                        features: [
                            '响应式设计，支持多终端',
                            '实时数据同步',
                            '高性能渲染引擎',
                            '模块化架构设计',
                            '自动化测试覆盖'
                        ]
                    },
                    
                    // 测试反馈
                    testing: {
                        title: '测试反馈 / Testing & Feedback',
                        description: '多轮测试收集的用户反馈与优化迭代过程。',
                        feedback: [
                            { stage: 'Alpha测试', score: 7.5, improvements: ['性能优化', '交互改进'] },
                            { stage: 'Beta测试', score: 8.8, improvements: ['Bug修复', 'UI优化'] },
                            { stage: '正式版', score: 9.2, improvements: ['稳定性提升', '用户体验优化'] }
                        ],
                        images: [
                            'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                            'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                            'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                            'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                        ]
                    },
                    
                    detailedContent: '' // 这个字段我们将不再使用，改用上面的结构化数据
                },
                { 
                    id: 'exp-concept', 
                    title: '项目C', 
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
            name: '个人能力展示',
            icon: '♣',
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
            name: '关于我的',
            icon: '♦',
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
            icon: '👁️‍🗨️',
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
            icon: '🎥',
            items: [
                { 
                    id: 'commissions', 
                    title: '我绘制的', 
                    description: '过去、现在、未来', 
                    image: 'https://picsum.photos/seed/wd5/600/800', 
                    category: 'Contract',
                    content: '为客户定制的创作，每一次都是新的挑战。在满足需求的同时，保持自己的艺术风格和标准。',
                    tags: ['商业合作', '定制', '艺术', '契约'],
                    detailedContent: `
                        <div class="art-detail-module">
                            <div class="art-tags">
                                ${['正比插画', 'Q版小人', '平面设计', '私人藏品'].map(tag => `
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
                    title: '我创作的', 
                    description: '不被定义的个人的创作', 
                    image: 'https://picsum.photos/seed/wd6/600/800', 
                    category: 'Artifact',
                    content: '个人创作，不受商业限制，完全表达自我。这些作品可能不被大众理解，但却是最真实的自我表达。',
                    tags: ['个人创作', '实验', '表达', '自我'],
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