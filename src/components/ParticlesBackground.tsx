import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: { value: 'transparent' } },
                particles: {
                    color: { value: '#ffffff' },
                    links: { enable: true, color: '#ffffff' },
                    move: { enable: true, speed: 1 },
                    number: { value: 50 },
                    opacity: { value: 0.5 },
                    shape: { type: 'circle' },
                    size: { value: 2 }
                }
            }}
        />
    );
};

export default ParticlesBackground;