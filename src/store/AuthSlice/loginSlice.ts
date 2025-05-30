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
export const loginFunc: AsyncThunk<
  AxiosResponse<any, any>,
  {
    email: string;
    password: string;
  },
  AsyncThunkConfig
> = createAsyncThunk(
  "login/loginFunc",
  async (params: { email: string; password: string }) => {
    try {
      let data = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/auth/login`,
        params
      );
      return data;
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
        token: "",
        userData: {
          _id: "",
          username: "",
          email: "",
          photo: "",
          location: "",
        },
      };
      typeof window !== "undefined" && localStorage.removeItem("LoggedUser");
      window.location.href = "/";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginFunc.fulfilled, (state, action) => {
      let userLoggedInData = {
        token: action.payload.data.token,
        userData: action.payload.data.data.result,
      };
      state.user = userLoggedInData;
      state.loading = false;
      toast.success("logged in successfully");
      typeof window !== "undefined" &&
        localStorage.setItem("LoggedUser", JSON.stringify(userLoggedInData));
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 1500);
    });
    builder.addCase(loginFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginFunc.rejected, (state, action) => {
      state.error = toast.error(action.error.message || "error occured");
      state.loading = false;
    });
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
