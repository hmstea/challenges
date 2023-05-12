import React from 'react';

function Profile() {
    return (
        <img className='m-1'
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}


function App010103() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default App010103;