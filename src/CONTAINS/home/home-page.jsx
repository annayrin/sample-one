import React from 'react';
import classes from "./home-page.module.css"
import BurgerBanner from "../../COMPONENTS/Banners/burger-banner/burger-banner";
import useHomePage from "./use-home-page";
import Button from "../../UI/button/button";
import CuisinesList from "../../COMPONENTS/cuisines-List/cuisines-list";
import ControlBar from "../../COMPONENTS/control-bar/control-bar";
import IconsFilterBar from "../../COMPONENTS/icons-filter-bar/icons-filter-bar";
import restImages from "../../UTILITIES/restImages";


const HomePage = () => {
    const {
        restaurants,
        cuisines,
        activeCuisine,
        filterItems,
        activeFilterIcon,
        chooseCuisine,
        chooseIcon
    } = useHomePage()

    return (
        <div className={classes.homeContent}>
            <section className={classes.backgroundSection}>
                <BurgerBanner/>
            </section>
            <section className={classes.mainContainer}>
                <div className={classes.sortCuisines}>
                    <div>
                        <CuisinesList
                            cuisines={cuisines}
                            activeCuisine={activeCuisine}
                            chooseCuisine={chooseCuisine}
                        />
                    </div>
                </div>
                <div className={classes.menuContent}>
                    <section className={classes.dataControl}>
                        <div className={classes.controlItems}>
                            <ControlBar/>
                        </div>
                        <div className={classes.controlIcons}>
                            <IconsFilterBar
                                activeFilterIcon={activeFilterIcon}
                                filterItems={filterItems}
                                chooseIcon={chooseIcon}
                            />
                        </div>
                    </section>
                    <section className={classes.menuData}>
                        {
                            restaurants.map(item =>
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


                    </section>
                </div>
            </section>
        </div>
    );
}

export default HomePage;