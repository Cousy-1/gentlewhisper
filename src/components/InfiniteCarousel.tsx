'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Introverse Blog',
        desc: 'Spiritual meets tech with this minimalist blog powered by Next.js and Markdown magic.',
        img: '/project1.png',
    },
    {
        title: 'Gentle Whisper Mobile',
        desc: 'Cross-platform app that delivers spiritual affirmations and chill vibes on the go.',
        img: '/project2.png',
    },
    {
        title: 'BSR Hospital Platform',
        desc: 'Healthcare portal with appointment booking, e-consultation, HIPAA-compliant systems.',
        img: '/bsr-hospital.png',
    },
];

export default function InfiniteCarousel() {
    const duplicated = [...projects, ...projects]; // duplicate for seamless loop

    return (
        <div className="overflow-hidden relative w-full">
            <motion.div
                className="flex gap-6"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
                {duplicated.map((project, index) => (
                    <Card key={index} className="min-w-[300px] bg-gray-800 border border-cyan-600">
                        <CardContent className="p-4">
                            <Image src={project.img} alt={project.title} width={500} height={300} className="rounded-lg" />
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
}
