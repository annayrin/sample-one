import React from 'react';
import classes from "./control-bar.module.css";
import SearchBar from "../search-bar/search-bar";
import Button from "../../UI/button/button";

const ControlBar = () => {
    return (
        <div className={classes.controlBar}>
            <div className={classes.searchContainer}>
                <SearchBar placeholder={"Search"}/>
            </div>
            <div className={classes.controlButtons}>
                <Button
                    className={classes.favoriteIcon}
                    color={"favorite"}
                    height={50}
                    width={50}
                    rounded
                    label={<span className={"material-icons"}>star</span>}
                />
                <Button
                    className={classes.locationIcon}
                    color={"transparent-outlined"}
                    height={50}
                    width={50}
                    rounded
                    label={<span className={"material-icons"}>location_on</span>}
                />
                <Button
                    className={classes.locationIcon}
                    color={"transparent-outlined"}
                    height={50}
                    width={180}
                    rounded
                    label={"Open Restaurants"}
                />
                <Button
                    className={classes.locationIcon}
                    color={"transparent-outlined"}
                    height={50}
                    width={80}
                    rounded
                    label={"All"}
                />

            </div>
        </div>
    );
}

export default ControlBar;