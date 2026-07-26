import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ZoomIn, ExternalLink } from 'lucide-react';
import { getProjectById } from '../data/projectDetails';

function ProjectImage({ src, caption }: { src: string; caption?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative group mt-4 cursor-pointer overflow-hidden rounded-xl bg-white/5 border border-white/10 max-w-2xl mx-auto"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={caption || ''}
          className="w-full object-cover max-h-64 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
            <ZoomIn size={20} />
          </div>
        </div>
      </div>
      {caption && (
        <p className="text-white/30 text-xs mt-2 italic text-center">{caption}</p>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-start justify-center p-4 sm:p-8 animate-fade-in overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-5xl my-auto flex flex-col items-center">
            <button
              className="fixed top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all z-10 backdrop-blur-md shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <img
              src={src}
              alt={caption || ''}
              className="w-full h-auto rounded-lg animate-zoom-in shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {caption && (
              <p className="mt-6 text-white/60 text-base font-medium">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function ProjectPrototype({ url, caption }: { url: string; caption?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative group mt-4 cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-white/10 h-64 max-w-2xl mx-auto"
        onClick={() => setIsOpen(true)}
      >
        <iframe
          src={url}
          className="w-full h-full border-0 pointer-events-none"
          style={{
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
            width: '200%',
            height: '200%'
          }}
          title={caption || '原型预览缩略图'}
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:bg-black/40" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
            <ZoomIn size={20} />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <p className="text-white/90 text-sm font-medium truncate">{caption}</p>
        </div>
      </div>
      {caption && (
        <p className="text-white/30 text-xs mt-2 italic text-center">{caption}</p>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-between mb-4 w-full max-w-7xl mx-auto">
            <p className="text-white/70 text-sm">{caption}</p>
            <div className="flex items-center gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                新窗口全屏打开
              </a>
              <button
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div
            className="flex-1 w-full max-w-7xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={url}
              className="w-full h-full border-0 bg-white"
              title={caption || '原型预览'}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="bg-[#070612] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">项目未找到</h1>
          <button onClick={() => navigate('/portfolio')} className="text-white/60 hover:text-white flex items-center gap-2 mx-auto">
            <ArrowLeft size={16} />
            返回项目列表
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#070612] text-white min-h-screen selection:bg-purple-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Top Navigation inside content */}
        <div className="flex items-center justify-between mb-12 animate-fade-in-up">
          <button
            onClick={() => navigate('/portfolio')}
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-2 text-white/80 hover:text-white transition-all backdrop-blur-md group shadow-lg"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wide">返回 项目展示</span>
          </button>
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center shadow-lg">
            <span className="text-blue-400 text-sm font-medium tracking-wider">{project.category}</span>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <p className="text-blue-400 text-xl mb-8 font-medium">{project.role}</p>
          
          <p className="text-[#86868b] text-lg leading-relaxed max-w-3xl font-light">
            {project.overview}
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {project.sections.map((section, si) => (
            <section
              key={si}
              className="animate-fade-in-up fill-mode-both"
              style={{ animationDelay: `${(si + 1) * 150}ms` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 pb-4 border-b border-white/10 inline-block">
                {section.heading}
              </h2>
              <div className="space-y-12">
                {section.items.map((item, ii) => (
                  <div key={ii} className="group">
                    {item.title && (
                      <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item.title}
                      </h3>
                    )}
                    {item.content && (
                      <p className="text-[#86868b] text-base leading-relaxed pl-4 border-l-2 border-white/5">
                        {item.content}
                      </p>
                    )}
                    {item.image && (
                      <div className="mt-6">
                        <ProjectImage src={item.image} caption={item.imageCaption} />
                      </div>
                    )}
                    {item.prototypeUrl && (
                      <div className="mt-6">
                        <ProjectPrototype url={item.prototypeUrl} caption={item.imageCaption} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {project.outcomes.length > 0 && (
          <section className="mt-24 pt-16 border-t border-white/10 animate-fade-in-up fill-mode-both" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              成果与影响
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.outcomes.map((outcome, i) => (
                <div key={i} className="rounded-2xl bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.05] transition-colors">
                  <span className="text-blue-500/50 text-3xl font-bold font-mono block mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/80 text-base leading-relaxed font-light">{outcome}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.learnings.length > 0 && (
          <section className="mt-24 pt-16 border-t border-white/10 animate-fade-in-up fill-mode-both" style={{ animationDelay: '750ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              复盘与学习
            </h2>
            <div className="space-y-6">
              {project.learnings.map((learning, i) => (
                <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed pt-1 font-light">{learning}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
