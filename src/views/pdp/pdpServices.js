import axios from "axios";
import state from "./pdpState.js";

export const getProducts = async (parameter) => {
    const response = await axios("https://rachelhepsan.github.io/ProductDetails/data.json")
    // const response = await axios("../../src/assets/data.json")
    response.data.forEach(element => {
        if(+element.id === +parameter){
            state.results=element
            console.log(state.results.images[0])
        }
    });

};
