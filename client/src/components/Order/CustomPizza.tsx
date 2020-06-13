import React, { Dispatch, SetStateAction } from 'react';
import Size from './CustomPizza/Size';
import Crust from './CustomPizza/Crust';
import { Pizza } from '../../models/Pizza';
import { Button } from 'antd';

import '../../assets/stylesheets/Order/CustomPizza.css';

interface CustomPizzaProps {
    next(): void;
    pizza: Pizza;
    setPizza: Dispatch<SetStateAction<Pizza>>;
}

export default function CustomPizza({next, pizza, setPizza}: CustomPizzaProps) {
    const chooseToppings =() => {
        if(!pizza.size.length) {
            alert('Please choose a pizza size.')
            return
        }

        if (!pizza.crust.length) {
            alert('Please choose pizza crust.')
            return
        }

        next()
    }

    return <div id="custom-pizza">
        <Size setPizza={setPizza}/>
        <Crust setPizza={setPizza}/>
        <Button className="choose-toppings" type="primary" danger onClick={chooseToppings}>Choose Toppings</Button>
    </div>   
}