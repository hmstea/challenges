import React from 'react';
import {getImageUrl02} from "./utils";

type Props = {
    size: number;
    person: {
        name: string;
        imageId: string;
    }
}

function Avatar({size, person: {name, imageId}}: Props) {
    let imageType: "s" | "b" = 's';
    if (size >= 90) {
        imageType = 'b';
    }
    return (
        <img className='rounded-full'
            src={getImageUrl02({imageId, imageType})}
            alt={name}
            width={size}
            height={size}
        />
    )
}

function App010502() {
    return (
        <div className='m-10 flex gap-5 items-end'>
            <Avatar
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar
                size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
        </div>
    );
}

export default App010502;