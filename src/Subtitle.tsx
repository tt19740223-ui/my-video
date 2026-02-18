import React from 'react';
import { AbsoluteFill } from 'remotion';

export const Subtitle: React.FC<{ text: string }> = ({ text }) => {
    return (
        <AbsoluteFill
            style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 100,
            }}
        >
            <div
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: 80,
                    color: 'white',
                    textShadow: '0 0 10px rgba(0,0,0,0.8), 2px 2px 0px rgba(0,0,0,0.5)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: '10px 40px',
                    borderRadius: '20px',
                }}
            >
                {text}
            </div>
        </AbsoluteFill>
    );
};
