import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { route } from '../../../constants/index';
import { Button, Form, FormGroup } from 'react-bootstrap';

function EditCustomer() {
    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [hoTen, setHoTen] = useState("");
    const [email, setEmail] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");

    const navigate = useNavigate();

    const data = {
        taiKhoan: taiKhoan,
        matKhau: matKhau,
        hoTen: hoTen,
        email: email,
        soDienThoai: soDienThoai,
        diaChi: diaChi,
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/KhachHang/${id}`).then((res) => {
            setTaiKhoan(res.data.taiKhoan);
            setMatKhau(res.data.matKhau);
            setHoTen(res.data.hoTen);
            setEmail(res.data.email);
            setSoDienThoai(res.data.soDienThoai);
            setDiaChi(res.data.diaChi);
            setThungRac(res.data.thungRac);
            setTinhTrang(res.data.tinhTrang)
        });
    }, []);

    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/v1/KhachHang/${id}`, data).then(navigate(route.CUSTOMER_LIST));
    }
    return (
        <div>
            <div><h2>Thêm Mới Khách Hàng</h2></div>
            <div className="container" style={{ width: 800 }}>
                <Form>
                    <Form.Group className="mb-3">
                        <label>Tài Khoản</label>
                        <Form.Control type="text" placeholder="Tài khoản" value={taiKhoan} onChange={(e) => setTaiKhoan(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Mật Khẩu</label>
                        <Form.Control type="password" placeholder="password" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Họ Tên</label>
                        <Form.Control type="text" placeholder="Họ tên" value={hoTen} onChange={(e) => setHoTen(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Email</label>
                        <Form.Control type="text" placeholder="email@" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Số Điện Thoại</label>
                        <Form.Control type="text" placeholder="Số điện thoại" value={soDienThoai} onChange={(e) => setSoDienThoai(e.target.value)} />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3">
                        <label>Địa Chỉ</label>
                        <Form.Control type="text" placeholder="Địa chỉ" value={diaChi} onChange={(e) => setDiaChi(e.target.value)} />
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
                    <Button type="submit" onClick={Update}>Cập Nhật</Button>
                </Form>
            </div>
        </div>
    );
}

export default EditCustomer;
