import config from './config';

const { backendUri } = config;

export const getPizzaSizes = () => {
    return fetch(`${backendUri}/testAPI/pizza-size`)
}

export const getCrustTypes = () => {
    return fetch(`${backendUri}/testAPI/crust`)
}

export const getToppings = () => {
    return fetch(`${backendUri}/testAPI/toppings`)
}