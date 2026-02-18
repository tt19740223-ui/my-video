import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, spring, staticFile, Audio, Sequence } from 'remotion';
import React from 'react';
import { Subtitle } from './Subtitle';

// Image will be loaded from public/pizza.png 
// Audio will be loaded from public/music.mp4

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
            <Audio src={staticFile("music.mp4")} />

            <div style={{ transform: `scale(${scale})` }}>
                {/* User needs to place pizza.png in public folder. */}
                <Img src={staticFile("pizza.png")} style={{ width: '80%' }} />
            </div>

            <Sequence from={0} durationInFrames={150}>
                <Subtitle text="美味しいぞ～" />
            </Sequence>

            <Sequence from={150} durationInFrames={150}>
                <Subtitle text="いえ～い" />
            </Sequence>
        </AbsoluteFill>
    );
};
