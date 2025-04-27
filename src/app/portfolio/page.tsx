'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Code, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaStar, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import InfiniteCarousel from '@/components/InfiniteCarousel';
import FactsSidebar from '@/components/FactsSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen ripple-galaxy text-white font-serif p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl ring-2 ring-cyan-600 animate-pulse"
          >
            <Image
              src="/profile.jpg"
              alt="Gentle Whisper Profile"
              width={144}
              height={144}
              className="object-cover"
            />
          </motion.div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-wide text-cyan-400 drop-shadow-xl animate-textGradient">
          GENTLE WHISPER
        </h1>
        <p className="text-lg mt-2 text-gray-300 italic">
          Full Stack Visionary | Web & App Alchemist | Future-Ready Tech Artisan
        </p>
      </motion.div>

    


      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-slate-900/80 border border-cyan-700 shadow-2xl hover:scale-105 hover:shadow-cyan-500/50 transition-transform">
          <CardContent className="p-6 text-center">
            <Rocket className="mx-auto text-cyan-400 animate-bounce" size={48} />
            <h2 className="text-2xl font-semibold mt-4">Next-Gen Web</h2>
            <p className="text-gray-300 mt-2">
              Responsive, blazing-fast websites built with React, Next.js, and Tailwind.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border border-cyan-700 shadow-2xl hover:scale-105 hover:shadow-cyan-500/50 transition-transform">
          <CardContent className="p-6 text-center">
            <Smartphone className="mx-auto text-cyan-400 animate-pulse" size={48} />
            <h2 className="text-2xl font-semibold mt-4">Mobile Mastery</h2>
            <p className="text-gray-300 mt-2">
              Cross-platform mobile apps with Flutter and React Native, pixel-perfect and performant.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border border-cyan-700 shadow-2xl hover:scale-105 hover:shadow-cyan-500/50 transition-transform">
          <CardContent className="p-6 text-center">
            <Code className="mx-auto text-cyan-400 animate-spin" size={48} />
            <h2 className="text-2xl font-semibold mt-4">Backend Wizardry</h2>
            <p className="text-gray-300 mt-2">
              Scalable backends with Node, Django, and cloud-native architecture.
            </p>
          </CardContent>
        </Card>
      </div>

        <br></br>{/* Gentle Whisper's Story */}
       
<div className="flex flex-row space-x-4">
  <Button 
   onClick={() => window.location.href = "https://wa.me/254715094638"} 
   className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-full text-sm"
 >
   WhatsApp Now
  </Button>
  <Button 
    onClick={() => console.log("Button clicked!")} 
    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-full text-sm"
  >
    Resume
  </Button>
</div>

        <p className="text-center text-gray-300 mb-20 font-serif text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide animate-textGradient">
<br></br> Hi, did you know?<br />
  Gentle Whisper is the embodiment of self-drive and determination, always pushing forward with a quiet yet powerful resolve. <br />
  He thrives on taking initiative, never waiting for direction but instead forging his own path toward innovation. <br />
  With an unwavering passion for continuous learning, he stays ahead of the curve, mastering new skills with ease. His ability to face challenges head-on, always seeking solutions, sets him apart as a true problem solver. <br />
  Gentle Whisper doesn’t just adapt to change, he leads it, inspiring others with his quiet strength and resilience.
</p>

      {/* Featured Projects */}
      <div className="mt-20 bg-black/50 p-8 rounded-2xl shadow-inner shadow-cyan-900/50">
        <h2 className="text-3xl text-center text-cyan-400 font-bold mb-6">🚀 Featured Projects</h2>
        <InfiniteCarousel />
      </div>

      {/* Testimonials */}
      <div className="mt-24">
        <h2 className="text-3xl text-center text-cyan-400 font-bold mb-8">🌟 Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/90 border border-cyan-500">
            <CardContent className="p-6">
              <p className="text-gray-300 italic">
                “Gentle Whisper turned our vision into a beautiful digital reality. Professional, intuitive, and visionary.”
              </p>
              <div className="mt-4 text-sm text-cyan-400 flex items-center gap-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> — Sheilah - Chief Operating Officer, BSR HOSPITAL
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/90 border border-cyan-500">
            <CardContent className="p-6">
              <p className="text-gray-300 italic">
                “From backend to frontend, Gentle Whisper delivers code like poetry — efficient, elegant, and empathetic.”
              </p>
              <div className="mt-4 text-sm text-cyan-400 flex items-center gap-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> — Acacia Wakanyi - CEO at Miracia Wraps
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

{/* Floating Social Nav */}
<div className="fixed top-6 right-6 z-50 flex space-x-4">
  <Link href="https://instagram.com/gentle_.whisper" target="_blank">
    <FaInstagram className="text-pink-500 hover:text-pink-300 transition-transform hover:scale-110" size={24} />
  </Link>
  <Link href="https://linkedin.com/in/gentlewhisper" target="_blank">
    <FaLinkedin className="text-blue-500 hover:text-blue-300 transition-transform hover:scale-110" size={24} />
  </Link>
  <Link href="https://github.com/cousy-1" target="_blank">
    <FaGithub className="text-white hover:text-gray-400 transition-transform hover:scale-110" size={24} />
  </Link>
  <Link href="https://wa.me/254715094638" target="_blank">
    <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 hover:text-green-300 transition-transform hover:scale-110" size="lg" />
  </Link>
</div>

      {/* Contact & Socials */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">🌐 Connect with Me</h2>
        <div className="flex justify-center gap-6 text-2xl text-cyan-400 mb-6">
          <Link href="https://instagram.com/gentle_.whisper" target="_blank"><FaInstagram /></Link>
          <Link href="https://linkedin.com/in/gentlewhisper" target="_blank"><FaLinkedin /></Link>
          <Link href="https://github.com/cousy-1" target="_blank"><FaGithub /></Link>
        </div>
        <a
          href="https://wa.me/254715094638"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 hover:text-cyan-500 p-4 rounded-full flex items-center justify-center animate-bounce transform hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
          title="Contact me on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
          <span className="sr-only">Contact me on WhatsApp</span>
        </a>
        <Footer />
        <FactsSidebar />
       

      </div>
    </div>
  );
}

