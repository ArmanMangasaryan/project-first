import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLOTHINGS_DATA_URL } from "../../../API/URL";

export const fetchClouthing = createAsyncThunk("clouthing/fetchClouthing", async () => {
  const result = await fetch(CLOTHINGS_DATA_URL);
  const jsonResult = await result.json();

  return jsonResult;
});
