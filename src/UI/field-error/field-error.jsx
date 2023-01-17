import React from "react";
import classes from "./field-error.module.css";

const FieldError = ({error}) => {

    return (
        <span className={classes.fieldError}>
            {error}
        </span>
    )
}

export default FieldError