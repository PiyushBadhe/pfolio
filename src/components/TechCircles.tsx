import { useState, useEffect, useMemo } from "react";
import {
    Box,
    Typography,
    useMediaQuery,
    useTheme as useMuiTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const circleDiameter = 96;
const circleRadius = circleDiameter / 2;
const centerText = "Full Stack";

const TechnologyCircle = ({
    angle,
    radius,
    tech,
}: {
    angle: number;
    radius: number;
    tech: { logo: any; text: string };
}) => {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const { ref, isVisible } = useScrollReveal();

    const theme = useMuiTheme();
    const backgroundColor =
        theme.palette.mode === "dark"
            ? theme.palette.primary.dark
            : "";

    return (
        <motion.div
            className="absolute w-24 h-24 rounded-full flex flex-col items-center justify-center text-xs shadow-md"
            style={{
                top: `calc(50% + ${y}px - ${circleRadius}px)`,
                left: `calc(50% + ${x}px - ${circleRadius}px)`,
                transform: `translate(${x}px, ${y}px)`,
                backgroundColor,
            }}
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
                scale: 1,
                rotate: isVisible ? 360 : 0, // full rotation
            }}
            transition={{
                duration: 1.2,
                ease: "easeInOut",
                type: "spring",
                stiffness: 120,
                damping: 14,
            }}        >
            {tech.logo}
            <Typography variant="caption">{tech.text}</Typography>
        </motion.div>
    );
};

export default function TechOrbit({
    technologies,
}: {
    technologies: Record<string, { logo: any; text: string }>;
}) {
    const { ref } = useScrollReveal();
    const muiTheme = useMuiTheme();
    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

    const gradient = {
        background: `linear-gradient(to right,${muiTheme.palette.primary.main},${muiTheme.palette.secondary.main})`,
    };

    const [center, setCenter] = useState({ x: 250, y: 250 });

    useEffect(() => {
        const updateCenter = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setCenter({
                    x: rect.width / 2,
                    y: rect.height / 2,
                });
            }
        };

        updateCenter();
        window.addEventListener("resize", updateCenter);
        return () => window.removeEventListener("resize", updateCenter);
    }, []);

    const baseRadius = isSmallScreen ? 66 : 100;
    const minVariation = isSmallScreen ? 33 : 50;
    const maxVariation = isSmallScreen ? 100 : 150;

    const keys = Object.keys(technologies);
    const angleStep = (2 * Math.PI) / keys.length;

    const techLayout = useMemo(
        () =>
            keys.map((key, index) => {
                const angle = index * angleStep - Math.PI / 2;
                const variation = Math.random() * (maxVariation - minVariation) + minVariation;
                const radius = baseRadius + variation;
                return { key, angle, radius, tech: technologies[key] };
            }),
        [technologies, baseRadius, minVariation, maxVariation, angleStep]
    );

    return (
        <div className="flex justify-center items-center w-full">
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className="relative w-full max-w-[600px] h-[600px] mx-auto mt-2 overflow-hidden"
            >
                {techLayout.map(({ angle, radius }, idx) => {
                    const x = center.x + (radius - circleRadius) * Math.cos(angle);
                    const y = center.y + (radius - circleRadius) * Math.sin(angle);

                    // Calculate angle in degrees for rotation
                    const dx = x - center.x;
                    const dy = y - center.y;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const rotation = (Math.atan2(dy, dx) * 180) / Math.PI;

                    return (
                        <Box
                            key={idx}
                            sx={{
                                position: "absolute",
                                left: `${center.x}px`,
                                top: `${center.y}px`,
                                width: `${length}px`,
                                height: "2px",
                                ...gradient,
                                transform: `rotate(${rotation}deg)`,
                                transformOrigin: "0 0",
                                zIndex: 0,
                            }}
                        />
                    );
                })}

                <Box className="absolute w-24 h-24 rounded-full flex items-center justify-center text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl z-10"
                    sx={{
                        background: (muiTheme) => muiTheme.palette.mode === 'dark' ? '#121212' : '#f9fafb',
                    }}>
                    <Typography variant="subtitle1">{centerText}</Typography>
                </Box>

                {techLayout.map(({ key, angle, radius, tech }) => (
                    <TechnologyCircle key={key} angle={angle} radius={radius} tech={tech} />
                ))}
            </div>
        </div>
    );
}
