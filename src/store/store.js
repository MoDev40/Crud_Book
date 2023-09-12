import {configureStore} from "@reduxjs/toolkit"
import bookSlice from "./features/bookSlice"
export const store = configureStore({
   reducer:{
    books:bookSlice
   }
}) 