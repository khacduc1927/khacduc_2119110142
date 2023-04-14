import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from '../../../constants/index';
import { Button, Form, FormGroup } from 'react-bootstrap';

function AddProduct() {
    const [tenSanPham, setTenSanPham] = useState("");
    const [moTaNgan, setMoTaNgan] = useState("");
    const [moTaChiTiet, setMoTaChiTiet] = useState("");
    const [hinhAnh, setHinhAnh] = useState("");
    const [soLuong, setSoLuong] = useState("");
    const [giaBan, setGiaBan] = useState("");
    const [giaBanKhuyenMai, setGiaBanKhuyenMai] = useState("");
    const [maDanhMuc, setMaDanhMuc] = useState("");
    const [maNhanHieu, setMaNhanHieu] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");

    const navigate = useNavigate();
    const data = {
        tenSanPham: tenSanPham,
        moTaNgan: moTaNgan,
        moTaChiTiet: moTaChiTiet,
        hinhAnh: hinhAnh,
        soLuong: soLuong,
        giaBan: giaBan,
        giaBanKhuyenMai: giaBanKhuyenMai,
        maDanhMuc: maDanhMuc,
        maNhanHieu: maNhanHieu,
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };

    function submitForm(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/SanPham", data).then(navigate(route.PRODUCT_LIST));
    }
    return (
        <div>
            <div><h2>Thêm Mới Sản Phẩm</h2></div>
            <div className="container" style={{ width: 800 }}>
                <Form>
                    <Form.Group className="mb-3">
                        <label>Tên Sản Phẩm</label>
                        <Form.Control type="text" placeholder="Tên sản phẩm" value={tenSanPham} onChange={(e) => setTenSanPham(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Mô Tả Ngắn</label>
                        <Form.Control type="text" placeholder="Mô tả ngắn" value={moTaNgan} onChange={(e) => setMoTaNgan(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Mô Tả Chi Tiết</label>
                        <Form.Control as="textarea" rows={3} placeholder="Mô tả chi tiết" value={moTaChiTiet} onChange={(e) => setMoTaChiTiet(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Hình Ảnh</label>
                        <Form.Control type="text" placeholder="Hình ảnh" value={hinhAnh} onChange={(e) => setHinhAnh(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Số Lượng</label>
                        <Form.Control type="number" placeholder="Số lượng" value={soLuong} onChange={(e) => setSoLuong(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Giá Bán</label>
                        <Form.Control type="number" placeholder="Giá bán" value={giaBan} onChange={(e) => setGiaBan(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Giá Bán Khuyến Mãi</label>
                        <Form.Control type="number" placeholder="Giá bán khuyến mãi" value={giaBanKhuyenMai} onChange={(e) => setGiaBanKhuyenMai(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Mã Danh Mục</label>
                        <Form.Control type="number" placeholder="Mã danh mục" value={maDanhMuc} onChange={(e) => setMaDanhMuc(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Mã Nhãn Hiệu</label>
                        <Form.Control type="number" placeholder="Mã nhãn hiệu" value={maNhanHieu} onChange={(e) => setMaNhanHieu(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <FormGroup>
                        <label>Tình Trạng: </label>
                        <Form.Select aria-label="Default select example" size="1g" value={tinhTrang} onChange={(e) => setTinhTrang(e.target.value)}>
                            <option value="0">True</option>
                            <option value="1">False</option>
                        </Form.Select>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <label>Thùng Rác: </label>
                        <Form.Select aria-label="Default select example" size="1g" value={thungRac} onChange={(e) => setThungRac(e.target.value)}>
                            <option value="0">True</option>
                            <option value="1">False</option>
                        </Form.Select>
                    </FormGroup>
                    <br></br>
                    <Button type="submit" onClick={submitForm}>Thêm mới</Button>
                </Form>
            </div>
        </div>
    );
}

export default AddProduct;
