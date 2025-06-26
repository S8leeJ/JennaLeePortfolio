import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const StarsBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            style={{ position: 'absolute', width: '100%', height: '100%' }}

            options={{
                fullScreen: { enable: false },
                background: { color: 'transparent' },
                particles: {
                    number: { value: 100, density: { enable: true, area: 800 } },
                    shape: { type: 'star' },
                    size: { value: 2 },
                    value: ['#ffffff', '#facc15'], // white and yellow (Tailwind yellow-400 hex)
                    opacity: {
                        value: 0.8,
                        random: true,
                        animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false },
                    },
                    move: { enable: true, speed: 0.3, direction: 'none', outModes: { default: 'bounce' } },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' },
                        onClick: { enable: true, mode: 'push' },
                    },
                    modes: {
                        repulse: { distance: 60, duration: 1 },
                        push: { quantity: 5 },
                    },
                },

            }}
        />
    );
};

export default StarsBackground;
