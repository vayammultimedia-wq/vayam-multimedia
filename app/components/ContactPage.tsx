"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Award } from 'lucide-react';

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918319963922"; // User's WhatsApp number without '+'

    const message = `
New Project Inquiry!
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Message: ${formData.message}
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });

    console.log('Form submitted and WhatsApp link opened.');
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative py-20  mb-5 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black text-sm tracking-[0.3em] rounded-full font-bold">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
            START YOUR <span className="text-cyan-500">PROJECT</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700">
            <h2 className="text-3xl font-black text-white mb-8 text-center">
              PROJECT <span className="text-cyan-500">INQUIRY</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="feature-film">Feature Film</option>
                    <option value="documentary">Documentary</option>
                    <option value="commercial">Commercial</option>
                    <option value="music-video">Music Video</option>
                    <option value="corporate">Corporate Video</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5l">Under ₹5 Lakhs</option>
                  <option value="5l-20l">₹5 - 20 Lakhs</option>
                  <option value="20l-50l">₹20 - 50 Lakhs</option>
                  <option value="50l-1cr">₹50 Lakhs - 1 Crore</option>
                  <option value="above-1cr">Above ₹1 Crore</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                  required
                />
              </div>

                          <button
                            type="submit"
                            className="w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold tracking-wider hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-lg shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                          >                <Send className="w-5 h-5" />
                SEND PROJECT INQUIRY
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700">
<h3 className="text-2xl font-black text-white mb-6 text-center">
                CONTACT <span className="text-cyan-500">INFO</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500 rounded-lg">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500 rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">info@vayamproduction.com</p>
                    <p className="text-gray-400">projects@vayamproduction.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-1">Studio Address</h4>
                    <p className="text-gray-400">
                      Vayam Production House<br />
                      Film City Complex, Sector 16A<br />
                      Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500 rounded-lg">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700">
              <h3 className="text-2xl font-black text-white mb-6 text-center">
                WHY <span className="text-cyan-500">VAYAM?</span>
              </h3>
              
              <div className="space-y-4 flex flex-col items-center">
                {[
                  { icon: <Award className="w-5 h-5" />, text: "15+ Years of Industry Experience" },
                  { icon: <Award className="w-5 h-5" />, text: "500+ Successful Projects Delivered" },
                  { icon: <Award className="w-5 h-5" />, text: "Award-Winning Creative Team" },
                  { icon: <Award className="w-5 h-5" />, text: "State-of-the-Art Production Facility" },
                  { icon: <Award className="w-5 h-5" />, text: "End-to-End Production Services" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-cyan-500">{item.icon}</div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-black text-black mb-4">QUICK RESPONSE GUARANTEE</h3>
              <p className="text-black/80 mb-4">
                We respond to all project inquiries within 24 hours. For urgent projects, 
                call us directly for immediate assistance.
              </p>
              <button className="px-6 py-3 bg-black text-cyan-500 font-bold rounded-lg hover:bg-gray-900 transition-colors">
                CALL NOW: +91 98765 43210
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactPage;
