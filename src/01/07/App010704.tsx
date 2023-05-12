import React, {Fragment} from 'react';

type Poem = {
    lines: string[]
}

const poem: Poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

function App010704() {
    return (
        <article className='italic  text-3xl text-center w-fit m-5 leading-loose'>
            {poem.lines.map((line,index)=>(
                <Fragment key={index}>
                    {index > 0 && <hr className='border-dashed border-2 border-blue-300'/>}
                    <p className='px-10'>{line}</p>
                </Fragment>
            ))}
        </article>
    );
}

export default App010704;