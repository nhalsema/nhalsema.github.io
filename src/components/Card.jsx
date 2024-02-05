import React from "react";

function Card({ data, cardIndex }) {
    return (
        <div className="card">
            {data[cardIndex].map(item => (
                <div>
                    <p>{item.title}</p>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};
export default Card;