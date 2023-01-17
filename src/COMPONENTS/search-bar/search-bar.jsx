import React from "react";
import classes from "./search-bar.module.css";
import Button from "../../UI/button/button";
import Input from "../../UI/inputs/input/input";

const SearchBar = ({id, placeholder, searchValue, handleSearch, onReload}) => {

    return (
        <div className={classes.searchBar}>
            <div>
                <Button
                    className={classes.reloadButton}
                    label={<span className={"material-icons"}>search</span>}
                    color={"transparent"}
                    onClick={onReload}
                />
            </div>
            <div>
                <Input
                    id={id}
                    type={"search"}
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={handleSearch}
                />
            </div>
        </div>
    )
}

export default SearchBar