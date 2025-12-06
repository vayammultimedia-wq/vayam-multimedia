import React from 'react';
import { Award, Users, Film, Camera } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

// Helper function to get image source
const getImageSrc = (img: string, width: number = 400) => {
  if (img.startsWith('photo-')) {
    return `https://images.unsplash.com/${img}?w=${width}&q=80`;
  }
  return `/${img}`;
};

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rohit Paliwal",
      role: "Founder",
      image: "rohitpaliwal.jpg",
      bio: "Master of visual storytelling and cinematic excellence."
    },
    // {
    //   id: 2,
    //   name: "Sanjay Bhatt",
    //   role: "Lead Editor",
    //   image: "SanjayBhatt.png",
    //   bio: "Expert in post-production, crafting compelling narratives."
    // },
    // {
    //   id: 3,
    //   name: "Kevin Bhatt",
    //   role: "Creative Director",
    //   image: "kevin.png",
    //   bio: "Visionary leader shaping the artistic direction of projects."
    // }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8 inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black text-sm tracking-[0.3em] rounded-full font-bold">
                              ABOUT US
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                              VAYAM <span className="text-cyan-500">PRODUCTION</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              We are a premier film production house dedicated to creating extraordinary cinematic experiences. 
                              Our passion for storytelling drives us to push the boundaries of visual narrative and technical excellence.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                              From feature films to documentaries, commercials to digital content, we bring decades of industry 
                              expertise to every project, ensuring your vision is realized with uncompromising quality.
                            </p>
                            <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold tracking-wider hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-lg shadow-2xl transform hover:-translate-y-1">
                              OUR STORY
                            </button>
                          </div>
                          <div className="relative">
                            <div className="aspect-4/5 overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                                  alt="Vayam Production Team"
                                  fill
                                  priority
                                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                              <Film className="w-12 h-12 text-black" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              
                    {/* Stats Section */}
                    <div className="max-w-7xl mx-auto px-6 py-20">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                          { num: '500+', label: 'Projects Completed', icon: <Film className="w-8 h-8" /> },
                          { num: '150+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
                          { num: '25+', label: 'Industry Awards', icon: <Award className="w-8 h-8" /> },
                          { num: '15+', label: 'Years Experience', icon: <Camera className="w-8 h-8" /> }
                        ].map((stat, i) => (
                          <div key={i} className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2">
                            <div className="text-cyan-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                              {stat.icon}
                            </div>
                            <div className="text-5xl font-black text-white mb-2">{stat.num}</div>
                            <div className="text-gray-400 text-sm tracking-wider font-semibold">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
              
                    {/* Our Journey */}
                    <div className="max-w-7xl mx-auto px-6 py-20">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">
                          OUR <span className="text-cyan-500">JOURNEY</span>
                        </h2>
                        <p className="text-gray-400 text-lg">Milestones in our cinematic evolution</p>
                      </div>
              
                      <div className="space-y-8">
                        {[
                          { 
                            year: '2024', 
                            title: 'International Recognition', 
                            desc: 'Won Best Production House at the Global Film Awards, expanding our reach to international markets' 
                          },
                          { 
                            year: '2023', 
                            title: 'Studio Expansion', 
                            desc: 'Opened our state-of-the-art 50,000 sq ft production facility with cutting-edge technology' 
                          },
                          { 
                            year: '2021', 
                            title: 'Digital Revolution', 
                            desc: 'Pioneered digital-first content creation, producing award-winning streaming platform originals' 
                          },
                          { 
                            year: '2019', 
                            title: 'Foundation', 
                            desc: 'Vayam Production established with a vision to revolutionize Indian cinema and storytelling' 
                          }
                        ].map((milestone, i) => (
                          <div key={i} className="group flex gap-8 items-start border-l-4 border-cyan-500 pl-8 hover:bg-gray-900/50 transition-colors py-6 rounded-r-2xl">
                            <div className="text-cyan-500 font-black text-3xl min-w-24 group-hover:scale-110 transition-transform duration-300">
                              {milestone.year}
                            </div>
                            <div>
                              <h3 className="text-white text-2xl font-bold mb-3">{milestone.title}</h3>
                              <p className="text-gray-400 leading-relaxed">{milestone.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
              
                    {/* Team Section */}
                    <div className="max-w-7xl mx-auto px-6 py-20">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">
                          MEET OUR <span className="text-cyan-500">TEAM</span>
                        </h2>
                        <p className="text-gray-400 text-lg">The creative minds behind our success</p>
                      </div>
              
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                          <div key={index} className="group text-center">
                            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
                              <div className="aspect-square">
                                <Image
                                  src={getImageSrc(member.image, 400)}
                                  alt={member.name}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                  <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                                </div>
                              </div>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-cyan-500 font-semibold text-sm tracking-wider">{member.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
              
                    {/* Vision & Mission */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 mx-6 rounded-3xl p-12 border border-gray-700">
                      <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="text-center md:text-left">
                            <h3 className="text-3xl font-black text-white mb-6">
                              OUR <span className="text-cyan-500">VISION</span>
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                              To be the leading force in cinematic storytelling, creating films that not only entertain 
                              but inspire, educate, and transform perspectives. We envision a future where every story 
                              we tell contributes to a richer, more connected world.
                            </p>
                          </div>
                          <div className="text-center md:text-left">
                            <h3 className="text-3xl font-black text-white mb-6">
                              OUR <span className="text-cyan-500">MISSION</span>
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                              To craft exceptional cinematic experiences through innovative storytelling, cutting-edge 
                              technology, and unwavering commitment to artistic excellence. We strive to exceed 
                              expectations while fostering creativity and collaboration in every project.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>    </div>
  );
};

export default AboutPage;
