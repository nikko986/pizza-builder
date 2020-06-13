import React, {useState} from 'react';
import CustomPizza from './Order/CustomPizza';
import Toppings from './Order/Toppings';
import Summary from './Order/Summary';
import { Pizza } from '../models/Pizza';

import '../assets/stylesheets/Order.css';

export default function Order() {
    const pizzaDefaultState = {
        size: '',
        sizePrice: 0,
        crust: '',
        crustPrice: 0,
        toppings: [],
        toppingsPrice: 0,
        maxToppings: 0,
        totalPrice: 0
    }

    const [step, setStep] = useState(1)
    const [pizza, setPizza] = useState<Pizza>(pizzaDefaultState);

    const next = () => {
        setStep(step + 1);
    }

    const previous = () => {
        setStep(step - 1);
    }
    
    switch(step) {
        case 1:
            return <div id="order"><CustomPizza next={next} pizza={pizza} setPizza={setPizza}/></div>
        case 2:
            return <div id="order"><Toppings previous={previous} next={next} setPizza={setPizza} maxToppings={pizza.maxToppings}/></div>
        default:
            return <div id="order"><Summary pizza={pizza}/></div>
    }
} 