import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Send, ChevronDown, User, RefreshCw } from 'lucide-react';

interface ModelConfig {
  id: string;
  name: string;
  url: string;
  key: string;
  model: string;
}

const MODELS: ModelConfig[] = [
  {
    id: 'opencode',
    name: 'OpenCode Go',
    url: '/api/opencode/zen/go/v1/chat/completions',
    key: import.meta.env.VITE_OPENCODE_KEY || '',
    model: 'deepseek-v4-flash'
  },
  {
    id: 'volc1',
    name: '火山 1',
    url: '/api/volcengine/api/plan/v3/chat/completions',
    key: import.meta.env.VITE_VOLC1_KEY || '',
    model: 'Doubao-Seed-2.1-turbo'
  },
  {
    id: 'volc2',
    name: '火山 2',
    url: '/api/volcengine/api/plan/v3/chat/completions',
    key: import.meta.env.VITE_VOLC2_KEY || '',
    model: 'deepseek-v4-flash'
  }
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '你好！我是王天阳的数字人分身，关于他的经历、项目或者合作意向，都可以直接问我哦！' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState<string>('auto');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (location.pathname === '/') {
    return null;
  }

  const streamResponse = async (config: ModelConfig, messageHistory: Message[]) => {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.key}`
      },
      body: JSON.stringify({
        model: config.model,
        stream: true,
        messages: [
          { role: 'system', content: '你是王天阳的数字人分身。作为一名拥有4年经验的产品设计专家，你精通UI/UX设计、AI产品落地、B端企服及数字化转型。请以王天阳本人的语气回答问题，要专业、自信且友好。' },
          ...messageHistory
        ]
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const reader = response.body?.getReader();
    if (!reader) throw new Error('No reader available');

    const decoder = new TextDecoder();
    let currentReply = '';
    
    // Add empty message placeholder for streaming
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');
      
      for (const line of lines) {
        if (line.startsWith('data: ') && line.trim() !== 'data: [DONE]') {
          try {
            const data = JSON.parse(line.slice(6));
            const delta = data.choices[0]?.delta?.content || '';
            currentReply += delta;
            
            setMessages(prev => {
              const newMsgs = [...prev];
              newMsgs[newMsgs.length - 1].content = currentReply;
              return newMsgs;
            });
          } catch (e) {
            // Ignore parse errors for incomplete chunks
          }
        }
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const messageHistory = [...messages, userMessage];

    try {
      if (selectedModelId === 'auto') {
        let success = false;
        for (const model of MODELS) {
          try {
            await streamResponse(model, messageHistory);
            success = true;
            break; 
          } catch (error) {
            console.error(`Model ${model.name} failed:`, error);
            // remove the failed empty message if added
            setMessages(prev => prev[prev.length - 1].role === 'assistant' && prev[prev.length - 1].content === '' ? prev.slice(0, -1) : prev);
          }
        }
        if (!success) {
          throw new Error('All models failed to respond.');
        }
      } else {
        const model = MODELS.find(m => m.id === selectedModelId);
        if (model) {
          await streamResponse(model, messageHistory);
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '抱歉，当前网络或模型服务出现异常，请稍后再试或切换模型。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[360px] h-[500px] bg-[#12121e] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="h-16 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <img src="/avatar.jpeg" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/20" />
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {selectedModelId === 'auto' ? '自动路由 (推荐)' : MODELS.find(m => m.id === selectedModelId)?.name}
                  <ChevronDown size={14} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-[#1c1c2e] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                    <button 
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors ${selectedModelId === 'auto' ? 'text-purple-400' : 'text-white/80'}`}
                      onClick={() => { setSelectedModelId('auto'); setIsDropdownOpen(false); }}
                    >
                      自动路由 (推荐)
                    </button>
                    {MODELS.map(model => (
                      <button 
                        key={model.id}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors ${selectedModelId === model.id ? 'text-purple-400' : 'text-white/80'}`}
                        onClick={() => { setSelectedModelId(model.id); setIsDropdownOpen(false); }}
                      >
                        {model.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-1">
                    {msg.role === 'user' ? (
                      <div className="w-full h-full bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                        <User size={14} />
                      </div>
                    ) : (
                      <img src="/avatar.jpeg" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-500/20 text-blue-100 rounded-tr-sm' 
                      : 'bg-white/5 text-white/90 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%] flex-row">
                  <div className="w-6 h-6 rounded-full shrink-0 mt-1">
                    <img src="/avatar.jpeg" alt="Avatar" className="w-full h-full rounded-full object-cover opacity-50" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 text-white/50 text-sm rounded-tl-sm flex items-center gap-2">
                    <RefreshCw size={14} className="animate-spin" />
                    正在思考...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white/[0.02] border-t border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="问问关于我的事..."
                className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-10 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 text-white/50 hover:text-purple-400 disabled:hover:text-white/50 disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-black shadow-xl shadow-black/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all overflow-hidden border-2 border-black"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <img src="/avatar.jpeg" alt="Chat" className="w-full h-full object-cover" />
        )}
      </button>
    </div>
  );
}
