// components/Header.tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-[#0f0f0f] text-white py-10 px-6 mb-20 border-b border-gray-800">
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
                        <li><Link href="/about" className="hover:text-cyan-400 transition">About</Link></li>
                        <li><Link href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link></li>
                        <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
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
        </header>
    );
}
