import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ContactForm } from "../types";
import { Box, Typography, TextField, Button, Paper, IconButton } from "@mui/material";
import { Email, LocationOn, GitHub, LinkedIn, ArticleOutlined } from "@mui/icons-material";

export default function Contact() {
    const { ref, isVisible } = useScrollReveal();
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            console.log("Form submission:", formData);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <Box
            component="section"
            id="contact"
            ref={ref as React.RefObject<HTMLDivElement>}
            sx={{
                py: { xs: 8, md: 12 },
                background: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f9fafb',
            }}
        >
            <Box className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Have a question or want to work together? Drop a message and I’ll get back to you soon.
                </motion.p>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                    }}
                >
                    {/* Form Section */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ flex: 1 }}
                    >
                        <TextField
                            label="Name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />

                        <TextField
                            label="Email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />

                        <TextField
                            label="Message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={6}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                py: 1.5,
                                mt: 3,
                                borderRadius: 2,
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                textTransform: 'none',
                            }}
                        >
                            Send Message
                        </Button>
                    </motion.form>

                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-1"
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                p: 5,
                                height: "100%",
                                backgroundColor: (theme) =>
                                    theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                Contact Information
                            </Typography>

                            <Box mb={3}>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Email sx={{ color: "primary.main", mr: 2 }} />
                                    <Box>
                                        <Typography variant="subtitle1">Email</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            badhepiyush7@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <LocationOn sx={{ color: "primary.main", mr: 2 }} />
                                    <Box>
                                        <Typography variant="subtitle1">Location</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Pune, Maharashtra, India
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                Connect with me
                            </Typography>
                            <Box display="flex" gap={2} mt={1}>
                                <IconButton
                                    href="https://github.com/PiyushBadhe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    title="GitHub"
                                >
                                    <GitHub />
                                </IconButton>
                                <IconButton
                                    href="https://www.linkedin.com/in/piyush-badhe-dot-stack"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    title="LinkedIn"
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton
                                    href="https://hashnode.com/@piyush-badhe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    title="HashNode"
                                >
                                    <ArticleOutlined />
                                </IconButton>
                            </Box>
                        </Paper>
                    </motion.div>
                </Box>
            </Box>
        </Box>
    );
}
