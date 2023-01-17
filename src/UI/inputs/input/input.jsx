import React from 'react'
import classes from './input.module.css'
import FieldError from "../../field-error/field-error";

const Input = ({
                   containerClassName,
                   className,
                   labelClassName,
                   info,
                   readOnly,
                   defaultValue,
                   required,
                   maxLength,
                   error,
                   autoComplete,
                   id,
                   label,
                   disabled,
                   name,
                   min,
                   max,
                   step,
                   placeholder,
                   value,
                   type,
                   onChange,
                   onBlur,
                   onFocus,
                   onKeyDown
               }) => {
    const cls = [
        classes.input,
        className
    ]

    return (
        <div className={containerClassName ?? classes.inputContainer}>
            {!!label && <label className={`${classes.label} ${labelClassName}`} htmlFor={id}>
                {label}
                {required && <span>*</span>}
                {!!info && (
                    <span className={classes.info}>
                        {/*<HelpOutlineIcon fontSize={"small"}/> smth wrong with node modules*/}
                        <div className={classes.infoContainer}>{info}</div>
                    </span>
                )}
            </label>}
            <input
                readOnly={readOnly}
                autoComplete={autoComplete}
                className={cls.join(" ")}
                id={id}
                type={type}
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue}
                maxLength={maxLength}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            {!!error && <FieldError error={error}/>}
        </div>
    )
}

export default Input
