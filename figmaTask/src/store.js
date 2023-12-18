import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './toolkit/BasketRedux/basketSlice'
import wishlistReducer from './toolkit/WishlistRedux/wishlistSlices'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    wishlist: wishlistReducer,
  },
})