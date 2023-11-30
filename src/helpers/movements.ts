import Thead from "../interfaces/Thead"
import Movement from "../interfaces/Movement";

export const movements:Movement[] = [
    {
        id: 1,
        product: {
            id: 1,
            name: 'Vaso Hulk',
            quantity: 20,
            price: 345
        },
        type: "Inventario Inicial",
        date: new Date(),
        quantity: 20,
        priceUnitary:345,
        priceTotal: 6900,
        quantitySale: 0,
        priceUnitarySale:0,
        priceTotalSale: 0,
        balanceUnitary:20,
        balancePrice:6900
    },
    {
        id: 2,
        product: {
            id: 2,
            name: 'Polera Capitan America',
            quantity: 8,
            price: 2800
        },
        type: "Inventario Inicial",
        date: new Date(),
        quantity: 8,
        priceUnitary:2800,
        quantitySale: 0,
        priceTotal: 22400,
        priceUnitarySale:0,
        priceTotalSale: 0,
        balanceUnitary:8,
        balancePrice:22400
    },
    {
        id: 3,
        product: {
            id: 3,
            name: 'Groot Collection',
            quantity: 3,
            price: 8000
        },
        type: "Inventario Inicial",
        date: new Date(),
        quantity: 3,
        priceUnitary:8000,
        priceTotal: 24000,
        quantitySale: 0,
        priceUnitarySale:0,
        priceTotalSale: 0,
        balanceUnitary:3,
        balancePrice:24000
    }
]

export const theadMovement:Thead[]= [
    
    {
        title:"Producto",
    },
    {
        title:"Tipo",
    },
    {
        title:"Fecha"
    },
    {
        title:"Cantidad Entrada"
    },
    {
        title:"Precio Unitario Entrada"
    },
    {
        title:"Precio Total Entrada"
    },
    {
        title:"Cantidad Salida"
    },
    {
        title:"Precio Unitario Salida"
    },
    {
        title:"Precio Total Salida"
    },
    {
        title:"Total Stock"
    },
    {
        title:"Balance"
    }

];