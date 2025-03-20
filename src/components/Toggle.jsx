import React, { useState } from 'react'
import './Toggle.scss'

const Toggle = () => {
    const [open, setOpen] = useState(false)
    return (
        <div
            onClick={() => setOpen(!open)}
            className={`hamburger ${open ? 'open' : ''}`}>
            <div className="link">

                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="content-box">
                hello react
            </div>
        </div>

    )
}

export default Toggle