import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { FoodItem } from "../types";

interface orderState {
  foodItems:FoodItem[]
  additionRequests:[]
}

const initialState: orderState = {
  foodItems:[],
  additionRequests:[]
}


export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addFoodItemToOrderList (state,action:PayloadAction<FoodItem> ){
      const foodItemIsAlreadyInOrderList = state.foodItems.filter(it => it.id==action.payload.id)
      if (foodItemIsAlreadyInOrderList.length!=0){
        const filteredItems = state.foodItems.filter(it => it.id!=action.payload.id)
        state.foodItems = [...filteredItems,action.payload]
      }
      else{
        state.foodItems.push(action.payload)
      }
    }
  },
});

export const { addFoodItemToOrderList } = orderSlice.actions;

export default orderSlice.reducer;
