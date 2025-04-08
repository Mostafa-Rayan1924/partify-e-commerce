import { AsyncThunkConfig } from "./../../../node_modules/@reduxjs/toolkit/src/createAsyncThunk";
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
const initialState: {
  user: {
    token: string;
    userData: {
      _id: string;
      username: string;
      email: string;
      photo: string;
      location: string;
    };
  };
  loading: boolean;
  error: any;
} = {
  user: {
    token:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("LoggedUser") as string)?.token || ""
        : "",
    userData:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("LoggedUser") as string)?.userData ||
          {}
        : {},
  },
  loading: false,
  error: "",
};
export const SignupFunc: AsyncThunk<
  AxiosResponse<any, any>,
  {
    email: string;
    password: string;
  },
  AsyncThunkConfig
> = createAsyncThunk(
  "Signup/SignupFunc",
  async (params: { email: string; password: string }) => {
    try {
      let data = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/auth/signup`,
        params
      );
      return data;
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  }
);
export const SignSlice = createSlice({
  name: "Signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignupFunc.fulfilled, (state, action) => {
      let userSignupData = {
        token: action.payload.data.token,
        userData: action.payload.data.data.result,
      };
      state.user = userSignupData;
      state.loading = false;
      toast.success("Sign up successfully");
      typeof window !== "undefined" &&
        localStorage.setItem("LoggedUser", JSON.stringify(userSignupData));
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    });
    builder.addCase(SignupFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(SignupFunc.rejected, (state, action) => {
      state.error = toast.error(action.error.message || "error occured");
      state.loading = false;
    });
  },
});
export default SignSlice.reducer;
