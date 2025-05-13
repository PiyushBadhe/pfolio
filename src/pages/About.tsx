import { Box } from "@mui/material";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { motion } from "framer-motion";
import TechOrbit from "../components/TechCircles";

const About = () => {
    const { ref, isVisible } = useScrollReveal();

    const technologies = {
        javaScript: {
            text: "JavaScript",
            logo: <img src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" width="25" height="25" />
        },
        typeScript: {
            text: "TypeScript",
            logo: <img src="https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000" width="25" height="25" />
        },
        nodeJS: {
            text: "Node.js",
            logo: <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" width="25" height="25" />
        },
        expressJS: {
            text: "Express.js",
            logo: <a><img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" width="25" height="25" /></a>
        },
        reactJS: {
            text: "React",
            logo: <img src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" width="25" height="25" />
        },
        reactVite: {
            text: "React Vite",
            logo: <a><img src="https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000" width="25" height="25" /></a>
        },
        postgreSQL: {
            text: "PostgreSQL",
            logo: <img src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" width="25" height="25" />
        },
        HTML: {
            text: "HTML",
            logo: <a><img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" width="25" height="25" /></a>
        },
        tailwindCSS: {
            text: "Tailwind CSS",
            logo: <a><img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" width="25" height="25" /></a>
        },
    }

    return (
        <Box
            id="about"
            className="min-h-screen px-6 py-18 max-w-6xl mx-auto"
            ref={ref as React.RefObject<HTMLDivElement>}
            sx={{
                py: { xs: 8, md: 12 },
                background: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f9fafb',
            }}
        >
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                I'm a self-taught developer with a passion for creating beautiful and performant full-stack
                applications. With a strong foundation in both front-end and back-end technologies, I love
                solving real-world problems with clean, scalable code.
            </motion.p>

            <motion.h6
                className="md:text-xl font-bold mb-4 text-center text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
            >
                I work with
            </motion.h6>

            <TechOrbit technologies={technologies} />

        </Box>
    );
};

export default About;
