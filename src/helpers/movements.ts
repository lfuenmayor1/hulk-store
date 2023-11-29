import Thead from "../interfaces/Thead"
import Movement from "../interfaces/Movement";

export const movements:Movement[] = [
    {
        id: 1,
        productId: 1,
        type: "Inventario Inicial",
        date: "28/11/2023",
        quantity: 20,
        priceUnitary:345,
        priceTotal: 6900,
        balanceUnitary:345,
        balancePrice:6900
    }
]

export const theadMovement:Thead[]= [
    {
        title:"Id",
    },
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
        title:"Cantidad"
    },
    {
        title:"Precio Unitario"
    },
    {
        title:"Total Stock"
    },
    {
        title:"Balance"
    }

];