import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, spring, staticFile } from 'remotion';
import React from 'react';
// Image will be loaded from public/pizza.png 
// Actually for public folder assets in Remotion, we usually use staticString or calculate path. 
// But simplest is to just use string path for now or import if we use bundler support.
// Let's use static path string for simplicity in typical public folder usage.

export const MyComposition = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        fps,
        frame,
    });

    return (
        <AbsoluteFill
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 100,
                backgroundColor: 'white',
            }}
        >
            <div style={{ transform: `scale(${scale})` }}>
                {/* Attempting to load pizza.png from public folder. 
            User needs to place pizza.png in public folder. */}
                <Img src={staticFile("pizza.png")} style={{ width: '80%' }} />
            </div>
        </AbsoluteFill>
    );
};
