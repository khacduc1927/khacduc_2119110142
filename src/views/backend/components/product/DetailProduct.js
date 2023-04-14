import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { left } from "@popperjs/core";
import { route } from '../../../constants/index';

function DetailProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/SanPham/${id}`).then((res) => {
            setProduct(res.data);
        });
    }, []);

    console.log(product);
    return (
        <div>
            <div><h2>Chỉnh Sửa Sản Phẩm</h2></div>
            <div style={{ textAlign: left, marginTop: 20, marginLeft: 315, textDecoration: 'underline black' }}>
                <Link
                    to={route.PRODUCT_LIST}
                >Trở về</Link>
            </div>
            <div className="container" style={{ width: 800, fontSize: 20 }}>
                <div style={{ marginTop: 10 }}>
                    <label>Tên Sản Phẩm : </label>
                    {product.tenSanPham}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Mô Tả Ngắn: </label>
                    {product.moTaNgan}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Mô Tả Chi Tiết : </label>
                    {product.moTaChiTiet}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Hình Ảnh : </label>
                    <img src={product.hinhAnh} style={{ width: 200 }} />
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Giá Bán : </label>
                    {product.giaBan} VNĐ
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Giá Bán Khuyến Mãi : </label>
                    {product.giaBanKhuyenMai} VNĐ
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Ngày Tạo : </label>
                    {product.ngayTao}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Người Tạo : </label>
                    {product.nguoiTao}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Ngày Cập Nhật : </label>
                    {product.ngayCapNhat}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Người Cập Nhật : </label>
                    {product.nguoiCapNhat}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Mã Danh Mục : </label>
                    {product.maDanhMuc}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Mã Nhãn Hiệu : </label>
                    {product.maNhanHieu}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Tình Trạng : </label>
                    {product.tinhTrang}
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>Thùng Rác: </label>
                    {product.thungRac}
                </div>

            </div>

            <div style={{ textAlign: left, marginTop: 20, marginLeft: 315, textDecoration: 'underline black' }}>
                <Link
                    to={route.PRODUCT_LIST}
                ><button>Cập Nhật</button></Link>
            </div>
        </div >
    );
}

export default DetailProduct;
