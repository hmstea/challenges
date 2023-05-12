import React from 'react';
import { people, Person } from './data';
import { getImageUrl } from './utils';

type Props ={
    people: Person[];
    title: string;
}

function List({people, title}: Props){
    const listItems = people.map(person =>
        <li key={person.id} className='flex gap-3 items-center mb-3'>
            <img className='rounded-full'
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <>
            <h2 className='text-2xl font-bold mb-6'>{title}</h2>
            <ul>{listItems}</ul>
        </>
    );
}
function App010701() {

    return (
        <article className='m-5'>
            <h1 className='text-3xl font-bold '>Scientists</h1>
            <List people={people.filter(p=>p.profession==="chemist")} title="Chemists "/>
            <List people={people.filter(p=>p.profession!=="chemist")} title="Everyone Else"/>
        </article>
    );
}

export default App010701;