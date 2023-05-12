import React from 'react';

type Props = {
    name: DrinkKind;
}


type Feature = {
    part: string;
    caffeine: string;
    age: string;
}

type DrinkKind = 'tea' | 'coffee';

type Drinks = {
    [K in DrinkKind]: Feature
}

function Drink({ name }: Props) {

    /*let part: string = '', caffeine:string = '', age:string = '';
    if (name === 'tea') {
        part = 'leaf';
        caffeine = '15–70 mg/cup';
        age = '4,000+ years';
    } else if (name === 'coffee') {
        part = 'bean';
        caffeine = '80–185 mg/cup';
        age = '1,000+ years';
    }
    return (
        <section>
            <h1 className='text-3xl font-bold mb-3'>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{part}</dd>
                <dt>Caffeine content</dt>
                <dd>{caffeine}</dd>
                <dt>Age</dt>
                <dd>{age}</dd>
            </dl>
        </section>
    );*/

    const drinks: Drinks =  {
        tea : {
            part: 'leaf',
            caffeine: '15–70 mg/cup',
            age: '4,000+ years'
        },
        coffee : {
            part: 'bean',
            caffeine: '80–185 mg/cup',
            age: '1,000+ years'
        }
    }

    const {part, caffeine, age} = drinks[name];

    return(
        <section>
            <h1 className='text-3xl font-bold mb-3'>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{part}</dd>
                <dt>Caffeine content</dt>
                <dd>{caffeine}</dd>
                <dt>Age</dt>
                <dd>{age}</dd>
            </dl>
        </section>
    );
}

function App010603() {
    return (
        <div className='m-10'>
            <Drink name="tea"/>
            <Drink name="coffee"/>
        </div>
    );
}

export default App010603;