import { createAsyncThunk } from "@reduxjs/toolkit";
import { SNEACERS_DATA_URL } from "../../../API/URL";
import { UseRequest } from "../../../hook/UseRequest";


export const fetchSneakers = createAsyncThunk("sneakersData/fetchSneakers" , async () => {
    const {getRequest} = UseRequest()
    const result = await getRequest(SNEACERS_DATA_URL)

    return result
})