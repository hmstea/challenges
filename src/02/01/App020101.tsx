import React, {MouseEventHandler, ReactNode} from 'react';

function App020101() {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) =>{
        let bodyStyle :CSSStyleDeclaration = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}

export default App020101;