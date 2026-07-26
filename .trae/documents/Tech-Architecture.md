# 技术架构文档

## 1. 技术栈选型
- **框架**: Next.js 14+ (App Router)
- **样式**: Tailwind CSS (用于快速构建极简响应式UI)
- **动画**: Framer Motion (实现苹果风丝滑动画和滚动触发动效)
- **字体**: 使用 Next/font 引入定制化的精美字体（如 Inter, Montserrat 或系统级 San Francisco 替代方案）
- **图标**: Lucide React (极简线条图标，符合整体设计语言)

## 2. 目录结构
```text
/Users/wty/Documents/个人/Wty_PM/design/cloned-website
├── app/
│   ├── layout.tsx         # 全局布局，包含导航栏和全局动画包裹器
│   ├── page.tsx           # 首页 (/)
│   ├── portfolio/
│   │   └── page.tsx       # 作品集页 (/portfolio)
│   ├── about/
│   │   └── page.tsx       # 关于页 (/about)
│   └── globals.css        # Tailwind 全局样式与自定义CSS变量
├── components/
│   ├── ui/                # 基础UI组件 (按钮, 卡片等)
│   ├── layout/            # 布局组件 (Header, Footer)
│   └── animations/        # 封装的 Framer Motion 动画组件 (FadeIn, SlideUp等)
├── public/                # 静态资源 (图片, 视频, 字体)
├── tailwind.config.ts     # Tailwind 配置文件，包含自定义颜色和字体集
└── package.json           # 项目依赖
```

## 3. 核心技术实现路径

### 3.1 路由与布局 (Next.js App Router)
- 利用 `app/layout.tsx` 构建持久化共享的导航栏(Header)，实现页面切换时导航状态的无缝衔接。
- 采用 AnimatePresence (Framer Motion) 在路由切换时实现平滑过渡。

### 3.2 样式与主题 (Tailwind CSS)
- **极简主题配置**: 在 `tailwind.config.ts` 中设定极简的颜色系统 (例如纯黑 `#000000`, 纯白 `#FFFFFF`, 中性灰 `#888888`)。
- **排版**: 统一采用左对齐 (`text-left`)，增加行高 (`leading-relaxed` 或 `leading-loose`) 打造高级感。
- **自定义工具类**: 提取常用的动画延迟、字体平滑等设置。

### 3.3 动画设计 (Framer Motion)
- **FadeInUp 组件**: 封装可复用的组件，支持 `initial`, `animate`, `viewport` 等属性，实现滚动触发和视差效果。
- **Stagger Children**: 在作品集列表等父容器上应用 `staggerChildren` 实现依次出现的科技感。

## 4. 部署与构建
- 在开发完成后，通过 `npm run build` 确保 Next.js 应用可以成功静态导出或服务端渲染编译。
