import { useEffect, useState } from 'react';
import { ChevronRight, FileText, Zap, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <span className="font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase opacity-60 text-xs lg:text-[16px]">HELLO ~! 我是王天阳</span>
            </div>
            <h1 className="font-bold tracking-tighter leading-[1.1] md:leading-none md:whitespace-nowrap text-5xl md:text-7xl lg:text-8xl xl:text-[96px]">
              4年产品 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-300">设计专家</span>
            </h1>
            <p className="font-light text-[#86868b] leading-relaxed max-w-2xl text-left text-lg md:text-xl lg:text-[24px]">
              深耕 App / Web / B 端后台业务产品，致力于通过 AI 提效与严谨的组件规范，构建具有生命力的数字化交互体验。
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="/产品经理-王天阳.pdf" download="产品经理-王天阳.pdf" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3">
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
                <span className="text-lg font-medium whitespace-nowrap">计算机科班</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">经验</span>
                <span className="text-lg font-medium whitespace-nowrap">四年</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">坐标</span>
                <span className="text-lg font-medium whitespace-nowrap">成都/北京</span>
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
                兼具后端开发与产品落地双重经验，减少产研沟通内耗；深耕 B 端企服与数字化转型。
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(300)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                熟练掌握各类产品文档撰写与业务调研工作，具备扎实的需求分析与产品规划能力；精通 Dify 等 AI Agent 平台。
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(400)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                熟悉 AI 模型评估、Prompt 工程、Bad Case 分析，能够有效提升大模型在具体业务场景下的表现。
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex gap-6 group hover:bg-white/[0.04] transition-all" {...reveal(500)}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
              <p className="text-xl text-[#86868b] leading-relaxed group-hover:text-white transition-colors">
                掌握 Python、SQL、Docker、LangChain 等技术栈，能更好地协同研发团队推进 AI 产品落地。
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
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight md:whitespace-nowrap">北京昆仑联通科技发展股份有限公司</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-purple-400 font-medium md:whitespace-nowrap">
                    <span className="text-[#c27aff]">AI产品经理</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[#86868b] font-mono text-sm md:text-base">2025.08 - 2026.06</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-10">
                主导 Dify 企业技术方案输出、客户侧售后培训，完成 AI Agent 场景化方案包装与落地；负责公司 AI 办公产品线从 0 到 1 规划落地，依托 Dify 搭建官网节假日宕机自动化监控预警工作流，同时主导规划“钉钉考勤-门禁打卡-财务工资核算”业务流程，实现跨部门提效。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">Dify 商业化体系搭建</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">AI 办公产品线规划</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">业务工作流重构</span>
              </div>
            </div>

            <div className="group p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all" {...slideIn(300)}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight md:whitespace-nowrap">成都聚创新易智能科技有限公司</h3>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-purple-400 font-medium md:whitespace-nowrap">
                    <span className="text-[#c27aff]">产品经理</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-[#86868b] font-mono text-sm md:text-base">2023.02 - 2025.07</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#86868b] leading-relaxed mb-10">
                配合产品经理开展需求侧全链路工作，面向业务端收集零散需求、输出 PRD、需求说明书等标准化产品文档。跟进公司多类外包定制项目，协同甲乙双方完成需求对齐核对，协助同步项目进度，跟进项目按期交付。
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">全链路需求管理</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">标准化文档输出</span>
                <span className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 text-white/40 group-hover:text-white/80 transition-colors">跨部门/外包项目协同</span>
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
              <h4 className="font-bold text-white/30 mb-10 tracking-[0.4em] uppercase text-[12px]">产品工具</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Axure</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">墨刀</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">XMind</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Visio</span>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5">
              <h4 className="font-bold text-white/30 mb-10 tracking-[0.4em] uppercase text-[12px]">AI 与大模型</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Dify</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">LangChain</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Prompt 工程</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">模型评估</span>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5">
              <h4 className="font-bold text-white/30 mb-10 tracking-[0.4em] uppercase text-[12px]">技术栈</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Python</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">SQL</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">Docker</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-lg font-medium text-[#86868b] group-hover:text-white transition-colors">API 接口</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="flex items-center gap-6 mb-20">
            <div className="flex flex-col">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">寻求机会</h2>
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
                  <a href="tel:18603313359" className="group flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 bg-white text-black rounded-full font-bold text-lg lg:text-xl hover:scale-105 transition-all duration-300">
                    <Phone className="w-[22px] h-[22px] shrink-0" />
                    <span className="whitespace-nowrap">18603313359</span>
                  </a>
                  <button 
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-fade-in cursor-pointer';
                      modal.onclick = () => document.body.removeChild(modal);
                      
                      const img = document.createElement('img');
                      img.src = '/project-images/wechat-qr.jpg'; // We'll need to copy this image
                      img.className = 'max-w-full max-h-[80vh] object-contain rounded-2xl animate-zoom-in';
                      
                      const text = document.createElement('p');
                      text.className = 'absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm';
                      text.innerText = '扫码添加微信';
                      
                      modal.appendChild(img);
                      modal.appendChild(text);
                      document.body.appendChild(modal);
                    }}
                    className="group flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 bg-green-500 text-white rounded-full font-bold text-lg lg:text-xl hover:bg-green-600 hover:scale-105 transition-all duration-300"
                  >
                    <span className="whitespace-nowrap">微信二维码</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}