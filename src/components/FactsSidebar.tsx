'use client';

export default function FactsSidebar() {
    const facts = [
        '🧠 Obsessed with clean code and cosmic UI.',
        '🪄 Builds apps that whisper peace into chaos.',
        '🌍 Lives online, breathes TypeScript.',
        '🚀 Has a dream to build tech for inner healing.',
        '🔥 Debugs like a therapist: calm and methodical.',
    ];

    return (
        <div className="fixed top-28 left-6 z-40 bg-slate-800/90 border border-cyan-700 rounded-2xl p-4 shadow-lg w-64 backdrop-blur-lg hidden lg:block">
            <h2 className="text-cyan-400 font-bold text-xl mb-4">📘 Fun Facts</h2>
            <ul className="text-gray-300 space-y-2 text-sm font-mono leading-relaxed">
                {facts.map((fact, index) => (
                    <li key={index} className="hover:text-cyan-300 transition duration-300 ease-in-out">
                        {fact}
                    </li>
                ))}
            </ul>
        </div>
    );
}
