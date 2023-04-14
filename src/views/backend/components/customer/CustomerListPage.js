import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { left } from "@popperjs/core";
import { route } from '../../../constants/index';
import './CustomerListPage.css';

function CustomerListPage() {
    const [customer, setCustomer] = useState([]);

    function loadCustomer() {
        axios.get("http://localhost:8080/api/v1/KhachHang").then((res) => {
            setCustomer(res.data.reverse());
        });
    }

    useEffect(() => {
        loadCustomer();
    }, []);

    function deleteCustomer(id) {
        axios.delete(`http://localhost:8080/api/v1/KhachHang/${id}`).then(route.CUSTOMER_LIST);
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Quản Lý Khách Hàng</h2>
            <div style={{ textAlign: left, marginTop: 20, marginLeft: 315, textDecoration: 'underline black' }}>
                <Link
                    to={route.ADD_CUSTOMER}
                >Thêm Mới Khách Hàng</Link>
            </div>
            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Họ Tên</th>
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Tình Trạng</th>
                            <th>Thùng Rác</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.hoTen}</td>
                                <td>{data.taiKhoan}</td>
                                <td>{data.matKhau}</td>
                                <td>{data.email}</td>
                                <td>{data.soDienThoai}</td>
                                <td>{data.diaChi}</td>
                                <td>{data.tinhTrang}</td>
                                <td>{data.thungRac}</td>
                                <td>
                                    <Link
                                        onClick={() => deleteCustomer(data.id)}
                                    ><button>Xóa</button></Link>
                                    <Link
                                        to={route.EDIT_CUSTOMER + data.id}
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

export default CustomerListPage;
