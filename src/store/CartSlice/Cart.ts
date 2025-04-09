import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from "../store";

export const toggleCartItem = createAsyncThunk(
  "cart/toggleCartItem",
  async (productId: string, { rejectWithValue, getState }) => {
    const loginUser = getState() as RootState;
    const token = loginUser.loginSlice.user.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/cart/create?productId=${productId}`,
        {},
        { headers }
      );

      const cartItems = res.data.data.cartItems;

      const isInCart = cartItems.some(
        (item: any) => item.product === productId
      );

      if (isInCart) {
        toast.success("Product added to cart");
      } else {
        toast.success("🗑️ Product removed from cart");
      }

      return { cartItems };
    } catch (err: any) {
      console.log(err);
      toast.error("⚠️ Something went wrong!");
      return rejectWithValue(err.response.data);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as {
      _id: string;
      product: string;
      price: number;
      quantity: number;
    }[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleCartItem.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(toggleCartItem.fulfilled, (state, action) => {
      state.items = action.payload.cartItems;
      state.loading = false;
    });

    builder.addCase(toggleCartItem.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default cartSlice.reducer;
