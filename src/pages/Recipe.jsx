import {useParams, useHistory} from "react-router-dom";
import {getMealById} from "../api";
import {useEffect, useState} from "react";
import {Preloader} from "../Components/Preloader";

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const {goBack} = useHistory();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    return <>
        <button  className='btn btn_recipe' onClick={goBack}>Go back</button>
        {!recipe.idMeal ? <Preloader /> : (
            <div className='recipe'>

                <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        style={{
                            border: '1px solid grey',
                            boxShadow: '00 0 10px rgba(0,0,0,0.5)'
                         }}
                />

                <h1>{recipe.strMeal}</h1>

                <h6>Category: {recipe.strCategory}</h6>

                {recipe.strArea ? <h6> Area: {recipe.strArea}</h6> : null}

                <p>{recipe.strInstructions}</p>

                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map(key => {
                                if(key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{
                                                recipe[`strMeasure${key.slice(13)}`]
                                            }</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>

                {recipe.strYoutube ? (
                    <div className='row'>
                        <h5 style={{margin: '2rem 0 1.5rem'}}>Video recipe:</h5>
                        <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                    </div>

                    )
                    : null}


            </div>
        )}
    </>
}

export {Recipe}