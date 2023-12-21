import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortedProductItem: [],
  productToSearch: [],
  productItem: [],
  status: "idle",
  categoryProduct: "",
};

export const productSlice = createSlice({
  name: "sortProduct",
  initialState,
  reducers: {
    sortByCategory: (state, action) => {
      const selectedCategory = action.payload;
      if (selectedCategory === "all category") {
        state.sortedProductItem = state.productItem;
      } else {
        state.sortedProductItem = state.productItem.filter((product) => product.category === selectedCategory);
      }
      state.productToSearch = state.sortedProductItem;
    },
    sortByButton: (state, action) => {
      const sortBy = action.payload;
      if (sortBy === "ascending") {
        state.sortedProductItem.sort((a, b) => (a.title > b.title ? 1 : -1));
      } else if (sortBy === "descending") {
        state.sortedProductItem.sort((a, b) => (a.title > b.title ? -1 : 1));
      } else if (sortBy === "lowest price") {
        state.sortedProductItem.sort((a, b) => a.price - b.price);
      } else if (sortBy === "highest price") {
        state.sortedProductItem.sort((a, b) => b.price - a.price);
      }
      state.productToSearch = state.sortedProductItem;
    },
    searchProduct: (state, action) => {
      const searchItem = action.payload;
      const filteredItems = state.productToSearch.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()));

      state.sortedProductItem = filteredItems;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProduct.fulfilled, (state, action) => {
      const dataProduct = action.payload;
      state.status = "succeed";
      state.productItem = dataProduct;
      state.sortedProductItem = dataProduct;
    });
  },
});

export const fetchDataProduct = createAsyncThunk("sortProduct/fetchDataProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const { sortByCategory, sortByButton, searchProduct } = productSlice.actions;
export default productSlice.reducer;

export const sortedProduct = (state) => state.sortProduct.sortedProductItem;
export const selectedCategory = (state) => state.sortProduct.categoryProduct;
