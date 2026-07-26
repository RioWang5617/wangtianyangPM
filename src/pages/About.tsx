import { useEffect, useState } from 'react';
import { ChevronRight, FileText, Zap, Phone } from 'lucide-react';

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  const reveal = (delay: number) => ({
    style: {
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateY(0) scale(1) translateX(0)' : 'translateY(20px)',
      transition: 'opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)',
      transitionDelay: `${delay}ms`,
    },
  });

  const slideIn = (delay: number) => ({
    style: {
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
      transition: 'opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)',
      transitionDelay: `${delay}ms`,
    },
  });

  const scaleUp = (delay: number) => ({
    style: {
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'scale(1)' : 'scale(0.95)',
      transition: 'opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)',
      transitionDelay: `${delay}ms`,
    },
  });

  return (
    <div className="min-h-screen bg-[#070612] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        </div>
      </div>

      <main className="relative z-10 pt-32 lg:pt-48 pb-20 lg:pb-32 px-6 md:px-12 lg:px-24 xl:px-[200px] max-w-[1920px] mx-auto">
        
        {/* Intro Section */}
        <section id="intro" className="mb-32 lg:mb-48 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 space-y-6 lg:space-y-8" {...reveal(100)}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase opacity-60 text-xs lg:text-[16px]">Hello ~ 我是 小O</span>
            </div>
            <h1 className="font-bold tracking-tighter leading-[1.1] md:leading-none md:whitespace-nowrap text-5xl md:text-7xl lg:text-8xl xl:text-[96px]">
              6年 UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-300">设计专家</span>
            </h1>
            <p className="font-light text-[#86868b] leading-relaxed max-w-2xl text-left text-lg md:text-xl lg:text-[24px]">
              深耕 App / Web / B 端后台业务产品，致力于通过 AI 提效与严谨的组件规范，构建具有生命力的数字化交互体验。
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="https://drive.google.com/file/d/1VAl_cFKCmhCjFsmtypLamuusQUAfaiPU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3">
                <FileText className="w-5 h-5" />
                <span>下载完整简历</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">学历</span>
                <span className="text-lg font-medium whitespace-nowrap">本科</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">专业</span>
                <span className="text-lg font-medium whitespace-nowrap">心理学（在读）</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">经验</span>
                <span className="text-lg font-medium whitespace-nowrap">6年+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">坐标</span>
                <span className="text-lg font-medium whitespace-nowrap">深圳</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[500px] aspect-[4/5] relative" {...scaleUp(300)}>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-green-500/30 rounded-[48px] blur-3xl opacity-40"></div>
            <div className="relative w-full h-full rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl bg-white/[0.02]">
              <img src="https://images.unsplash.com/photo-1728218948405-d749e7d1851e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwM2QlMjBjaGFyYWN0ZXIlMjBhdmF0YXIlMjBmdXR1cmlzdGljJTIwYmxhY2slMjBiYWNrZ3JvdW5kJTIwcHJvZmlsZXxlbnwxfHx8fDE3NzM1NjE4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="欧顺 虚拟头像" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070612] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="flex flex-col">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">个人优势</h2>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(200)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                拥有 6 年 UI/UX 设计经验，覆盖 AI、电商与 IoT 等行业场景，能够快速理解业务需求并转化为有效的体验方案。
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(300)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                具备 App / Web / B 端后台多端设计经验，可独立完成需求分析、方案输出与设计落地。
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(400)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                熟悉组件库、设计规范与 Figma 变量管理，能够提升设计复用效率，并结合 AI 工具优化设计流程。
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(500)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                熟悉 AI 工具类与业务型产品设计，具备跨产品、研发协同推进能力。
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="background" className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="flex flex-col">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">工作经历</h2>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-8"></div>
          </div>
          <div className="space-y-6">
            <div className="group p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all" {...slideIn(200)}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight md:whitespace-nowrap">劲速（深圳）云计算科技有限公司</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-purple-400 font-medium md:whitespace-nowrap">
                    <span className="text-[#c27aff]">UI 设计师</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[#86868b] font-mono text-sm md:text-base">2025.04 - 2025.10</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-10">
                主导 AI 产品「DINGZUO.AI」的 App / Web 重构，基于 Figma 搭建设计系统与评审流程。负责多条业务线（曹操传预约官网、数据后台）的界面视觉规范与交互优化。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">建立规范化流程</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">提升团队交付标准</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">品牌强化与产品展示</span>
              </div>
            </div>

            <div className="group p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all" {...slideIn(300)}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight md:whitespace-nowrap">深圳影诺智能有限公司</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-purple-400 font-medium md:whitespace-nowrap">
                    <span className="text-[#c27aff]">UI 设计师</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[#86868b] font-mono text-sm md:text-base">2023.12 - 2025.03</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-10">
                负责智能硬件端与管理后台的 UI 设计，构建跨端统一的视觉规范。优化后台流程的信息架构与可视化方案，增强操作流畅度。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">硬件/后台跨端规范</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">信息架构重构</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">可视化数据呈现</span>
              </div>
            </div>

            <div className="group p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all" {...slideIn(400)}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight md:whitespace-nowrap">上海摩明信息技术有限公司</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-purple-400 font-medium md:whitespace-nowrap">
                    <span className="text-[#c27aff]">UI 设计师</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[#86868b] font-mono text-sm md:text-base">2021.06 - 2023.12</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-10">
                独立负责多个 AI 产品（增长模盒 AI、法侍卫、多多群岛 AI）模块设计，提出并落地创新交互方案。分析并优化多模态对话场景下的交互逻辑。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">AI 对话交互探索</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">创新方案落地</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">跨部门规范推动</span>
              </div>
            </div>

            <div className="group p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all" {...slideIn(500)}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight md:whitespace-nowrap">上海漫屋网络科技有限公司</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-purple-400 font-medium md:whitespace-nowrap">
                    <span className="text-[#c27aff]">UI 设计师 & 平面电商</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[#86868b] font-mono text-sm md:text-base">2019.04 - 2021.05</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-10">
                主导 GIGI HOUSE 潮玩小程序 UI 改版，优化信息架构。负责电商视觉设计，提升品牌在年轻用户群体中的感知度。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">小程序重构</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">年轻化视觉体验</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">电商全链路设计</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="flex flex-col">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">项目深度分析</h2>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-10 rounded-[48px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.06] transition-all" {...scaleUp(200)}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">DINGZUO AI 项目</h3>
                <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">App / Web 重构</span>
              </div>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8 flex-1">
                不仅是品牌焕新，更在用户体验、交互逻辑与视觉系统上实现全面提升。与 AI 团队协作定义语义识别与反馈界面，推动 Lottie 动效标准化落地。
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">AI 交互</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">Figma Design System</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">Lottie</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>复用率提升 60%</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>核心路径减少 3 步</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>完成率提升 15%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-10 rounded-[48px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.06] transition-all" {...scaleUp(300)}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">曹操传数据预约后台</h3>
                <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">Web 管理系统</span>
              </div>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8 flex-1">
                实现游戏预约数据的实时监控与高效运营支撑。优化国际化数据可视化体验，显著降低了运营团队的培训与沟通成本。
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">数据可视化</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">国际化</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">业务提效</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>监控效率提升 20%</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>验收通过率 100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-10 rounded-[48px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.06] transition-all" {...scaleUp(400)}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">香港房屋署 T5 机器人</h3>
                <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">IoT 终端设计</span>
              </div>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8 flex-1">
                用智能接待机器人替代传统人工登记。构建了跨端统一的视觉与交互规范，提升了系统的整体任务完成流畅度与准确性。
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">硬件交互</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">访客系统</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">一致性</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>独立负责全链路 UI</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>信息架构重构</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-10 rounded-[48px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.06] transition-all" {...scaleUp(500)}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">GIGI HOUSE 潮玩商城</h3>
                <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">E-Commerce</span>
              </div>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8 flex-1">
                专为年轻圈层打造的潮玩购物小程序。重构了从选品到支付的核心链路，引入了盲盒抽赏与社区分享机制，大幅提升了用户留存与复购率。
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">电商链路</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">年轻化视觉</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">社区互动</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>复购率提升 30%</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>转化率提升 12%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-10 rounded-[48px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.06] transition-all" {...scaleUp(600)}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">DUODUOLAND 社交招聘</h3>
                <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">Social App</span>
              </div>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8 flex-1">
                探索多模态对话场景下的求职交互。分析并优化 AI 匹配逻辑，为 Z 世代提供沉浸式的职场社交体验。
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">社交互动</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">AI 匹配</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">多模态对话</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>日活时长增加 25%</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>简历投递率提升 40%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-10 rounded-[48px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.06] transition-all" {...scaleUp(700)}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Kredit 跨境金融</h3>
                <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">Fintech</span>
              </div>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8 flex-1">
                针对东南亚市场的数字资产借贷平台。建立了严谨的表单交互与资产可视化面板，在保证合规性的同时提供了流畅的用户开户与交易体验。
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">资产可视化</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">表单体验</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-white/40 uppercase tracking-tighter text-[12px]">安全合规</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>开户流失率降低 18%</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                    <Zap className="w-3.5 h-3.5" />
                    <span>交易效率提升 2x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-48">
          <div className="flex items-center gap-6 mb-20">
            <div className="flex flex-col">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">技能工具</h2>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5">
              <h4 className="font-bold text-white/30 mb-10 tracking-[0.4em] uppercase text-[12px]">设计基石</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Figma (Design Token)</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Photoshop</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Illustrator</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Sketch</span>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5">
              <h4 className="font-bold text-white/30 mb-10 tracking-[0.4em] uppercase text-[12px]">动效与交互</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">After Effects</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Lottie</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Principle</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">ProtoPie</span>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5">
              <h4 className="font-bold text-white/30 mb-10 tracking-[0.4em] uppercase text-[12px]">领域专长</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">AI 提效</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">组件规范建设</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">B端业务逻辑</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">IoT 终端交互</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="flex items-center gap-6 mb-20">
            <div className="flex flex-col">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">联系合作</h2>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-8"></div>
          </div>
          <div className="relative overflow-hidden p-8 md:p-12 lg:p-20 rounded-[48px] lg:rounded-[56px] bg-gradient-to-br from-[#12121e] to-[#070612] border border-white/10">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 tracking-tighter md:whitespace-nowrap">
                  让我们把灵感 <span className="text-white/40">转化为现实。</span>
                </h2>
                <p className="text-[#86868b] leading-relaxed mb-10 lg:mb-12 text-base lg:text-[16px]">
                  在 <span className="font-bold text-white/80">App、Web及后台管理系统的产品设计中</span>，无论是<span className="font-bold text-white/80">交互探索、复杂 B 端系统重构，还是 UI 视觉细节的打磨</span>，我都期待与您共同打造更具价值的产品体验。
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
                  <a href="tel:18601643750" className="group flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 bg-white text-black rounded-full font-bold text-lg lg:text-xl hover:scale-105 transition-all duration-300">
                    <Phone className="w-[22px] h-[22px] shrink-0" />
                    <span className="whitespace-nowrap">18601643750</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}