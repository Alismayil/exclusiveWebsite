import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: [],
}



export const CouponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        couponAdd: (state, action) => {
            state.value.push(action.payload)
        },

    }
})

export const { couponAdd } = CouponSlice.actions

export default CouponSlice.reducer