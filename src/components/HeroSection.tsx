import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Typography,
  Button,
  Box,
  Container,
  Stack,
  useTheme as useMuiTheme,
  alpha
} from "@mui/material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();
  const muiTheme = useMuiTheme();
  const { theme } = useCustomTheme();

  // Creating gradients based on current theme
  const textGradient = {
    background: `linear-gradient(to right, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };

  const backgroundGradient = {
    background: theme === 'dark'
      ? `linear-gradient(to bottom right, ${alpha(muiTheme.palette.primary.dark, 0.2)}, ${alpha(muiTheme.palette.secondary.dark, 0.2)})`
      : `linear-gradient(to bottom right, ${alpha(muiTheme.palette.primary.light, 0.1)}, ${alpha(muiTheme.palette.secondary.light, 0.1)})`
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        ...backgroundGradient
      }}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                ...textGradient
              }}
            >
              Piyush Badhe
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2.25rem' },
                fontWeight: 300,
              }}
            >
              Full Stack Developer
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                maxWidth: '42rem',
                fontSize: '1.125rem',
              }}
            >
              Building beautiful, functional web applications with modern technologies.
              Passionate about creating seamless user experiences and clean code.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                href="#projects"
                size="large"
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem'
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="#contact"
                size="large"
                sx={{
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem'
                }}
              >
                Let's Connect
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
