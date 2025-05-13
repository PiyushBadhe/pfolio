import { useEffect, useState } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                        &copy; {currentYear} Piyush Badhe. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[var(--primary-main)] dark:text-gray-400 dark:hover:text-[var(--primary-light)] transition-colors"
                            aria-label="GitHub"
                        >
                            <span className="material-icons">code</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[var(--primary-main)] dark:text-gray-400 dark:hover:text-[var(--primary-light)] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <span className="material-icons">link</span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[var(--primary-main)] dark:text-gray-400 dark:hover:text-[var(--primary-light)] transition-colors"
                            aria-label="Twitter"
                        >
                            <span className="material-icons">login</span>
                        </a>
                        <a
                            href="https://medium.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[var(--primary-main)] dark:text-gray-400 dark:hover:text-[var(--primary-light)] transition-colors"
                            aria-label="Blog"
                        >
                            <span className="material-icons">article</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
