import React from 'react';
import {getImageUrl} from "./utils";

type Props = {
    name: string;
    profession: string;
    awards: {
        count: number;
        desc: string;
    };
    discovered: string;
    imageId: string;
}
function Profile({name,profession, awards, discovered, imageId }: Props) {
    return (
        <section className="border-solid px-4 rounded-md mt-2 border">
            <h2 >{name}</h2>
            <img
                className="rounded-full"
                src={getImageUrl(imageId)}
                alt={name}
                width={70}
                height={70}
            />
            <ul className='px-4'>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.count} </b>
                    ({awards.desc})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}

function App010501() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile name="Maria Skłodowska-Curie" profession="physicist and chemist" awards={{count:4, desc:"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"}}
                     discovered="polonium (element)" imageId="szV5sdG"/>
            <Profile name="Katsuko Saruhashi" profession="geochemist" awards={{count:2, desc:"Miyake Prize for geochemistry, Tanaka Prize"}}
                     discovered="a method for measuring carbon dioxide in seawater" imageId="YfeOqp2"/>
        </div>
    );
}


export default App010501;