import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'ai-crm',
    category: 'AI CRM / SaaS',
    title: '企业自研 AI-CRM 系统',
    description:
      '主导 0 到 1 的 8 大模块架构。面向系统集成商，完全替代 Microsoft CRM，实现智能填表引擎多源异构抽取，销售录入工作量骤降 80%。',
    image: '/project-images/ai-crm-1.jpg',
    tags: ['AI-CRM', '智能填表', '私有化部署'],
  },
  {
    id: 'alumni',
    category: 'App / Management',
    title: '吉林大学校友会小程序',
    description:
      '为吉大校友会打造的官方小程序与后台管理系统。提供校友认证、活动报名、资讯发布等功能，增强校友凝聚力与信息互通。',
    image: '/project-images/alumni-1.jpg',
    tags: ['小程序', '校友社交', '后台管理'],
  },
  {
    id: 'rental',
    category: 'SaaS / Real Estate',
    title: '心仪租房管理系统',
    description:
      '为长租公寓/二房东提供的房源与租客管理 SaaS。涵盖房源发布、在线签约、账单催缴、工单报修等全链路闭环，提升管房效率。',
    image: '/project-images/rental-1.jpg',
    tags: ['SaaS', '房产管理', '在线签约'],
  },
  {
    id: 'health',
    category: 'Medical / SaaS',
    title: '格森医疗管理系统',
    description:
      '面向医疗机构的内部管理系统。包含患者档案、在线问诊、知识库管理与客服工作台，优化医疗服务流程与数据流转效率。',
    image: '/project-images/health/health-1.jpg',
    tags: ['医疗系统', '在线问诊', '知识库'],
  },
  {
    id: 'iot',
    category: 'Hardware / App',
    title: 'AMLINK 智能设备 App',
    description:
      '软硬件结合的智能终端控制 App 与后台管理系统。实现设备状态实时监控、远程控制指令下发及固件 OTA 升级，保障设备稳定运行。',
    image: '/project-images/iot-1.jpg',
    tags: ['IoT', '智能硬件', 'App'],
  },
  {
    id: 'office',
    category: 'Enterprise / OA',
    title: '企业内部 OA 系统',
    description:
      '定制化的企业办公自动化平台。涵盖智能表单审批、组织架构管理、日程排班等，通过系统集成提升企业内部跨部门协同效率。',
    image: '/project-images/office-1.jpg',
    tags: ['OA', '审批流', '企业办公'],
  },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group relative bg-white/[0.02] rounded-[48px] overflow-hidden border border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-2xl transition-all duration-500 flex flex-col p-0 cursor-pointer no-underline"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden relative bg-black/40">
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
                <div className="flex-1 flex flex-col p-8 lg:p-10 justify-center">
                  <div className="flex items-center gap-2 text-white/30 text-xs uppercase tracking-[0.2em] mb-4 whitespace-nowrap overflow-hidden">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-medium mb-4 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis uppercase font-bold text-[24px] lg:text-[28px]">
                    {project.title}
                  </h3>

                  <p className="text-[#86868b] text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 font-light line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 lg:gap-3 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 lg:px-4 lg:py-1.5 bg-white/5 text-white/40 border border-white/5 rounded-full text-[10px] lg:text-[11px] uppercase tracking-wider font-medium"
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

        </div>
      </main>
    </div>
  );
}
