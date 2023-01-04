import axios from "axios";
import state from "./plpState.js";

export const getProducts = async (checked) => {
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

export const getProducts2 = async (checked) => {
    const response = await axios.get(
        "https://rachelhepsan.github.io/ProductDetails/data.json"
    );

    if (checked.length) {
        response.data.forEach(product => {
            Object.values(checked).forEach(element => {
                console.log(product.category.toLowerCase(), element);
                if (product.category.toLowerCase() === element) {
                    state.results.push(product);
                }
            })
        })
    } else {
        state.results = response.data;
    }
};


export const getProducts3 = async (checked) => {
    const response = await axios.get(
        "https://rachelhepsan.github.io/ProductDetails/data.json"
    );

    if (checked.length) {
        response.data.forEach(product => {
            Object.values(checked).forEach(element => {
                if (!(element.includes("-"))) {
                    if (element == 100) {
                        if (+(product.price) <= +element) {
                            state.results.push(product);
                        }
                    } else {
                        if (+(product.price) >= +element) {
                            state.results.push(product);
                        }
                    }
                } else {
                    let num = element.split("-");
                    console.log(num);
                    if((+(product.price) >= num[0])  && (+(product.price) <= num[1])) {
                        state.results.push(product);
                    }
                }
            })
        })
    } else {
        state.results = response.data;
    }
};



