import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from "../store";

export const CartItems = createAsyncThunk(
  "cart/CartItems",
  async (_, { rejectWithValue, getState }) => {
    const loginUser = getState() as RootState;
    const token = loginUser.loginSlice.user.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/cart/getall`,
        { headers }
      );
      const cartItems = res.data.data.cartItems;

      return cartItems;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const cartItemsSlice = createSlice({
  name: "cart",
  initialState: {
    products: [] as {
      _id: string;
      product: string;
      price: number;
      quantity: number;
    }[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CartItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(CartItems.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    builder.addCase(CartItems.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default cartItemsSlice.reducer;
