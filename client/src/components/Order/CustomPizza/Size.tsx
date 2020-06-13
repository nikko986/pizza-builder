import React, { useState, useEffect, MouseEvent, Dispatch, SetStateAction } from 'react';
import { Pizza } from '../../../models/Pizza';
import { maxToppingsLookup, sizesLookup } from '../../../utils/lookups';
import { getPizzaSizes } from '../../../requests';
import { Card, Space, Button } from 'antd';

import '../../../assets/stylesheets/Order/CustomPizza/Size.css';

interface SizeProps {
    setPizza: Dispatch<SetStateAction<Pizza>>;
}

interface PizzaSize {
    name: string,
    price: number;
}

export default function Size({setPizza}: SizeProps) {
    const [sizes, setSizes] = useState<Array<PizzaSize> | null>( null)

    useEffect(() => {
        (async () => {
            const response = await getPizzaSizes();

            setSizes(await response.json());
        })()
    }, [])

    const chooseSize = (event: MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget;
        const sizePrice = Number(target.value);
        const maxToppings = maxToppingsLookup[target.name];
        
        setPizza(pizza => ({...pizza, totalPrice: pizza.size === '' ? pizza.totalPrice: pizza.totalPrice-pizza.sizePrice}))
        setPizza(pizza=> ({...pizza, size: target.name, sizePrice: sizePrice, maxToppings: maxToppings, totalPrice: pizza.totalPrice + sizePrice}))
    }

    return(
        <div id="size">
            <h2>Choose your size</h2>
            <div>
                <Space size="large">
                {
                    sizes
                    ? sizes.map(size => {
                        return <Card title={size.name + " - $" +size.price} style={{ width: 300 }}>
                            <img src={sizesLookup[size.name]} alt={size.name}/>
                            <Button type="primary" onClick={chooseSize} name={size.name} value={size.price}>Select</Button>
                        </Card>

                    })
                    : <span>Loading</span>
                }
                </Space>
            </div>
        </div>
    )
}
