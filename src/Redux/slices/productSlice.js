import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/instance";



 // Function to load cart from localStorage
const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };
  
  // Function to save cart to localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };



export const getproduct = createAsyncThunk("product/getAllproduct", async () => {
    let data = await axiosInstance.get("https://dummyjson.com/products");
    return data.data.products;
})
const productSlice = createSlice({
    name: "product",
    initialState: {
        cart: loadCartFromLocalStorage(),
        products: [],
        loading: true,
        err: false
    },
    reducers: {
        addToCart: (state, action) => {
          
            const cartItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex === -1) {
                state.cart.push({ ...action.payload, quantity: 1 });
            } else {
               
                console.log("Item already exists in the cart");
                state.cart[cartItemIndex].quantity++;
            }   
            saveCartToLocalStorage(state.cart)
        },
        removeFromCart: (state, action) => {
            
            const cartItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex !== -1) {
                if (state.cart[cartItemIndex].quantity > 1) {
                   
                    state.cart[cartItemIndex].quantity--;
                    
                 
                   
                } else {
                   
                    state.cart.splice(cartItemIndex, 1);
                }
                saveCartToLocalStorage(state.cart)
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getproduct.pending, (state) => {
                console.log("pending")
            })
            .addCase(getproduct.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getproduct.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToCart ,removeFromCart} = productSlice.actions;

export default productSlice.reducer;
