import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'


interface item {
    id: string,
    image: string,
    title: string,
    dollar_price: number,
    eth_price: number,
    creator: string,
    location: string,
    views: string,
    description: string,
    listings: string,
    status: string,
    size: string,
    quantity: number
}

interface cartState {
    items: item[]
}

const initialState: cartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<item>) => {
            state.items = [...state.items, action.payload]
        },
        removeItem: (state, action: PayloadAction<item>) => {
            const updatedCart = state.items.filter(item => item.id !== action.payload.id)
            state.items = updatedCart
        },
        increaseQuantity: (state, action: PayloadAction<item>) => {
            const cartItem = state.items.find(item => item.id === action.payload.id)!
            cartItem.quantity = cartItem.quantity + 1
        },
        decreaseQuantity: (state, action: PayloadAction<item>) => {
            const cartItem = state.items.find(item => item.id === action.payload.id)!
            cartItem.quantity = cartItem.quantity !== 1 ? cartItem.quantity - 1 : 1
        }
    }

})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.items

export default cartSlice.reducer