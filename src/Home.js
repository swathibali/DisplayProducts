import React, { useState } from 'react'
import data from './data'
import ItemCard from './ItemCard'
import './Home.css'

const Home = () => {
    const [exchangeRate, setExchangeRate] = useState(null)
    
    const onCurrencyChange = (e) => {
        const currency = e.target.value;
        //console.log("currency", currency)
        const url='https://v6.exchangerate-api.com/v6/31b3d620a96669075780fd70/latest/INR'
        if (currency === "USD") {
             fetch(url)
                .then((response) => {
                    if(response.ok) 
                        return response.json()
                    
                    throw response;
                })
                .then(({ conversion_rates: { USD } }) => {
                    setExchangeRate(USD)
                    console.log(USD)
                })
                .catch(err => console.log(err,'err'))
        } else {
            setExchangeRate(null)
        }
    }
    return (
        
           <div className="container py-4 mt-4">
                <div className="row">
                    <div className="col-10">
                        <div className="container ">
                            <div className="row">
                                {data.productsData.map((item, index) => {
                                    return (
                                        <ItemCard 
                                            key={item.id.toString()} 
                                            img={item.img} 
                                            title={item.title} 
                                            price= {`${exchangeRate ? Math.round(item.price * exchangeRate * 100)/100 : item.price }`}
                                            symbol = {`${exchangeRate ? '$ ': '₹ '}`}
                                        >
                                        </ItemCard>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-2 h-50  d-flex flex-row justify-content-center">
                        <p className="label">Currency</p>
                        <select className="bootstrap-select bg-secondary dropdown" onChange={onCurrencyChange}>
                            <option value="INR" selected="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>

                    </div>
                </div>
            </div>
       
    )
}

export default Home
