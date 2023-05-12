import React from 'react';

type Props = {
    name: string;
    isPacked: boolean;
}
function Item({ name, isPacked }: Props) {
    return (
        <li>
            {name} {isPacked ? '✔' : '❌'}
        </li>
    );
}

function App010601() {
    return (
        <section className='m-10'>
            <h1 className='m-0 mb-5 text-3xl font-bold'>Sally Ride's Packing List</h1>
            <ul className='list-disc ml-5'>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

export default App010601;