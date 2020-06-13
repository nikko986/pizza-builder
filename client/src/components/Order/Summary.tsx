import React from 'react';
import { Pizza } from '../../models/Pizza';
import { Card } from 'antd';

import '../../assets/stylesheets/Order/Summary.css';

interface SummaryProps {
    pizza: Pizza;
}

export default function Summary({pizza}: SummaryProps) {
    return(
        <div id="summary">
            <Card title="Order Details" style={{ width: 600 }}>
                <p>Size: {pizza.size} ${pizza.sizePrice}</p>
                <p>Crust: {pizza.crust} ${pizza.crustPrice}</p>
                <p>Toppings: ${pizza.toppingsPrice}</p>
                <ul>{
                    pizza.toppings.map(topping => {
                        return <li>{topping}</li>
                    })
                }</ul>
                <hr/>
                <p>Total: ${pizza.totalPrice}</p>
            </Card>
        </div>
    )
} 