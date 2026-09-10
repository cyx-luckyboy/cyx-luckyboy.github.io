export const profile = {
  name: '陈艺祥',
  nameEn: 'Chen Yixiang',
  role: '全栈开发 · AI 应用',
  tagline: '用克制的界面，承载可靠的交互。',
  intro:
    '硕士在读，深耕前端开发。具备扎实的 HTML/CSS/JavaScript 基础与 Vue、React 生态实战经验，熟悉工程化与性能优化。拥有 6 个月前端实习与多个完整项目经验，可独立完成从需求分析到上线部署的全流程交付。熟练使用 Cursor、Claude Code 等 AI 开发工具，持续关注技术落地与体验质量。',
  avatarText: '陈',
  location: '广东 · 惠州 / 广州',
  school: '广州大学 · 网络与信息安全（硕士）',
  undergrad: '广东海洋大学 · 电子信息工程',
  phone: '137 1961 8611',
  email: '1246675664@qq.com',
  github: 'https://github.com/cyx-luckyboy',
}

export const stats = [
  { value: '6+', label: '月前端实习' },
  { value: '4+', label: '完整项目' },
  { value: '10+', label: '核心模块' },
  { value: '3.65', label: '本科 GPA' },
]

export const experiences = [
  {
    period: '2026.03 — 2026.06',
    company: '北京广通优云科技股份有限公司',
    title: '前端开发工程师（校招）',
    points: [
      '参与 DIY 平台核心模块开发，Vue2 组件封装与门户性能优化',
      '独立负责东莞农商行 APP 360 核心模块，React 监控数据接入与渲染',
    ],
  },
  {
    period: '2025.07 — 2025.10',
    company: '广东海大协华信息科技有限公司',
    title: '前端开发工程师（实习）',
    points: [
      '微信小程序核心模块：Vue3 + UniApp 商品列表与数据统计',
      '官网 / 小程序对接 DeepSeek 等大模型，封装 Axios 实现智能问答',
      '大数据驾驶舱 Demo：Element Plus + ECharts 可视化',
    ],
  },
]

export const education = [
  {
    period: '2026.09 — 2029.06',
    school: '广州大学',
    degree: '网络与信息安全 · 硕士',
  },
  {
    period: '2022.09 — 2026.06',
    school: '广东海洋大学',
    degree: '电子信息工程 · 本科 · GPA 3.65/4.0',
  },
]

export const projects = [
  {
    id: 'app360',
    title: '东莞农商行 APP 360',
    subtitle: '金融级监控与业务可视化平台',
    period: '2026.03 — 至今',
    description:
      '独立负责银行 APP 360 核心模块全流程开发。基于 React 构建高可用前端应用，完成业务可视化、实时监控对接与模块交互，适配银行移动端高并发与高可靠性要求。',
    stack: ['React', 'JavaScript', 'Axios', '代理跨域', 'AI 辅助研发'],
    links: [],
    accent: '#8fd4c8',
    visual: 'finance',
  },
  {
    id: 'ai-chatbot',
    title: '小猪 AI 助手',
    subtitle: '跨平台桌面端 AI 对话客户端',
    period: '2026.02 — 2026.05',
    description:
      '独立开源项目。基于 Electron 构建桌面 AI 助手，整合多厂商大模型 API、流式对话、语音交互、本地 IndexedDB 隐私存储与附件解析，支持 Windows / macOS。',
    stack: ['Electron', 'Vue3', 'TypeScript', 'Vite', 'Tailwind'],
    links: [{ label: 'GitHub', href: 'https://github.com/cyx-luckyboy/AI_Chatbot.git' }],
    accent: '#c4b59a',
    visual: 'ai',
  },
  {
    id: 'face-checkin',
    title: '人脸识别签到系统',
    subtitle: 'OpenCV + Flask 智能签到',
    period: '2025.05 — 2025.06',
    description:
      '独立设计实现人脸采集、模型训练、实时识别与签到管理。识别准确率 92%+，单次签到耗时 < 2 秒，支持 Excel 导出与邮件通知。',
    stack: ['Python', 'OpenCV', 'Flask', 'LBPH', 'JavaScript'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/cyx-luckyboy/Facial_Recognition_System.git',
      },
    ],
    accent: '#9bb0c7',
    visual: 'vision',
  },
]

export const strengths = [
  {
    title: '前后端开发',
    desc: '熟悉 Vue / React 前端工程与 Node / Flask 接口协作，可独立完成页面、组件、联调与跨域治理。',
    tags: ['Vue', 'React', 'Axios', '工程化'],
  },
  {
    title: 'Python',
    desc: '具备 Python 全栈与算法落地经验，覆盖 Flask API、OpenCV 视觉处理、数据处理与模型训练流程。',
    tags: ['Flask', 'OpenCV', '数据处理'],
  },
  {
    title: '小程序',
    desc: '使用 Vue3 + UniApp 完成微信小程序核心模块，并完成商品列表、数据统计与 AI 问答对接。',
    tags: ['UniApp', '微信小程序', 'DeepSeek'],
  },
  {
    title: '桌面端',
    desc: '基于 Electron 独立开发跨平台桌面 AI 助手，整合主进程通信、本地存储、流式对话与多模型切换。',
    tags: ['Electron', 'Vue3', 'TypeScript'],
  },
  {
    title: '具身智能 · VLA',
    desc: '关注 Vision-Language-Action 方向，探索多模态感知、指令理解与动作决策在具身智能场景中的落地。',
    tags: ['VLA', '多模态', '具身智能'],
  },
  {
    title: 'AI 应用落地',
    desc: '熟练对接多厂商大模型 API，结合 Cursor / Claude Code 提升研发效率，完成智能问答与流式交互。',
    tags: ['大模型', '流式交互', 'Cursor'],
  },
]

export const navLinks = [
  { id: 'projects', label: '项目' },
  { id: 'about', label: '经历' },
  { id: 'strengths', label: '优势' },
  { id: 'contact', label: '联系' },
]
