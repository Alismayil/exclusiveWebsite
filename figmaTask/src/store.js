import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./toolkit/BasketRedux/basketSlice";
import wishlistReducer from "./toolkit/WishlistRedux/wishlistSlices";
import couponReducer from "./toolkit/BasketRedux/CouponSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    wishlist: wishlistReducer,
    coupon: couponReducer,
  },
});
