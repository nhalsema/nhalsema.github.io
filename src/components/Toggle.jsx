import React, { useState } from 'react';

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            {/* <button onClick={handleToggle}>
                {isToggled ? 'ON' : 'OFF'}
            </button> */}
            <label className="switch">
                <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;