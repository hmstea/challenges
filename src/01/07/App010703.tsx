import React from 'react';
import { recipes} from './data';


type Props = {
    id: string;
    name: string;
    ingredients: string[];
}

function Recipe({id, name, ingredients}: Props) {
    return (
        <>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <ul className='list-disc mx-5 my-3'>
                {ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
            </ul>
        </>
    )
}

function App010703() {
    return (
        <div className='m-5'>
            <h1 className='text-3xl font-bold mb-5'>Recipes</h1>
            {recipes.map(recipe => <Recipe {...recipe} key={recipe.id}/>)}
        </div>
    );
}

export default App010703;