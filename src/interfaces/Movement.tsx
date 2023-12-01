import Product from './Product' 

export default interface Movement{
    id : Number,
    product:Product,
    type: String,
    date: Date,
    quantity: Number,
    priceUnitary:Number,
    priceTotal: Number,
    quantitySale: Number,
    priceUnitarySale:Number,
    priceTotalSale: Number,
    balanceUnitary:Number,
    balancePrice:Number
}