import React from 'react';

export default function GameBoard({ onSelectSquare, board }) {
    return (
        <ol id="game-board"> 
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                        disabled={playerSymbol !== null}> 
                                        {/* 버튼 비활성화 (이미 선택되어 있는 칸)*/}
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};