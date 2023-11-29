
import Product from "../interfaces/Product"
import Thead from "../interfaces/Thead"

export const products:Product[] = [
    {
        id: 1,
        name: 'Vaso Hulk',
        quantity: 20,
        price: 345
    },
    {
        id: 2,
        name: 'Polera Capitan America',
        quantity: 8,
        price: 2800
    },
    {
        id: 3,
        name: 'Baby Yoda Collection',
        quantity: 3,
        price: 8000
    }
 
]

export const theadProduct:Thead[]= [
    {
        title:"Id",
    },
    {
        title:"Producto",
    },
    {
        title:"Cantidad"
    },
    {
        title:"Precio"
    },
    {
        title:"Opciones"
    }
];