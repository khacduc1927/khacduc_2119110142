import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { left } from "@popperjs/core";
import { route } from '../../../constants/index';
import './CategoryListPage.css';

function CategoryListPage() {
    const [categories, setCategories] = useState([]);

    function loadCategories() {
        axios.get("http://localhost:8080/api/v1/DanhMuc").then((res) => {
            setCategories(res.data.reverse());
        });
    }

    useEffect(() => {
        loadCategories();
    }, []);

    function deleteCategories(id) {
        axios.delete(`http://localhost:8080/api/v1/DanhMuc/${id}`).then(loadCategories());
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Quản Lý Danh Mục</h2>
            <div style={{ textAlign: left, marginTop: 20, marginLeft: 315, textDecoration: 'underline black' }}>
                <Link
                    to={route.ADD_CATEGORY}
                >Thêm Mới Danh Mục</Link>
            </div>
            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên Danh Mục</th>
                            <th>Mô Tả</th>
                            <th>Tình Trạng</th>
                            <th>Thùng Rác</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.tenDanhMuc}</td>
                                <td>{data.moTa}</td>
                                <td>{data.tinhTrang}</td>
                                <td>{data.thungRac}</td>
                                <td>
                                    <Link
                                        onClick={() => deleteCategories(data.id)}
                                    ><button>Xóa</button></Link>
                                    <Link
                                        to={route.EDIT_CATEGORY + data.id}
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

export default CategoryListPage;
