import React from 'react';
import {getImageUrl, Person} from "./utils";
import Panel from "./Panel";

function Profile({person} : {person : Person}) {
    return (
        <Panel>
            <Header person={person}/>
            <Avatar person={person}/>
        </Panel>
    )
}


function Header({person} : {person : Person}) {
    return <h1>{person.name}</h1>;
}

function Avatar({person} : {person : Person}) {
    return (
        <img
            className="rounded-full"
            src={getImageUrl(person)}
            alt={person.name}
            width={50}
            height={50}
        />
    );
}

export default Profile;