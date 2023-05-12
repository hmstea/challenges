import React, {ChangeEvent, MouseEventHandler, ReactNode, useEffect, useState, KeyboardEvent} from 'react';
import ColorSwitch from "./ColorSwitch";
import Ball from "./Ball";
import Game from "./Game";


function getRandomInt(min= 1 , max = 45) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function makeNumber() {

    let numbers: number[] = [];
    let number: number = 0;
    do {
        number = getRandomInt();

        if(!numbers.includes(number)){
            numbers.push(number);
        }
    }
    while(numbers.length < 7);

    return numbers;
}

function App020102() {
    console.log('rendering...')
    const [count, setCount]= useState<number>(1)
    const [games, setGames] = useState<ReactNode[]>();

    const handler: MouseEventHandler = () => {
        const nodes:ReactNode[] = []
        let i:number = 0;

        do {
            const numbers = makeNumber();
            nodes.push(<Game key={i} game={i} numbers={numbers.sort((a, b)=> a-b)}/>);
            i++;
        }
        while(i < count);
        setGames(nodes);
    }
    return (
        <div className='w-full h-full' >
            <input
                   onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                       const value: string = e.currentTarget.value;
                       const num: number = Number(value.slice(-1));
                       if(num > 0 && num < 6){
                           setCount(num);
                       }
                   }}
                   value={count} />
            <button onClick={handler}>RUN!!!</button>
            <div className='flex-col p-0'>
                {games}
            </div>
        </div>
    );
}

export default App020102;