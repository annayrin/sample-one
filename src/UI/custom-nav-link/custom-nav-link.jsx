import React from "react";
import classes from "./custom-nav-link.module.css";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({iconName, path, label, description, withIcon}) => {

    return (
        <NavLink
            className={({isActive}) => (isActive ?
                classes.navLink + " " + (withIcon ? classes.selected : classes.withoutIconSelected) :
                classes.navLink + " " + (withIcon ? classes.unselected : classes.withoutIconUnselected))}
            to={path}
        >
            {withIcon && <div className={classes.iconDiv}>
                <span className="material-icons-round">{iconName}</span>
            </div>}
            <div className={[classes.label, withIcon ? classes.labelWithIcon : ""].join(" ")}>
                <h5>{label}</h5>
                {description?.length && <p>{description}</p>}
            </div>

        </NavLink>
    )
}

export default CustomNavLink