import React from 'react';
import classes from "./burger-banner.module.css"
import promoBurger from "../../../images/foodImages/burger-promo.png";

const BurgerBanner = () => {

    return (
            <div className={classes.container}>
                <div className={classes.containerDiv}>
                    <div className={classes.textHolder}>
                        <h3>
                            Hungry?
                        </h3>
                        <h2>
                            Let us bring the food to you with
                            <span> just a click! </span>
                        </h2>
                    </div>
                </div>
                <div className={classes.containerDiv}>
                    <div className={classes.imageHolder}>
                        <img src={promoBurger} alt={"Promo Burger"} />
                    </div>
                </div>
            </div>
    );
}

export default BurgerBanner;