import { actionType, route } from "../../constants/index";
import axios from "../api/axios";

export const getBrandsList = async (dispatch) => {
    dispatch({ type: actionType.BRAND_LIST_REQUEST });
    try {
        const { data } = await axios.get("http://localhost:8080/api/v1/NhanHieu");
        dispatch({ type: actionType.BRAND_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: actionType.BRAND_LIST_FAIL,
            payload: error.message
        });
    }
};

export const getBrandsProducts = async (dispatch, brandKey) => {
    dispatch({ type: actionType.BRAND_PRODUCT_REQUEST });
    try {
        const { data } = await axios.get("http://localhost:8080/api/v1/SanPham/NhanHieu/" + `${brandKey}`);
        dispatch({
            type: actionType.BRAND_PRODUCT_SUCCESS, payload: data
        });
    } catch (error) {
        dispatch({
            type: actionType.BRAND_PRODUCT_FAIL,
            payload: error.message
        });
    }
};
