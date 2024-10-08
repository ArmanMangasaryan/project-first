import { createAsyncThunk } from "@reduxjs/toolkit";

import { UseRequest } from "../../../hook/UseRequest";
import { ACCESSORIES_DATA_URL } from "../../../API/URL";


export const fetchAccessories = createAsyncThunk("accessoriesData/fetchAccessories" , async () => {
    const {getRequest} = UseRequest()
    const result = await getRequest(ACCESSORIES_DATA_URL)

    return result
})