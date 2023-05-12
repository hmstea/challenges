import React, {MouseEventHandler, ReactNode, useState} from 'react';

type Props = {
    children: ReactNode;
}


function Panel({children}: Props) {
    const [isShow, setShow] = useState<boolean>(true);
    return (
        <div className='flex-col rounded-md border-gray-300 p-3 border-solid border border-black w-[300px] mb-5'>
            <button onClick={():void => {
                setShow((prevState: boolean) => !prevState);
            }} className='border rounded-sm bg-gray-300 text-black border-solid border-black text-sm px-1'>{isShow? 'Collapse' : 'Expand'}</button>
            {isShow && children}
        </div>
    );
}

export default Panel;