import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { left } from "@popperjs/core";
import { route } from '../../../constants/index';
import './ProductListPage.css';

function ProductListPage() {
    const [product, setProduct] = useState([]);

    function loadProduct() {
        axios.get("http://localhost:8080/api/v1/SanPham").then((res) => {
            setProduct(res.data.reverse());
        });
    }

    useEffect(() => {
        loadProduct();
    }, []);

    function deleteProduct(id) {
        axios.delete(`http://localhost:8080/api/v1/SanPham/${id}`).then(route.PRODUCT_LIST);
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Quản Lý Sản Phẩm</h2>
            <div style={{ textAlign: left, marginTop: 20, marginLeft: 315, textDecoration: 'underline black' }}>
                <Link
                    to={route.ADD_PRODUCT}
                >Thêm Mới Sản Phẩm</Link>
            </div>
            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên SP</th>
                            <th>Số Lượng</th>
                            <th>Giá Bán</th>
                            <th>Giá Bán KM</th>
                            <th>Mã Danh Mục</th>
                            <th>Mã Nhãn Hiệu</th>
                            <th>Tình Trạng</th>
                            <th>Thùng Rác</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.tenSanPham}</td>
                                <td>{data.soLuong}</td>
                                <td>{data.giaBan}</td>
                                <td>{data.giaBanKhuyenMai}</td>
                                <td>{data.maDanhMuc}</td>
                                <td>{data.maNhanHieu}</td>
                                <td>{data.tinhTrang}</td>
                                <td>{data.thungRac}</td>
                                <td>
                                    <Link
                                        to={route.DETAIL_PRODUCT + data.id}
                                    ><button>Xem</button></Link>
                                    <Link
                                        onClick={() => deleteProduct(data.id)}
                                    ><button>Xóa</button></Link>
                                    <Link
                                        to={route.EDIT_PRODUCT + data.id}
                                    ><button>Sửa</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductListPage;
