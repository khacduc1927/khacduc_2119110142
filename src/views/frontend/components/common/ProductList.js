import React from 'react';
import "../../styles/ProductList.scss";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { route } from "../../../constants";
import { useFilterContext } from '../../context/filterContext';

const ProductList = ({ products }) => {
    const { grid_view } = useFilterContext();
    return (
        <div className="products">
            <div className="container">
                <div className={`product-list ${grid_view ? 'gridview' : 'listview'}`}>
                    {
                        products?.map(product => {
                            return (
                                <Link to={`${route.SINGLE_PRODUCT}${product?.id}`} className='product-item' key={product?.id}>
                                    <div className='product-item-img'>
                                        <img src={product?.hinhAnh} alt={product?.tenSanPham} className="img-cover" />
                                        <div className='product-discount'>{product?.giaBanKhuyenMai / product?.giaBan * 100}<span>%</span></div>
                                    </div>
                                    <div className='product-item-body'>
                                        <span className='product-title'>{product?.tenSanPham}</span>

                                        <div className='product-price'>
                                            <span className='fw-6 fs-16'>&nbsp;{product?.giaBanKhuyenMai} VNĐ</span>
                                        </div>

                                        <span className='product-title'>{product?.moTaNgan}</span>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default ProductList