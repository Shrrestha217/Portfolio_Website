import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import 'matter-attractors';
import 'matter-wrap';
import { useLayout } from '../context/LayoutContext';

const MatterBackground = () => {
    const sceneRef = useRef(null);
    const { darkMode } = useLayout();

    useEffect(() => {
        Matter.use('matter-attractors');
        Matter.use('matter-wrap');

        const { Engine, Render, Runner, World, Bodies, Body, Events, Common } = Matter;

        const engine = Engine.create();
        const world = engine.world;
        world.gravity.scale = 0;

        const width = window.innerWidth;
        const height = window.innerHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });

        const attractiveBody = Bodies.circle(width / 2, height / 2, 30, {
            isStatic: true,
            plugin: {
                attractors: [
                    (bodyA, bodyB) => ({
                        x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                        y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                    }),
                ],
            },
            render: { visible: false },
        });

        World.add(world, attractiveBody);

        // Adjust particle count based on screen size
        const getParticleCount = () => {
            const screenArea = width * height;
            if (screenArea < 500000) return 60;    // Small screens
            if (screenArea < 1000000) return 90;    // Medium screens
            return 120;                             // Large screens
        };

        for (let i = 0; i < getParticleCount(); i++) {
            const x = Common.random(0, width);
            const y = Common.random(0, height);
            const size = Common.random(10, 40);
            const isCircle = Common.random() > 0.5;

            const color = darkMode
                ? (() => {
                    const grey = Math.floor(Common.random(30, 100));
                    return `rgb(${grey}, ${grey}, ${grey})`;
                })()
                : (() => {
                    const r = Math.floor(Common.random(0, 30));
                    const g = Math.floor(Common.random(170, 230));
                    const b = Math.floor(Common.random(220, 255));
                    return `rgb(${r}, ${g}, ${b})`;
                })();
                
            const shape = isCircle
                ? Bodies.circle(x, y, size, {
                    render: { fillStyle: color, strokeStyle: color, lineWidth: 1 },
                })
                : Bodies.polygon(x, y, Math.floor(Common.random(3, 6)), size, {
                    render: { fillStyle: color, strokeStyle: color, lineWidth: 1 },
                });

            shape.plugin = {
                wrap: {
                    min: { x: 0, y: 0 },
                    max: { x: width, y: height },
                },
            };

            World.add(world, shape);
        }

        const pointerPosition = { x: width / 2, y: height / 2 };

        // Handle touch events
        const handleTouchMove = (e) => {
            e.preventDefault();
            if (e.touches && e.touches.length > 0) {
                pointerPosition.x = e.touches[0].clientX;
                pointerPosition.y = e.touches[0].clientY;
            }
        };

        // Handle mouse events
        const handleMouseMove = (e) => {
            pointerPosition.x = e.clientX;
            pointerPosition.y = e.clientY;
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        Events.on(engine, 'afterUpdate', () => {
            Body.translate(attractiveBody, {
                x: (pointerPosition.x - attractiveBody.position.x) * 0.2,
                y: (pointerPosition.y - attractiveBody.position.y) * 0.2,
            });
        });

        // Device orientation handler
        const handleOrientation = (event) => {
            const { beta, gamma } = event;
            if (typeof beta === 'number' && typeof gamma === 'number') {
                const x = Common.clamp(gamma, -30, 30);
                const y = Common.clamp(beta, -30, 30);
                Body.translate(attractiveBody, {
                    x: x * 0.5,
                    y: y * 0.5,
                });
            }
        };
        window.addEventListener('deviceorientation', handleOrientation, true);

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world);
            Engine.clear(engine);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('deviceorientation', handleOrientation);
            render.canvas.remove();
            render.textures = {};
        };
    }, [darkMode]);

    return (
        <div
            ref={sceneRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                touchAction: 'none' // Important for touch events
            }}
        />
    );
};

export default MatterBackground;