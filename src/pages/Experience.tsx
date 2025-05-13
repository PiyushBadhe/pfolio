const experiences = [
    {
        company: 'TechNova Solutions',
        role: 'Full Stack Developer',
        duration: '2023 – Present',
        details:
            'Led the development of an internal dashboard using React, Node.js, and PostgreSQL. Improved page load time by 35%.'
    },
    {
        company: 'CodeCatalyst Labs',
        role: 'Frontend Developer Intern',
        duration: '2022 – 2023',
        details:
            'Built reusable React components, worked on UI/UX improvements, and collaborated with designers to create responsive layouts.'
    }
];

const Experience = () => {
    return (
        <section className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-sm opacity-70">
                            {exp.company} • {exp.duration}
                        </p>
                        <p className="mt-2">{exp.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
