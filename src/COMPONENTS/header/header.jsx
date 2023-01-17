import React from 'react'
import classes from "./header.module.css"
import logo from "../../images/logos/foodLogo.png"
import Button from "../../UI/button/button";
import Dropdown from "../../UI/dropdown/dropdown";
import useHeader from "./use-header";
import CustomNavLink from "../../UI/custom-nav-link/custom-nav-link";

const Header = () => {

    const {
        languages,
        links,
        activeLanguage,
        inactiveLanguages,
        selectActiveLanguage
    } = useHeader()

    return (
        <div className={classes.header}>
            <div className={classes.headerContent}>
                <nav className={classes.headerNavigation}>
                    <div className={classes.navItem}>
                        <img src={logo} alt="Food Me Logo" className={classes.logo}/>
                    </div>
                    <div className={classes.navItem}>
                        <ul className={classes.navLinksList}>
                            {links.map(item => <li
                                key={"li_" + item.label}
                                className={classes.listItem}
                            >
                                <CustomNavLink
                                    iconName={item?.iconName}
                                    path={item?.path}
                                    label={item?.label}
                                    description={item?.description}/>
                            </li>)}
                        </ul>
                    </div>
                    <div className={[classes.navItem, classes.buttonGroup].join(" ")}>
                        <Dropdown
                            listItems={inactiveLanguages}
                            onAction={selectActiveLanguage}
                            visible={false}
                            custom={activeLanguage.icon}
                        />
                        <Button
                            label={"Login"}
                            color={"danger-outlined"}
                            width={90}
                            rounded
                        />
                        <Button
                            label={"Sign Up"}
                            color={"danger"}
                            width={90}
                            rounded
                        />
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header