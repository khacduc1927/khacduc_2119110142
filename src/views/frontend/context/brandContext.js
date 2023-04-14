import React, { createContext, useContext, useEffect, useReducer } from "react";
import rootReducer from "../reducers";
import { getBrandsList, getBrandsProducts } from "../actions/brandActions";

const initialState = {
    brandLoading: false,
    brandError: false,
    brandErrorMsg: "",
    brands: [],
    brandProductLoading: false,
    brandProductError: false,
    brandProducts: []
}

const brandContext = createContext({});

export const BrandProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer.brand, initialState);

    useEffect(() => {
        getBrandsList(dispatch);
    }, [dispatch]);


    return (
        <brandContext.Provider value={{
            ...state,
            getBrandsList,
            getBrandsProducts,
            dispatch
        }}>
            {children}
        </brandContext.Provider>
    )
}

export const useBrandContext = () => {
    return useContext(brandContext);
}