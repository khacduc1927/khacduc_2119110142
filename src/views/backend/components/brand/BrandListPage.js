import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { left } from "@popperjs/core";
import { route } from '../../../constants/index';
import './BrandListPage.css';

function BrandListPage() {
    const [brands, setBrands] = useState([]);

    function loadBrands() {
        axios.get("http://localhost:8080/api/v1/NhanHieu").then((res) => {
            setBrands(res.data.reverse());
        });
    }

    useEffect(() => {
        loadBrands();
    }, []);

    function deleteBrands(id) {
        axios.delete(`http://localhost:8080/api/v1/NhanHieu/${id}`).then(loadBrands(route.BRAND_LIST));
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Quản Lý Nhãn Hiệu</h2>
            <div style={{ textAlign: left, marginTop: 20, marginLeft: 315, textDecoration: 'underline black' }}>
                <Link
                    to={route.ADD_BRAND}
                >Thêm Mới Nhãn Hiệu</Link>
            </div>
            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên Nhãn Hiệu</th>
                            <th>Mô Tả</th>
                            <th>Tình Trạng</th>
                            <th>Thùng Rác</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.tenNhanHieu}</td>
                                <td>{data.moTa}</td>
                                <td>{data.tinhTrang}</td>
                                <td>{data.thungRac}</td>
                                <td>
                                    <Link
                                        onClick={() => deleteBrands(data.id)}
                                    ><button>Xóa</button></Link>
                                    <Link
                                        to={route.EDIT_BRAND + data.id}
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

export default BrandListPage;
