export const profile = {
  name: '陈艺祥',
  nameEn: 'Chen Yixiang',
  role: '大模型应用开发 · 具身智能',
  tagline: '把大模型接到真实场景：语音、Agent 与具身课堂。',
  intro:
    '硕士在读，专注大模型应用开发。具备完整落地经验：参与宇树 G1 具身智能教育机器人的语音交互与 LLM 内容生成链路；独立开发开源桌面 AI 工作台（多厂商模型、持续语音对话、本机 Agent、会议记录）。熟练使用 Python / FastAPI 构建微服务，掌握 Vue3 / React 全栈开发，熟悉 Docker 部署与 Git 协作；动手能力强，从音色克隆、机器人控制到桌面端打包均有实践。',
  avatarText: '陈',
  location: '广东 · 惠州 / 广州',
  school: '广州大学 · 网络与信息安全（硕士）',
  undergrad: '广东海洋大学 · 电子信息工程',
  phone: '137 1961 8611',
  email: '1246675664@qq.com',
  github: 'https://github.com/cyx-luckyboy',
}

export const stats = [
  { value: '13+', label: '课堂微服务' },
  { value: '10+', label: '大模型厂商' },
  { value: '3', label: '段实习 / 校招' },
  { value: '3.65', label: '本科 GPA' },
]

export const experiences = [
  {
    period: '2026.06 — 2026.09',
    company: '广州数志科技有限公司',
    title: '大模型应用开发实习生（具身智能方向）',
    points: [
      '参与宇树 G1 智慧教育项目，负责语音交互全链路（ASR→LLM→TTS）与对话打断（barge-in）',
      '独立对接 Seed-TTS 流式合成与 CosyVoice 本地合成，完成音色复刻、BGM 混音与字幕同步',
      '基于 FunASR 构建本地实时 ASR；用 Qwen 实现课堂问答与转写纠错；参与数字人接入与 Docker 双节点部署',
    ],
  },
  {
    period: '2026.03 — 2026.06',
    company: '北京广通优云科技股份有限公司',
    title: '前端开发工程师（校招）',
    points: [
      '参与 DIY 平台核心模块开发，React 组件封装与门户性能优化',
      '独立负责东莞农商行 APP 360 核心模块，完成监控数据接入、可视化渲染与跨域代理',
    ],
  },
  {
    period: '2025.07 — 2025.10',
    company: '广东海大协华信息科技有限公司',
    title: '前端开发工程师（实习）',
    points: [
      '微信小程序核心模块开发（Vue3 + UniApp）',
      '小程序对接 DeepSeek，实现智能问答；参与大数据驾驶舱可视化（ECharts）',
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
    id: 'g1-edu',
    title: '智慧教育机器人',
    subtitle: '宇树 G1 具身智能课堂教育系统',
    period: '2026.06 — 至今',
    description:
      '基于宇树 G1 的课堂教育机器人，模块化微服务架构（13+ 服务、Docker 双节点）。机器人可独立完成整堂课：自动讲解 PPT、与学生实时语音问答，并根据提问即时生成补充课件。负责 ASR→LLM→TTS 全链路、教案生成管线、课堂问答与状态机编排。',
    stack: ['Python', 'FastAPI', 'LangChain', 'FunASR', 'Seed-TTS', 'Qwen', 'Docker'],
    links: [],
    accent: '#8fd4c8',
    visual: 'robot',
  },
  {
    id: 'ai-chatbot',
    title: '小猪 AI 助手',
    subtitle: '开源桌面端 AI 工作台',
    period: '2026.02 — 至今',
    description:
      '独立开源项目。从对话客户端演进为集多厂商大模型、持续语音交互、本机 Agent、会议记录与类 IDE 工作台于一体的个人 AI 工作台。统一适配 10 家厂商 API，自研 Pipecat 语音 Pipeline，支持 Function Calling 本地工具与全量 IndexedDB 隐私存储。',
    stack: ['Electron', 'Vue3', 'TypeScript', 'Pipecat', 'GPT-SoVITS', 'Monorepo'],
    links: [{ label: 'GitHub', href: 'https://github.com/cyx-luckyboy/AI_Chatbot.git' }],
    accent: '#c4b59a',
    visual: 'ai',
  },
  {
    id: 'app360',
    title: '东莞农商行 APP 360',
    subtitle: '金融级监控与业务可视化平台',
    period: '2026.03 — 至今',
    description:
      '独立负责银行 APP 360 核心模块全流程开发。基于 React 实现监控数据实时接入与可视化展示，通过代理配置与请求封装解决跨域问题，满足金融级稳定性要求。',
    stack: ['React', 'JavaScript', 'Axios', '代理跨域', 'AI 辅助研发'],
    links: [],
    accent: '#9bb0c7',
    visual: 'finance',
  },
]

export const strengths = [
  {
    title: '大模型应用开发',
    desc: '熟悉 OpenAI 兼容协议、流式输出、Function Calling 与多模态输入；掌握 Prompt Engineering 与 Agent 工具调用，落地 LangChain / LlamaIndex。',
    tags: ['LangChain', 'Agent', '流式输出'],
  },
  {
    title: '语音链路 ASR / TTS',
    desc: '具备 FunASR 实时识别、Seed-TTS 流式合成、CosyVoice / GPT-SoVITS 音色克隆经验，支持 barge-in 打断与字幕同步。',
    tags: ['FunASR', 'Seed-TTS', '音色克隆'],
  },
  {
    title: '后端与微服务',
    desc: '熟悉 Python / FastAPI 微服务、RESTful / WebSocket 接口设计与多服务编排，具备 Docker Compose 双节点部署经验。',
    tags: ['FastAPI', 'WebSocket', 'Docker'],
  },
  {
    title: '前端与桌面端',
    desc: '熟悉 HTML/CSS/JavaScript/TypeScript 与 Vue3、React；具备 Electron 跨端桌面应用、小程序与 ECharts 可视化经验。',
    tags: ['Vue3', 'React', 'Electron'],
  },
  {
    title: '具身智能落地',
    desc: '参与宇树 G1 课堂机器人全链路开发，覆盖语音交互、LLM 内容生成、关节控制与课堂状态机编排。',
    tags: ['宇树 G1', 'unitree_sdk', '状态机'],
  },
  {
    title: '荣誉与基础',
    desc: '蓝桥杯 EDA 省级一等奖；系统集成项目管理工程师；CET-4；校级三好学生与优秀学业一等奖学金。',
    tags: ['竞赛', '证书', '学业'],
  },
]

export const navLinks = [
  { id: 'projects', label: '项目' },
  { id: 'about', label: '经历' },
  { id: 'strengths', label: '优势' },
  { id: 'contact', label: '联系' },
]
