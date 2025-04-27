// components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white py-10 px-6 mt-20 border-t border-gray-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* Brand + Tagline */}
                <div>
                    <h1 className="text-3xl font-extrabold text-cyan-400 tracking-widest">GENTLE WHISPER</h1>
                    <p className="text-sm mt-2 text-gray-400">Echoing innovation in every pixel.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Navigation</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="/about" className="hover:text-cyan-400 transition">About</a></li>
                        <li><a href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</a></li>
                        <li><a href="/contact" className="hover:text-cyan-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Connect</h2>
                    <div className="flex gap-4 text-2xl text-gray-300">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition" title="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
                &copy; {new Date().getFullYear()} Gentle Whisper. All rights reserved.
            </div>
        </footer>
    );
}