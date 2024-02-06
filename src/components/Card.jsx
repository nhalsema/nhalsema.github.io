import React from "react";

function Card({ data, cardIndex }) {
    return (
        <div>
            {data[cardIndex].map(item => (
                <div>
                    <div>{item.top}</div>
                    <div>{item.bottom}</div>
                </div>
            ))}
        </div>
    );
};
export default Card;