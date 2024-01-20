import React from 'react';

export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}> {/* ES6 템플릿 리터럴 */}
                    {turn.player} → {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    )
}