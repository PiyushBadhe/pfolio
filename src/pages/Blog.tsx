const posts = [
    {
        title: 'How I Built My Portfolio with Vite + React',
        date: 'Apr 15, 2025',
        summary: 'A breakdown of how I created this blazing fast portfolio using modern tools.',
        slug: '#'
    },
    {
        title: 'Why Tailwind CSS Changed My Approach to Styling',
        date: 'Mar 20, 2025',
        summary: 'Tailwind gives me full control with utility classes — here’s why I prefer it.',
        slug: '#'
    }
];

const Blog = () => {
    return (
        <section className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Blog</h2>
            <div className="space-y-6">
                {posts.map((post, idx) => (
                    <div key={idx} className="border-b pb-4">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="mt-2 text-sm">{post.summary}</p>
                        <a href={post.slug} className="text-blue-600 mt-2 inline-block">
                            Read more →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
