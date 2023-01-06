import axios from "axios";
import state from "./pdpState.js";

//select a particular object from an array of objects thus obtaining the details of the clicked object
export const getProducts = async (parameter) => {
    const response = await axios("https://rachelhepsan.github.io/ProductDetails/data.json")
    response.data.forEach(element => {
        if(+element.id === +parameter){
            state.results=element
        }
    });

};
