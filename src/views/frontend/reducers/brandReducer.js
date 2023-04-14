import { actionType } from "../../constants";

const brandReducer = (state, action) => {
    switch (action.type) {
        case actionType.BRAND_LIST_REQUEST:
            return {
                ...state,
                brandLoading: true,
                brandError: false
            }
        case actionType.BRAND_LIST_SUCCESS:
            return {
                ...state,
                brandLoading: false,
                brandError: false,
                categories: action.payload
            }
        case actionType.BRAND_LIST_FAIL:
            return {
                ...state,
                brandLoading: false,
                brandError: true,
                brandErrorMsg: action.payload
            }
        case actionType.BRAND_PRODUCT_REQUEST:
            return {
                ...state,
                brandProductLoading: true,
                brandProductError: false
            }
        case actionType.BRAND_PRODUCT_SUCCESS:
            return {
                ...state,
                brandProductLoading: false,
                brandProductError: false,
                brandProducts: action.payload
            }
        case actionType.BRAND_PRODUCT_FAIL:
            return {
                ...state,
                brandProductLoading: false,
                brandProductError: true,
                brandProducts: action.payload
            }
        default:
            return state;
    }
}

export default brandReducer;