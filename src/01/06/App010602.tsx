import React from 'react';

type Props = {
    name: string;
    importance: number;
}

function Item({name, importance}: Props) {
    return (
        <li>
            {name}
            {importance > 0 && <i>{` (Importance: ${importance})`}</i> }
        </li>
    );
}

function App010602() {
    return (
        <section className='m-10'>
            <h1 className='m-0 mb-5 text-3xl font-bold'>Sally Ride's Packing List</h1>
            <ul className='list-disc ml-5'>
                <Item
                    importance={9}
                    name="Space suit"
                />
                <Item
                    importance={0}
                    name="Helmet with a golden leaf"
                />
                <Item
                    importance={6}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

export default App010602;