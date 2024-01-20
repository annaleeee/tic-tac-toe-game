import React from 'react';

export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over !</h2>
            {winner && <p>' {winner} ' 님이 승리하셨습니다.</p>}
            {!winner && <p>무승부입니다.</p>}
            <p><button onClick={onRestart}>다시하기</button></p>
        </div>
    );
};