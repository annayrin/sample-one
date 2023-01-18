import React from 'react'
import classes from './button.module.css'
import ScaleLoader from "react-spinners/ScaleLoader";

const Button = ({progress, type, label, disabled, color, className, width, height, rounded, onClick, onMouseOver, onMouseLeave }) => {
    const cls = [
        classes.button,
        classes[color ?? 'default'],
        className
    ]

    const style = {
        width: width ?? '100%',
        height: height ?? 'auto',
        borderRadius: rounded ? '8px' : ''
    }

    return (
        <button
            type={type}
            disabled={disabled}
            style={style}
            className={cls.join(' ')}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {progress
                ? <ScaleLoader color={'var(--white)'} size={50} height={12} width={1}/>
                : label
            }
        </button>
    )
}

export default Button
