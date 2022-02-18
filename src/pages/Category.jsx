import {useParams, useHistory} from "react-router-dom";
import {getFilteredCategory} from "../api";
import {useEffect, useState} from "react";
import {Preloader} from "../Components/Preloader";

import {MealList} from "../Components/MealList";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className='btn' onClick={goBack}>Go back</button>
        {!meals.length ? <Preloader /> : <MealList meals = {meals}/>}
    </>
}

export {Category}