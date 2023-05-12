import React from 'react';
import Profile from "./Profile";

function App010802() {
    return (
        <div className='m-5'>
            <Profile person={{
                imageId: 'lrWQx8l',
                name: 'Subrahmanyan Chandrasekhar',
            }} />
            <Profile person={{
                imageId: 'MK3eW3A',
                name: 'Creola Katherine Johnson',
            }} />
        </div>
    );
}

export default App010802;