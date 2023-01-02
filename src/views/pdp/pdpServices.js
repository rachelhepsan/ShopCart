import axios from "axios";
import state from "./pdpState.js";

export const getProducts = async (parameter) => {
    const response = await axios.get("../../src/assets/data.json");
    response.data.forEach(element => {
        if(+element.id === +parameter){
            state.results=element
        }
    });

};
