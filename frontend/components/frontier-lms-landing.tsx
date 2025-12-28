'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FrontierLMSLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institute: '',
    website: '',
    solution: '',
    message: '',
    captcha: ''
  });

  const captchaText = '76ZL72';

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.institute || !formData.solution) {
      alert('Please fill in all required fields');
      return;
    }
    if (formData.captcha === captchaText) {
      console.log('Form submitted:', formData);
      alert('Thank you for your enquiry! Our team will contact you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        institute: '',
        website: '',
        solution: '',
        message: '',
        captcha: ''
      });
    } else {
      alert('Incorrect CAPTCHA. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigateToLogin = (loginType: string) => {
    router.push(`/${loginType}-login`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-3xl font-bold text-blue-600">Frontier</span>
              <span className="ml-1 bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">LMS</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition">Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition">About Us</a>
              <a href="#products" className="text-gray-800 hover:text-blue-600 font-medium transition">Products</a>
              <a href="#partners" className="text-gray-800 hover:text-blue-600 font-medium transition">Partners</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition">Contact Us</a>
            </div>



            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-4">
              <a href="#home" className="block text-gray-800 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="block text-gray-800 hover:text-blue-600 font-medium">About Us</a>
              <a href="#products" className="block text-gray-800 hover:text-blue-600 font-medium">Products</a>
              <a href="#partners" className="block text-gray-800 hover:text-blue-600 font-medium">Partners</a>
              <a href="#contact" className="block text-gray-800 hover:text-blue-600 font-medium">Contact Us</a>
              <div className="flex flex-col gap-2 pt-4 space-y-2">
                <button
                  onClick={() => { navigateToLogin('school-admin'); setMobileMenuOpen(false); }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition"
                >
                  School Admin Login
                </button>
                <button
                  onClick={() => { navigateToLogin('teacher'); setMobileMenuOpen(false); }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition"
                >
                  Teacher Login
                </button>
                <button
                  onClick={() => { navigateToLogin('student'); setMobileMenuOpen(false); }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition"
                >
                  Student Login
                </button>
                <button
                  onClick={() => { navigateToLogin('parent'); setMobileMenuOpen(false); }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition"
                >
                  Parent Login
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mt-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white py-16 px-4" id="home">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">ERP for Smart Campuses of the Future.</h1>
              <h2 className="text-2xl italic mb-2">
                Redefining Education with <span className="bg-orange-500 px-3 py-1 rounded">All-in-One</span>
              </h2>
              <h2 className="text-2xl italic mb-6">
                End-to-End <span className="bg-orange-500 px-3 py-1 rounded">ERP Solution</span>
              </h2>
              <p className="text-xl mb-8">
                Where <span className="text-orange-400 font-bold">Education</span> Meets Next-Level{' '}
                <span className="text-orange-400 font-bold">Management.</span>
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105"
              >
                SCHEDULE A FREE DEMO
              </button>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-lg mb-4 text-black">College ERP • School ERP • Learning Management System</p>
                <p className="text-lg text-black">Online Evaluation • Easy Accredit • Jobs • CRM • EasyCAP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            Empowering Schools, Colleges and Universities with Smart Digital Solutions
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto italic">
            Supporting the Digital Transformation of Schools, Colleges, and Universities with best ERP software solutions.
            Frontier LMS offers the best ERP software in India, delivering a comprehensive suite of online solutions to
            revolutionize the teaching-learning experience and streamline the operations of educational institutions.
          </p>
        </div>
      </section>

      {/* Smart Cloud Solutions */}
      <section className="py-16 px-4" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">SMART CLOUD-BASED SOLUTIONS</h2>
          <p className="text-gray-700 text-center text-lg mb-12 max-w-4xl mx-auto italic">
            Innovative solutions that cover all aspects of the administration of educational institutes to empower educators
            and enhance student success
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🏛️',
                title: 'FrontierCollege',
                desc: 'A multipurpose cloud-based ERP software for colleges and higher institutions with 25+ modules for achieving better learning outcomes'
              },
              {
                icon: '🏫',
                title: 'FrontierSchool',
                desc: 'A cutting-edge school ERP software that allows institutions for superior teaching-learning pedagogies that ensure better outcomes for every child'
              },
              {
                icon: '📚',
                title: 'Frontier LMS',
                desc: 'Whether you want to get an overview of the courses or collaborate within the system, create administer and score tests and generate reports, the Frontier LMS provides a comprehensive solution for all your needs'
              },
              {
                icon: '✅',
                title: 'EasyCheck',
                desc: 'EasyCheck Evaluation System is an online answer checker that reduces the tedious and labor extensive process of traditional paper checking by digitizing the marksheets'
              },
              {
                icon: '💻',
                title: 'EasyPariksha',
                desc: 'A robust AI-based online proctoring exam tool that helps educational institutes design, schedule and deliver assessments online seamlessly'
              },
              {
                icon: '⭐',
                title: 'EasyAccredit',
                desc: 'Analyse and assess the progress of the students on various parameters to meet the guidelines set by various accreditation bodies like NAAC, NBA, etc.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-4 border-blue-600 rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition transform">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-center mb-12">Elevate Learning with Frontier LMS</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '5L+', label: 'Learners' },
              { number: '150+', label: 'Clients' },
              { number: '50+', label: 'Modules' }
            ].map((stat, idx) => (
              <div key={idx} className="border-4 border-white rounded-xl p-8 text-center">
                <div className="text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-2xl font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Frontier LMS Offers</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-2xl p-8">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234169E1' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3ETraining Session%3C/text%3E%3C/svg%3E" alt="Training" className="w-full rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                'Support and Training',
                'End-to-End Solutions',
                'Mobile Applications',
                'Intuitive User Interface',
                'Biometric',
                'Dashboards and Reporting',
                'Notification',
                'Frontier LMS Integration',
                'QR Code',
                'Easy integration with third-party API',
                'Barcode',
                'Data Security and Central Data Repository'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-blue-600 text-2xl">●</span>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-gray-50" id="partners">
        <div className="max-w-7xl mx-auto">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">
            Our School ERP Software – Trusted by Elite & Prestigious Schools
          </h2>
          <p className="text-center text-gray-700 mb-12">Over 200+ prestigious institutions trust our solutions</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['S.M.K.D.E Society', 'Tilak Maharashtra Vidyalaya', 'Universal Wisdom School', 'Vishwakarma Institute', 'PCCOE Pune', 'Vishwakarma University', 'DESPU'].map((client, idx) => {
              const slug = client.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <a key={idx} href={`/schools/${slug}`} className="block">
                  <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition h-full cursor-pointer">
                    <div className="text-4xl mb-3">🏫</div>
                    <p className="font-semibold text-gray-800">{client}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>

          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-6xl text-center mb-6">"</div>
            <p className="text-lg italic leading-relaxed text-center text-black">
              The organization, whether small or large, needs easy access to online services, to handle their data and manage educational
              requirements in a cost-effective and efficient way. When we started to move towards the ERP system for our institute, it was full of
              challenges. The market is full of companies providing ERP services. But to get a good one and trustworthy is a hard nut to crack.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Are you Looking for Smart Solutions to Automate Your Campus?
              </h2>
              <p className="text-gray-700 text-lg italic mb-8">
                With the best support and smooth implementation, we can help you do just that.
                Just fill in this form and our representatives will get in touch with you.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Enquiry Form</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  />
                  <input
                    type="text"
                    name="institute"
                    placeholder="Your Institute"
                    value={formData.institute}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="url"
                    name="website"
                    placeholder="Institute Website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  />
                  <select
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  >
                    <option value="">Select Solution</option>
                    <option value="college">College ERP</option>
                    <option value="school">School ERP</option>
                    <option value="lms">Learning Management System</option>
                    <option value="evaluation">Online Evaluation</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                ></textarea>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 px-6 py-3 border border-gray-300 rounded-lg font-mono font-bold tracking-widest text-xl text-gray-900">
                    {captchaText}
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="ENTER CAPTCHA"
                    value={formData.captcha}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-900"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold text-lg transition transform hover:scale-105"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">Frontier</span>
                <span className="ml-1 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">LMS</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Pune, Maharashtra, India<br />
                Frontier Campus, 13th Floor, Apex Business Court
              </p>
              <div className="flex gap-3 mb-6">
                {['f', 't', 'in', 'y'].map((social, idx) => (
                  <div key={idx} className="w-10 h-10 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition">
                    {social}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigateToLogin('admin')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition"
              >
                Super Admin Login
              </button>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['About us', 'FrontierCollege', 'LMS', 'EasyCheck', 'EasyAccredit', 'FrontierSchool', 'EasyPariksha'].map((link, idx) => (
                  <a key={idx} href="#" className="block text-gray-700 hover:text-blue-600 transition">{link}</a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-4">Resources</h3>
              <div className="space-y-2">
                {['Download Brochure', 'Blogs', 'Contact Us', 'Demo', 'Certificate', 'Products Video', 'Sitemap'].map((link, idx) => (
                  <a key={idx} href="#" className="block text-gray-700 hover:text-blue-600 transition">{link}</a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-4">Get in Touch</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>📍 Pune, Maharashtra, India</p>
                <p>📞 +91 0000000000</p>
                <p>📞 +91 0000000000</p>
                <p>📞 +91 0000000000</p>
                <p>📧 contact@frontierlms.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 text-center text-gray-700 text-sm">
            © Copyright Frontier LMS 2025. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Previous fixed button removal */}

    </div>
  );
}
