import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  value: [],
}



export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    basketAdd: (state, action) => {
    const basketProduct=state.value.find(x=>x._id === action.payload._id)
    if (basketProduct) {
        basketProduct.count++
        basketProduct.total=basketProduct.count*basketProduct.newPrice
        return
    }
    else{
        let total=action.payload.newPrice
        state.value.push({...action.payload , count:1 , total:total}) 
    }
      
    },
    basketDelete: (state, action) => {
        state.value = state.value.filter(item=>item._id != action.payload._id)
    },
    basketDeleteAll: (state) => {
        state.value = [];
    },
    basketIncrement: (state, action) => {
        const basketProduct=state.value.find(x=>x._id === action.payload._id)
        if (basketProduct) {
            basketProduct.count++
            basketProduct.total=basketProduct.newPrice*basketProduct.count
        }
    },
    basketDecrement: (state, action) => {
        const basketProduct=state.value.find(x=>x._id === action.payload._id)
        if (basketProduct) {
            if ( basketProduct.count === 1) {
                state.value = state.value.filter(item=>item._id != action.payload._id) 
            }
            basketProduct.count--
            basketProduct.total=basketProduct.newPrice*basketProduct.count
        }
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { basketAdd , basketDelete , basketDeleteAll, basketIncrement , basketDecrement} = BasketSlice.actions

export default BasketSlice.reducer