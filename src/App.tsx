import { useTheme } from './context/ThemeContext';
import { darkTheme, lightTheme } from './context/MuiTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import HeroSection from "./components/HeroSection"
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

const App = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <Header />
        <main className="pt-16 flex-grow" role="main">
          <HeroSection />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;