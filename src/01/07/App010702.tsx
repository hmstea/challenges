import React from 'react';
import {Recipe, recipes} from './data';


type Props = {
    recipe: Recipe;
}

function Item({recipe}: Props) {
    return (
        <>
            <h2 className='text-2xl font-bold'>{recipe.name}</h2>
            <ul className='list-disc mx-5 my-3'>
                {recipe.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
            </ul>
        </>
    )
}

function App010702() {
    return (
        <div className='m-5'>
            <h1 className='text-3xl font-bold mb-5'>Recipes</h1>
            {recipes.map(recipe => <Item recipe={recipe} key={recipe.id}/>)}
        </div>
    );
}

export default App010702;