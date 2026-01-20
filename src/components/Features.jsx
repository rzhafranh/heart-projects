import { Zap, Shield, Layout, ArrowRight } from 'lucide-react';

export default function Features() {
const features = [
    {
      title: "Built for Speed",
      desc: "Optimized with Vite and Tailwind v4 for lightning-fast load times and smooth performance.",
      icon: <Zap size={28} className="text-amber-500" />,
      delay: "0"
    },
    {
      title: "Secure Architecture",
      desc: "Modern development practices ensure your digital infrastructure is robust and protected.",
      icon: <Shield size={28} className="text-blue-600" />,
      delay: "200"
    },
    {
      title: "Adaptive Design",
      desc: "A mobile-first approach that looks stunning on every screen size, from phone to 4K monitor.",
      icon: <Layout size={28} className="text-emerald-600" />,
      delay: "400"
    }
  ];

 return (
    <section id="features" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 data-aos="fade-right" className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
            Our Capabilities
          </h2>
          <h3 data-aos="fade-right" data-aos-delay="100" className="text-4xl md:text-5xl font-bold text-slate-900">
            Engineered for the <br />Modern Digital Era.
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={item.delay}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.desc}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                LEARN MORE <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}