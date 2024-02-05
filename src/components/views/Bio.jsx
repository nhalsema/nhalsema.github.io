import React, { useState } from 'react';

function Bio() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {/* <button onClick={toggleVisibility}>Toggle Visibility</button> */}
            {isVisible && <p>
                Multihypenate passionate about utilizing technology to increase ease in daily life.
                Endeavoring to find the best tool for the job, frequently learning new skills to accomplish goals. 
                Striving to proceed humbly and foster an environment of communication, continuous improvement, and optimization.
            </p>}
        </div>
    );
}

export default Bio;
