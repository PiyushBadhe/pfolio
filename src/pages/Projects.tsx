import { Box, Typography, Paper, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

const projects = [
    {
        title: 'DevConnect',
        description: 'A social network for developers to connect and collaborate.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        repo: 'https://github.com/PiyushBadhe'
    },
    {
        title: 'TaskForge',
        description: 'A full-stack productivity app for managing projects and tasks.',
        tech: ['TypeScript', 'Express', 'React Query', 'Zod'],
        repo: 'https://github.com/PiyushBadhe'
    },
    {
        title: 'FitTracker',
        description: 'A health dashboard for IT professionals to monitor routines.',
        tech: ['Next.js', 'Chart.js', 'Supabase', 'Tailwind'],
        repo: 'https://github.com/PiyushBadhe'
    }
] as const;

const Projects: React.FC = () => {
    const { ref, isVisible } = useScrollReveal();
    const { theme } = useCustomTheme();
    const iconSize: number = 30;
    const githubLogo: string = theme === "dark"
        ? `https://img.icons8.com/?size=${iconSize}&id=52539&format=png&color=000000`
        : `https://img.icons8.com/?size=${iconSize}&id=106564&format=png&color=000000`

    return (
        <Box
            id="projects"
            className="min-h-screen px-6 py-16 max-w-6xl mx-auto"
            ref={ref as React.RefObject<HTMLDivElement>}
            sx={{
                py: { xs: 8, md: 12 },
                background: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f9fafb',
            }}
        >
            <Typography variant="h4" component="h2" className="text-3xl font-bold mb-8">
                Projects
            </Typography>

            <Box className="grid md:grid-cols-2 py-6 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="flex-1"
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 120 }}
                    >
                        <Paper
                            key={idx}
                            elevation={1}
                            className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="h6" className="text-xl font-semibold" sx={{ flexGrow: 1 }}>
                                    {project.title}
                                </Typography>
                                <Link to={project.repo} target="_blank" rel="noopener noreferrer">
                                    <IconButton size="small" color="inherit">
                                        <img
                                            src={githubLogo}
                                            title={`Repo Link: ${project.title}`}
                                            alt="Repo Link"
                                        />
                                    </IconButton>
                                </Link>
                            </Box>
                            <Typography variant="body2" className="text-sm my-2">
                                {project.description}
                            </Typography>

                            <Box className="flex flex-wrap gap-2 mt-4 text-xs">
                                {project.tech.map(tech => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                                        sx={{ fontSize: '0.75rem' }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
