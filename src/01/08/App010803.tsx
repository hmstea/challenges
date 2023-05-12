import React, {useEffect, useState} from 'react';
import StoryTray from "./StoryTray";

const stories:{id: string; label: string}[] = [
    {id: '0' , label: "Ankit's Story"},
    {id: '1' , label: "Taylor's Story"},
];

function App010803() {
    const [time, setTime] = useState<Date>(new Date());
    useEffect(()=>{
        const tmp = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(tmp);
        }
    }, []);


    return (
        <div className='m-10 text-center xl:max-w-[75%] mx-auto'>
            <h1 className='text-3xl font-bold mb-5'>It is {time.toLocaleTimeString()} now.</h1>
            <StoryTray stories={stories}/>
        </div>
    );
}

export default App010803;