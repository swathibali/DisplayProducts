import React from 'react'

const ItemCard = ({img,title,price,symbol}) => {

    return (
        <div className="col-11 col-md-6 col-lg-4 mx-0 p-2 mb-4 ">
            <div className="card overflow-hidden border-0 h-80 w-80 shadow">
                <img src={img} className="card-img-top img-fluid h-100 w-100" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">{title}</p>
                    <p className="card-title"><b>{symbol}</b>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
