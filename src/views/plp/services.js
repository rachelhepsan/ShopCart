import axios from "axios";
import state from "./plpState.js";

export const getProducts = async () => {
    const response = await axios.get(
        "../../src/assets/data.json"
    );
    state.results = response.data;
};