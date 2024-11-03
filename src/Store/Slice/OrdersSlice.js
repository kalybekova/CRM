import { createSlice } from "@reduxjs/toolkit";
import { order_list, TABS_LIST } from "../../components/pages/Orders/Const";

const initialState = {
  data: order_list?.map((item) => ({ ...item, checked: false })),
  tabs_list: TABS_LIST,
  remove_count: false,
  remove_modal_visable: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    checkedForRemove(state, action) {
      state.data = state.data.map((item) =>
        item?.id === action?.payload.id ? { ...item, checked: true } : item
      );
    },

    removeOrder(state, action = initialState) {
      const sendData = state.data.filter((item) => !item.checked);
      state.remove_count = sendData.length === state.data.length ? true : false;
      if (state.remove_count) {
        alert("Ордер танданыз!");
        state.remove_modal_visable = false;
        return;
      }
      state.data = sendData;
      state.remove_modal_visable = false;
    },

    searchByTitle(state, action = initialState) {
      state.data = order_list.filter((item) =>
        item.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim())
      );
    },

    searchByStatus(state, action = initialState) {
      state.data = order_list.filter((item) =>
        action.payload === "all"
          ? item
          : item.status.toLowerCase() === action.payload.toLowerCase()
      );
    },

    searchByPayment(state, action = initialState) {
      state.data = order_list.filter((item) =>
        !action.payload?.value
          ? item
          : item?.payment_status?.toLowerCase()?.trim() ===
            action.payload?.value?.toLowerCase()?.trim()
      );
    },

    visableRemoveModal(state, action = initialState) {
      state.remove_modal_visable = action.payload;
    },

    tabHandler(state, action) {
      state.tabs_list = state.tabs_list?.map((tab) =>
        tab?.id === action.payload
          ? { ...tab, active: true }
          : { ...tab, active: false }
      );
    },

    setData(state, action) {
      state.data = action.payload;
    },
  },
});
export const {
  checkedForRemove,
  removeOrder,
  searchByTitle,
  searchByStatus,
  searchByPayment,
  visableRemoveModal,
  tabHandler,
  setData,
} = ordersSlice.actions;

export default ordersSlice.reducer;
