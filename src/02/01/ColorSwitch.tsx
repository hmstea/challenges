import React from 'react';

type Props = {
    onChangeColor: () => void
}

function ColorSwitch({onChangeColor}:Props) {
    return (
        <button onClick={(e) => {
            e.stopPropagation();
            onChangeColor();
        }}>
            add ball
        </button>
    );
}

export default ColorSwitch;