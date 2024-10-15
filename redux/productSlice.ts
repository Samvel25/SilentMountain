import product5 from '@/public/images/store-img-5.png'
import product6 from '@/public/images/store-img-6.png'
import product10 from '@/public/images/store-img-10.png'
import { createSlice } from '@reduxjs/toolkit'
import { StaticImageData } from 'next/image';
import type { PayloadAction } from '@reduxjs/toolkit'
export type IProduct = {
    id: number;
    img: StaticImageData;
    name: string;
    price: number;
    quantity?: number
}
type ICart = {
    products: IProduct[]
}
const initialState: ICart = {
    products: [{
        id: 5,
        img: product5,
        name: 'Warzones',
        price: 350,
        quantity: 1,
    },
    {
        id: 6,
        img: product6,
        name: 'Vr Goggles',
        price: 400,
        quantity: 1,
    },
    {
        id: 10,
        img: product10,
        name: 'Stickers',
        price: 600,
        quantity: 1,
    },]
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existing = state.products.find(product => product.id === action.payload.id)
            if (existing) {
                existing.quantity = existing.quantity! + 1
            } else {
                state.products.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },
        decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product?.quantity && product.quantity > 1) {
                const newQuantity = product.quantity - 1;
                product.quantity = newQuantity;
            }
        }
    }
})
export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer;