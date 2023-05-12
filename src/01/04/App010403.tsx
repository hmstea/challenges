import React from 'react';
import {getImageUrl, ImageType} from "./utils";
export type Person = {
    name: string;
    theme: {
        backgroundColor: string;
        color: string;
    };

};

const person:(Person & ImageType)= {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function App010403() {
    return (
        <div style={person.theme} className='rounded-lg p-5'>
            <h1>{person.name}'s Todos</h1>
            <img
                className="rounded-full"
                src={getImageUrl(person)}
                alt={person.name}
            />
            <ul className='px-5'>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

export default App010403;