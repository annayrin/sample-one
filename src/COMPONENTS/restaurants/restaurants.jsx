import React from 'react';
import classes from "./restaurants.module.css"
import restImages from "../../UTILITIES/restImages";
import Button from "../../UI/button/button";

function Restaurants({filteredRestaurants}) {



    return (
        <div className={classes.restaurantsData}>
                {filteredRestaurants.map(item =>
                    <div key={`restaurant_${item.name}`} className={classes.restaurantContainer}>
                        <div className={classes.logoContainer} data-name={item?.name}>
                            <span className={"material-icons"}>favorite</span>
                            <img src={restImages[Math.floor(Math.random() * 8)]}
                                 alt={item?.name ?? "Restaurant image"}/>
                        </div>
                        <div className={classes.infoContainer}>
                            <h5>{item?.name}</h5>
                            <div className={classes.itemDescription}>{item.description}</div>
                            <ul className={classes.itemCuisinesList}>
                                {item.cuisines.map((cuisine, index) => {
                                    return (<li
                                        key={`li_cuisine_${cuisine.id}_${index}`}
                                        className={classes.listItem}
                                    >{cuisine.name}
                                    </li>)
                                })}
                            </ul>

                            <div className={classes.pairedContainer}>
                                <div>
                                    <span className={"material-icons"}>star</span>
                                    <span>{item?.rating.toFixed(2)}</span>
                                </div>
                                <span>Open</span>
                            </div>
                            <div className={classes.buttonContainer}>
                                <Button
                                    rounded
                                    width={180}
                                    height={40}
                                    color={"danger"}
                                    label={`Delivery ${item?.deliveryFee} ֏`}
                                />
                            </div>


                        </div>

                    </div>
                )
                }

        </div>
    );
}

export default Restaurants;