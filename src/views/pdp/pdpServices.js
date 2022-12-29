import axios from "axios";
import state from "./pdpState.js";

export const getProducts = async () => {
    const response = await axios.get("../../src/assets/data.json");
    state.results = response.data;
    
};
