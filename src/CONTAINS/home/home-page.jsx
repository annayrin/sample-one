import React from 'react';
import classes from "./home-page.module.css"
import BurgerBanner from "../../COMPONENTS/Banners/burger-banner/burger-banner";
import useHomePage from "./use-home-page";
import CuisinesList from "../../COMPONENTS/cuisines-List/cuisines-list";
import ControlBar from "../../COMPONENTS/control-bar/control-bar";
import IconsFilterBar from "../../COMPONENTS/icons-filter-bar/icons-filter-bar";
import Restaurants from "../../COMPONENTS/restaurants/restaurants";


const HomePage = () => {

    const {
        filteredRestaurants,
        restaurants,
        cuisines,
        activeCuisine,
        filterItems,
        activeFilterIcon,
        searchValue,
        chooseCuisine,
        chooseIcon,
        handleSearch
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
                            <ControlBar
                                handleSearch={handleSearch}
                                value={searchValue}

                            />
                        </div>
                        <div className={classes.controlIcons}>
                            <IconsFilterBar
                                activeFilterIcon={activeFilterIcon}
                                filterItems={filterItems}
                                chooseIcon={chooseIcon}
                            />
                        </div>
                    </section>
                    <section className={classes.restaurantSection}>
                        <Restaurants
                            filteredRestaurants={filteredRestaurants}
                        />

                    </section>
                </div>
            </section>
        </div>
    );
}

export default HomePage;