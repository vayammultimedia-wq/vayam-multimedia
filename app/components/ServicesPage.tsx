import React from 'react';
import { Video, Camera, Edit, Mic, Film, Palette, Users, Award } from 'lucide-react';

// Services Page
const ServicesPage = () => {
  const services = [
    {
      icon: <Film className="w-12 h-12" />,
      title: "Feature Film Production",
      description: "Full-scale movie production from concept to distribution, including pre-production, filming, and post-production services.",
      features: ["Script Development", "Casting", "Location Scouting", "Full Crew", "Equipment Rental"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Documentary Filmmaking",
      description: "Compelling documentary production that tells powerful stories and captures real-life narratives with artistic vision.",
      features: ["Research & Development", "Interview Setup", "Archival Footage", "Narrative Structure", "Distribution Strategy"]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Commercial Production",
      description: "High-impact commercial videos and advertisements that drive engagement and deliver your brand message effectively.",
      features: ["Brand Strategy", "Creative Concepts", "Multi-platform Content", "Product Showcase", "Campaign Development"]
    },
    {
      icon: <Edit className="w-12 h-12" />,
      title: "Post-Production",
      description: "Professional editing, color grading, sound design, and visual effects to bring your vision to life.",
      features: ["Video Editing", "Color Correction", "Sound Mixing", "Visual Effects", "Motion Graphics"]
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Audio Production",
      description: "Complete audio solutions including recording, mixing, and sound design for all types of media content.",
      features: ["Studio Recording", "Location Sound", "Audio Post", "Music Composition", "Voice Over"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Creative Direction",
      description: "Comprehensive creative services from concept development to final execution with artistic excellence.",
      features: ["Concept Development", "Storyboarding", "Art Direction", "Creative Consulting", "Brand Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative py-20 px-6 mb-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black text-sm tracking-[0.3em] rounded-full font-bold">
            OUR SERVICES
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            PRODUCTION <span className="text-cyan-500">SERVICES</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            From concept to screen, we provide comprehensive film production services 
            that bring your creative vision to life with professional excellence.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-yellow-500/50"
            >
              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-yellow-500 font-semibold text-sm tracking-wider">KEY FEATURES:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 mb-20 border border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              OUR <span className="text-yellow-500">PROCESS</span>
            </h2>
            <p className="text-gray-400 text-lg">How we bring your vision to life</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Concept", desc: "We start with your vision and develop it into a compelling concept" },
              { step: "02", title: "Pre-Production", desc: "Detailed planning, casting, location scouting, and preparation" },
              { step: "03", title: "Production", desc: "Professional filming with state-of-the-art equipment and crew" },
              { step: "04", title: "Post-Production", desc: "Editing, color grading, sound design, and final delivery" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-black text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Start Your <span className="text-yellow-500">Project?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together. 
            Contact us today for a consultation.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold tracking-wider hover:from-yellow-500 hover:to-yellow-400 transition-all rounded-lg shadow-2xl transform hover:-translate-y-2">
            GET STARTED TODAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
