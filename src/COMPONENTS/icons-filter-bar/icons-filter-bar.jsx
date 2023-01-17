import React from 'react';
import classes from "./icons-filter-bar.module.css";
import Button from "../../UI/button/button";

const IconsFilterBar = ({filterItems, activeFilterIcon, chooseIcon}) => {
    return (
        <div className={classes.categoryIcons}>
            {filterItems?.length && filterItems.map(item =>
                <Button
                    key={`item_icon_${item.label}`}
                    className={[activeFilterIcon?.label === item.label ? classes.selectedFoodIcon : classes.foodIcon].join("")}
                    color={"light"}
                    width={70}
                    height={70}
                    label={<img src={item.img} alt={item.label}/>}
                    onClick={chooseIcon.bind(this,item)}
                />
            )}

        </div>
    );
}

export default IconsFilterBar;