const Contact = () => {
    return (
        <section className="min-h-screen px-6 py-12 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded dark:bg-gray-800"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded dark:bg-gray-800"
                />
                <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-3 border rounded dark:bg-gray-800"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                    Send Message
                </button>
            </form>

            <div className="mt-6 text-sm">
                Or reach me at: <a href="mailto:you@example.com" className="text-blue-500">you@example.com</a>
            </div>
        </section>
    );
};

export default Contact;
