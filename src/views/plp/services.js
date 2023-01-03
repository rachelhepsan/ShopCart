import axios from "axios";
import state from "./plpState.js";

export const getProducts = async () => {
    const response = await axios.get(
        "https://rachelhepsan.github.io/ProductDetails/data.json"
    );
    if (state.searchKey === "") {
        state.results = response.data;
    } else {
        response.data.forEach(element => {
            if (element.title.toLowerCase().startsWith(state.searchKey)) {
                state.results.push(element);
            }
        });
    }
};
