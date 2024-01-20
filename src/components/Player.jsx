import React from 'react';
import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false); 

    function handleEditClick() {
        setIsEditing((editing) => !editing); 
        // 이전 상태값에 기반하여 상태 변경하려면 함수 형태 사용해야 함
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value); // player가 작성한 이름 가져오기
    }

    let editPlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) { // isEditing === true
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />; 
        btnCaption = 'Save';
    }

    return ( 
        <li className={isActive ? 'active' : undefined}> {/* true면 active 클래스 추가, false면 클래스 추가 X  */}
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}