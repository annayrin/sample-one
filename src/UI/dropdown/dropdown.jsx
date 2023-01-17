import React from "react";
import classes from "./dropdown.module.css";
import useDropdown from "./use-dropdown";
import Button from "../button/button";

const Dropdown = ({custom, listItems, label, onAction}) => {

    const {visible, buttonClass, showDropdown, handleLeave, handleOver} = useDropdown();

    const handleClick = (item) => {
        onAction && onAction(item)
        showDropdown();
    }
    return (
        <div className={classes.dropdown}>
            {!custom ? <div
                    className={buttonClass.join(" ")}
                    onClick={showDropdown}
                    onMouseLeave={visible ? handleLeave : null}
                    onMouseOver={visible ? handleOver : null}
                >
                    <span className={classes.account}>{label}</span>
                    <span className="material-icons">
                    {!visible ? "keyboard_arrow_down" : "keyboard_arrow_up"}
                </span>
                </div>
                : <Button
                    width={35}
                    height={35}
                    className={classes.customHandler}
                    color={"transparent"}
                    // label={<span className="material-icons">{custom}</span>}
                    label={<img src={custom} alt={"Language"} />}
                    onClick={showDropdown}
                    onMouseLeave={visible ? handleLeave : null}
                    onMouseOver={visible ? handleOver : null}
                />}
            {visible && (
                <div
                    className={classes.dropdownBody}
                >
                    <ul>
                        {
                            listItems.map((item, index) => (
                                <li className={classes.liIcons}
                                    key={`dropdown-li-${item.content}-${index}`}
                                    onClick={handleClick.bind(this,item)}
                                >
                                    {item.content}
                                    {item.icon && <span
                                        className={classes.iconContent}
                                        //onClick={onAction ? () => onAction(item.content) : null}
                                        // className="material-icons" /need to add additional case for icon based drop.s
                                    >
                                       <img src={item.icon} alt={item.content} />
                                    </span>}
                                </li>
                            ))
                        }

                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown