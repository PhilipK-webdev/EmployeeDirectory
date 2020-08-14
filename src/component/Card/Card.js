import React from 'react'

const Card = ({ count }) => {

    return (

        <div className="container">
            <div className="card mx-auto" style={{ width: "400px" }} >
                <div className="card-body">
                    <h4 className="cart-title">{count}</h4>
                    <p className="card-text">PlaceHolder</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
