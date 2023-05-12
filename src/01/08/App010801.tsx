import React, {useEffect, useState} from 'react';
import Clock from "./Clock";



function App010801() {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(()=>{
        const temp = setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=>{
            clearInterval(temp);
        }
    },[])
    return (
        <div>
            <Clock time={time}/>
        </div>
    );
}

export default App010801;