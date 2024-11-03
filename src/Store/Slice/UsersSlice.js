import { createSlice } from "@reduxjs/toolkit";

const first_user = {
  id: "1",
  first_name: "ayat",
  last_name: "kalybekova",
  email: "kalybekovaat@gmail.com",
  password: "123456789",
  phone: "+997702046066",
  city: "biskek",
  address: "6мкр 30",
  postal_code: "111111",
  // avatar: "https://derecho2.unmsm.edu.pe/img/content/user.png",
};

const initialState = {
  users: [first_user],
  carrent_user: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.carrent_user = action?.payload;
    },
  },
});
export const { setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;
