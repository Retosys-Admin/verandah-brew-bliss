
import { Timer, Thermometer, Scale, Eye } from "lucide-react";

const CraftmanshipSection = () => {
  const processes = [
    { icon: Scale, title: "Precision Weighing", description: "Every gram matters in our brewing process" },
    { icon: Thermometer, title: "Temperature Control", description: "Optimal heat for perfect extraction" },
    { icon: Timer, title: "Timing Perfection", description: "Precise timing for consistent flavor" },
    { icon: Eye, title: "Visual Inspection", description: "Each cup inspected for quality assurance" }
  ];

  return (
    <section className="section-padding bg-verandah-brown text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-verandah-terracotta/20 backdrop-blur-sm border border-verandah-terracotta/30 rounded-full px-6 py-3 mb-8">
              <Scale size={20} className="text-verandah-terracotta" />
              <span className="text-verandah-cream font-montserrat font-medium">
                Crafted with Precision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              The Art of
              <span className="block text-transparent bg-gradient-to-r from-verandah-terracotta to-verandah-sage bg-clip-text">
                Perfect Coffee
              </span>
            </h2>
            
            <p className="text-verandah-cream text-lg mb-12 leading-relaxed">
              Our master baristas combine traditional techniques with modern precision 
              to create extraordinary coffee experiences. Every cup represents hours of 
              training, years of experience, and an unwavering commitment to excellence.
            </p>

            {/* Process Steps */}
            <div className="grid grid-cols-2 gap-6">
              {processes.map((process, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-verandah-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <process.icon size={20} className="text-verandah-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-white mb-1">
                      {process.title}
                    </h4>
                    <p className="text-verandah-cream/80 text-sm">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
                  alt="Coffee being prepared"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">98°C</div>
                  <div className="text-verandah-cream text-sm">Perfect Temp</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">25s</div>
                  <div className="text-verandah-cream text-sm">Brew Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftmanshipSection;
