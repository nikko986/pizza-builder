import React, { useState, useEffect, MouseEvent, Dispatch, SetStateAction } from 'react';
import { Pizza } from '../../models/Pizza';
import { getToppings } from '../../requests';
import { Button } from 'antd';
import '../../assets/stylesheets/Order/Toppings.css';

import { toppingsLookup } from '../../utils/lookups';
import backImage from '../../assets/images/back.png';


interface ToppingsProps {
    previous(): void;
    next(): void;
    setPizza : Dispatch<SetStateAction<Pizza>>;
    maxToppings: number;
}

interface PizzaTopping {
    name: string;
}

export default function Toppings({previous, next, setPizza, maxToppings}: ToppingsProps) {
    let toppings: string[] = []
    let additionalCost: number = 0

    const [pizzaToppings, setPizzaToppings] = useState<Array<PizzaTopping> | null>(null)

    useEffect(() => {
        (async () => {
            const response = await getToppings();

            setPizzaToppings(await response.json());
        })()
    }, [])

    const goBack = () => {
        setPizza(pizza=> ({...pizza, size: '', sizePrice: 0, crust: '', crustPrice: 0, totalPrice: 0}))
        previous()
    }

    const checkout = () => {
        setPizza(pizza => ({...pizza, toppings: toppings, toppingsPrice: additionalCost, totalPrice: pizza.totalPrice + additionalCost}));
        next()
    }

    const chooseTopping = (event: React.MouseEvent<HTMLButtonElement>) => {
        let target = event.currentTarget;

        if (!toppings.includes(target.name)) {
            if (toppings.length >= maxToppings) {
                alert('Maximum number of toppings reached.')
                return
            }
            toppings.push(target.name)
            
            if (toppings.length > 3) {
                additionalCost += 0.5
            }

            target.className='toggled';
        }
        else {
            toppings = toppings.filter(topping => topping !== target.name)
            if (toppings.length >= 3) {
                additionalCost -= 0.5
            }
            target.className='';
        }
    }

    return(
        <div id="toppings">
            <button className="back" onClick={goBack}><img src={backImage} alt="Back" height="36px"/></button>
            <h2>Choose your toppings:</h2>
            <div id="topping-options">
                {
                    pizzaToppings
                    ? pizzaToppings.map(topping => <button onClick={chooseTopping} name={topping.name}><img src={toppingsLookup[topping.name]} alt={topping.name}/>{topping.name}</button>)
                    : <span>Loading</span>
                }
            </div>
            <Button type="primary" danger className="checkout" onClick={checkout}>Checkout</Button>
        </div>
    )
} 