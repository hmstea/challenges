import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    title?: string;
}

function Card({children, title}: Props) {
    return (
        <div className='border border-solid border-gray-400 p-5 mb-5 rounded-3xl  w-fit text-center'>
            <div className="m-0 text-center">
                <h1 className='mb-2 text-3xl font-bold'>{title}</h1>
                {children}
            </div>
        </div>
    )
}

function App010503() {
    return (
        <div className='m-10'>
            <Card title='Photo'>
                <img
                    className="rounded-full m-5"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card title='About'>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to
                    schistosomiasis.</p>
            </Card>
        </div>
    );
}

export default App010503;