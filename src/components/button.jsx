import React from 'react'

export default function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);

    return (
        <div>
            <button onClick={handleClick}>+{props.increment}</button>
        </div>
    )
}
