import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import React from 'react';
import { Scene } from './Scene';

export const MyComposition = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            <Audio src={staticFile("music.mp4")} loop />
            <Sequence from={0} durationInFrames={120}>
                <Scene text="中世の町からの旅立ち" color="#8B0000" />
            </Sequence>
            <Sequence from={120} durationInFrames={120}>
                <Scene text="森を歩く" color="#228B22" />
            </Sequence>
            <Sequence from={240} durationInFrames={120}>
                <Scene text="石橋を渡る" color="#708090" />
            </Sequence>
            <Sequence from={360} durationInFrames={120}>
                <Scene text="キャンプファイヤーでの休息" color="#FF4500" />
            </Sequence>
            <Sequence from={480} durationInFrames={120}>
                <Scene text="古代遺跡の発見" color="#D2B48C" />
            </Sequence>
            <Sequence from={600} durationInFrames={120}>
                <Scene text="賑やかな市場" color="#FFD700" />
            </Sequence>
            <Sequence from={720} durationInFrames={120}>
                <Scene text="ここ・・・どこ？ (涙の笑顔)" color="#4682B4" />
            </Sequence>
        </AbsoluteFill>
    );
};
