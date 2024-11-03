import { createSlice } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../components/pages/Customers/const";

const initialState = {
  data: CUSTOMERS,
  current_remove_item: null,
  current_edit_item: null,
  m_data: CUSTOMERS,
  visabile_customer_modal: false,
  visabile_remove_modal: false,
};

const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    searchHandler(state, action = initialState) {
      state.data = state.m_data.filter((item) =>
        item.full_name
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim())
      );
    },
    searchLocationHandler(state, action) {
      state.data = state.m_data.filter((item) =>
        !action.payload?.value
          ? item
          : item?.location?.toLowerCase()?.trim() ===
            action.payload?.value?.toLowerCase()?.trim()
      );
    },
    setData(state, action) {
      state.data = action.payload;
    },
    searchProductHandler(state, action) {
      state.data = state.m_data.filter((item) =>
        !action.payload?.value
          ? item
          : item?.type_product?.toLowerCase()?.trim() ===
            action.payload?.value?.toLowerCase()?.trim()
      );
    },
    filterBySpent(state, action) {
      state.data = state.m_data.filter((item) =>
        !action.payload?.value
          ? item
          : Number(item.spent) > Number(action.payload.value)
      );
    },

    visabileCustomerModel(state, action) {
      state.visabile_customer_modal = action.payload;
    },

    createHandler(state, action) {
      state.m_data = [action.payload, ...state.data];
      state.data = state.m_data;
      state.visabile_customer_modal = false;
    },

    visableRemoveModal(state, action) {
      state.visabile_remove_modal = action.payload;
    },
    setCurrentRemove(state, action) {
      state.current_remove_item = action.payload;
    },
    setCurrentEdit(state, action) {
      state.current_edit_item = action.payload;
    },
    customerRemove(state, action) {
      state.m_data = state.m_data.filter(
        (item) => item.id !== state.current_remove_item?.id
      );
      state.data = state.m_data;
      state.visabile_remove_modal = false;
      state.current_remove_item = null;
    },
    editCustomerHandler(state, action) {
      state.m_data = state.m_data.map((item) => {
        if (item?.id === action.payload.id) {
          item = action.payload;
        }
        return item;
      });
      state.data = state.m_data;
      state.current_edit_item = null;
      state.visabile_customer_modal = false;
    },
  },
});
export const {
  searchHandler,
  searchLocationHandler,
  searchProductHandler,
  filterBySpent,
  setData,
  visabileCustomerModel,
  createHandler,
  visableRemoveModal,
  setCurrentEdit,
  setCurrentRemove,
  customerRemove,
  editCustomerHandler,
} = customersSlice.actions;

export default customersSlice.reducer;
