import { configureStore } from "@reduxjs/toolkit";
import HitProdReducer from "./feature/product/HitProdSlice";
import newArrivalReducer from "./feature/new-arrival/NewArrivalSlice";
import qualityReducer from "./feature/quality/QualitySlice";
import essentialReducer from "./feature/essential/EssentialSlice";
import shopListReducer from "./feature/shop-list/ShopListSlice";
import allProdReducer from "./feature/allProd/allProdSlice";
const store = configureStore({
  reducer: {
    HitProd: HitProdReducer,
    NewArrival: newArrivalReducer,
    Quality: qualityReducer,
    Essential: essentialReducer,
    shopList: shopListReducer,
    allProd: allProdReducer,
  },
});

export default store;
