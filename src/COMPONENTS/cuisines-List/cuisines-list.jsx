import React from 'react';
import classes from "./cuisines-list.module.css";
import Button from "../../UI/button/button";

const CuisinesList = ({cuisines, activeCuisine, chooseCuisine}) => {

    return (
        <ul className={classes.cuisinesList}>
            {cuisines?.length && cuisines.map(item =>
                <li
                    key={`li_${item.id}_${item.name}`}
                    className={classes.listItem}
                >
                    <Button
                        className={activeCuisine?.id === item.id ? classes.activeButton : null}
                        label={item.name}
                        color={"dark-outlined"}
                        rounded
                        onClick={chooseCuisine.bind(this, item)}
                    />
                </li>)}
        </ul>
    );
}

export default CuisinesList;