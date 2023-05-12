import React from 'react';
type Person = {
    name: string;
    theme: {
        backgroundColor: string;
        color: string;
    };
    imageUrl: string;
}
const person:Person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    },
    imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
};

function App010402() {
    return (
        <div style={person.theme} className='rounded-lg p-5'>
            <h1>{person.name}'s Todos</h1>
            <img
                className="rounded-full"
                src={person.imageUrl}
                alt="Gregorio Y. Zara"
            />
            <ul className='px-5'>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

export default App010402;