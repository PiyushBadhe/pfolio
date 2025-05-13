import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
    const location = useLocation();
    const { toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between items-center px-6 py-4">
            <div className="flex gap-6">
                {navItems.map(({ label, path }) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        key={label}
                        className={`${location.pathname === path ? 'underline font-bold' : 'hover:opacity-80'
                            }`}
                    >
                        <Link to={path}>{label}</Link>
                    </motion.div>
                ))}
            </div>

            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition-all duration-300"
            >
                {/* {isDark ? '☀️ Light' : '🌙 Dark'} */}
            </motion.button>
        </nav>
    );
};

export default Navbar;
