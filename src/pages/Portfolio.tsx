import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    category: 'AI Product / Web',
    title: 'DINGZUO AI 视觉创造系统',
    description:
      '面向内容创作场景的 AI 视觉生成与编辑平台，通过大模型重构传统的图像设计工作流，实现效率的指数级提升。',
    image:
      'https://stunt-route-84150395.figma.site/_assets/v11/90ac51f7298fbc53f90ceb89a995233103f47cb3.png',
    tags: ['Product Strategy', 'UI/UX', 'Design System'],
  },
  {
    id: 2,
    category: 'Social AI / Mobile',
    title: 'DUODUOLAND AI 社交招聘',
    description:
      '探索多模态对话场景下的求职交互。分析并优化 AI 匹配逻辑，为 Z 世代提供沉浸式的职场社交体验。',
    image:
      'https://stunt-route-84150395.figma.site/_assets/v11/fe9687fbc9183d908d92293ef28e22a2c425b303.png',
    tags: ['Interaction', 'Prototype', 'App'],
  },
  {
    id: 3,
    category: 'Dashboard / Game Ops',
    title: 'Eater课程管理 SaaS 平台',
    description:
      '构建面向教育机构的智能课程管理平台，集课程排期、学员预约与运营数据分析于一体，实现课程业务的数字化与高效运营。',
    image:
      'https://stunt-route-84150395.figma.site/_assets/v11/51416c967bb02b3bb4d41790ae4327edebe21618.png',
    tags: ['课程数据可视化', 'SaaS 多机构管理', '智能排课系统', '运营数据分析'],
  },
];

const skills = [
  { label: 'Product UI / UX Design', dot: 'bg-blue-500' },
  { label: 'React / Next.js', dot: 'bg-purple-500' },
  { label: 'Figma / Adobe', dot: 'bg-pink-500' },
  { label: 'Motion Interaction', dot: 'bg-white' },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#070612] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        </div>
      </div>

      <main className="relative z-10 pt-32 lg:pt-48 pb-12 lg:pb-20 px-6 md:px-12 lg:px-24 xl:px-[200px]">
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#86868b] hover:text-white transition-colors mb-6 md:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">返回首页</span>
            </Link>
            <h1 className="text-4xl sm:text-[60px] md:text-[80px] font-bold tracking-tight mb-6 leading-tight md:whitespace-nowrap">
              项目展示
            </h1>
            <p className="text-[#86868b] font-light max-w-4xl text-[20px] leading-[30px]">
              涵盖印度金融、AI 产品、潮玩电商、智能硬件、IoT 平台与互联网官网等多个领域的产品设计项目。
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group relative bg-white/[0.02] rounded-[48px] overflow-hidden border border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-2xl transition-all duration-500 flex flex-col p-0 cursor-pointer no-underline"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#070612]/60 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex items-center justify-center gap-6">
                    <div className="p-4 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-10">
                  <div className="flex items-center gap-2 text-white/30 text-xs uppercase tracking-[0.2em] mb-4 whitespace-nowrap overflow-hidden">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-medium mb-4 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis uppercase font-bold text-[28px]">
                    {project.title}
                  </h3>

                  <p className="text-[#86868b] text-base leading-relaxed mb-10 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-white/5 text-white/40 border border-white/5 rounded-full text-[11px] uppercase tracking-wider font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <div className="mt-24 text-center py-12">
            <p className="text-white/20 tracking-[0.3em] uppercase font-light text-[16px]">
              更多项目正在上线 / Coming Soon
            </p>
          </div>

          {/* About / CTA section */}
          <div className="mt-24 lg:mt-40 pt-16 lg:pt-24 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
                  设计驱动
                  <br />
                  <span className="text-[#86868b]">跨越时空的创造</span>
                </h2>
                <p className="text-lg md:text-xl text-[#86868b] mb-10 lg:mb-12 font-light leading-relaxed">
                  拥有 6 年经验的产品型UI / UX设计师，连接 product 逻辑与视觉体验。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-4 lg:space-y-6">
                    {skills.slice(0, 2).map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-4 text-white/80 text-[16px]"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${skill.dot} animate-pulse shrink-0`}
                        />
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 lg:space-y-6">
                    {skills.slice(2).map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-4 text-white/80 text-[16px]"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${skill.dot} animate-pulse shrink-0`}
                        />
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - CTA card */}
              <div className="bg-white/[0.02] p-8 lg:p-12 rounded-[48px] border border-white/5 relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-[120px]" />
                <h3 className="font-bold mb-8 lg:mb-10 relative z-10 text-[28px]">
                  共创未来体验
                </h3>
                <div className="space-y-4 lg:space-y-6 relative z-10">
                  <button className="w-full py-6 lg:py-8 bg-white text-black font-bold rounded-[32px] hover:bg-neutral-200 transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl text-base lg:text-lg">
                    下载设计白皮书
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
