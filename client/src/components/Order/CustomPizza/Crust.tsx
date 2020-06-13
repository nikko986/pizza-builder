import React, { useState, useEffect, MouseEvent, Dispatch, SetStateAction } from 'react';
import { Pizza } from '../../../models/Pizza';
import { crustsLookup } from '../../../utils/lookups';
import { getCrustTypes } from '../../../requests';
import { Card, Space, Button } from 'antd';

import '../../../assets/stylesheets/Order/CustomPizza/Crust.css';

interface CrustProps {
    setPizza : Dispatch<SetStateAction<Pizza>>;
}

interface CrustType {
    type: string;
    price: number;
}

export default function Crust({setPizza}: CrustProps) {
    const [crusts, setCrusts] = useState<Array<CrustType> | null>(null)

    useEffect(() => {
        (async () => {
            const response = await getCrustTypes();

            setCrusts(await response.json());
        })()
    }, [])

    const chooseCrust = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget;
        const crustPrice = Number(target.value);
        setPizza(pizza => ({...pizza, totalPrice: pizza.crust === '' ? pizza.totalPrice: pizza.totalPrice-pizza.crustPrice}))
        setPizza(pizza=> ({...pizza, crust: target.name, crustPrice: crustPrice, totalPrice: pizza.totalPrice + crustPrice}))
    }
    
    return(
        <div id="crust">
           <h2>Choose your crust</h2>
           <div>
               <Space size="large">
                {
                    crusts
                    ? crusts.map(crust => {
                        return <Card title={crust.type + " - $" +crust.price} style={{ width: 300 }}>
                            <img src={crustsLookup[crust.type]} alt={crust.type}/>
                            <Button type="primary" onClick={chooseCrust} name={crust.type} value={crust.price}>Select</Button>
                        </Card>
                    })
                    : <span>Loading</span>
                }
                </Space>
           </div>
        </div>
    )
}
