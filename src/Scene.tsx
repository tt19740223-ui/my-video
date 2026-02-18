import { AbsoluteFill, Img, staticFile } from 'remotion';
import React from 'react';

type SceneProps = {
    text: string;
    color: string;
    imageSrc?: string; // Optional: for future use when images are available
};

export const Scene: React.FC<SceneProps> = ({ text, color, imageSrc }) => {
    return (
        <AbsoluteFill
            style={{
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: 60,
                fontFamily: 'sans-serif',
                textAlign: 'center',
            }}
        >
            {imageSrc ? (
                <Img src={staticFile(imageSrc)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
                <>
                    <div style={{ marginBottom: 20 }}>Ref: {imageSrc || 'image-pending'}</div>
                    <div>{text}</div>
                </>
            )}
        </AbsoluteFill>
    );
};
