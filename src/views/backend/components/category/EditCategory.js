import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { route } from '../../../constants/index';
import { Button, Form, FormGroup } from 'react-bootstrap';

function EditCategory() {
    const [tenDanhMuc, setTenDanhMuc] = useState("");
    const [moTa, setMoTa] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");

    const navigate = useNavigate();
    const data = {
        tenDanhMuc: tenDanhMuc,
        moTa: moTa,
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/DanhMuc/${id}`).then((res) => {
            setTenDanhMuc(res.data.tenDanhMuc);
            setMoTa(res.data.moTa);
            setTinhTrang(res.data.tinhTrang);
            setThungRac(res.data.thungRac);
        });
    }, []);

    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/v1/DanhMuc/${id}`, data).then(navigate(route.CATEGORY_LIST));
    }
    return (
        <div>
            <div><h2>Chỉnh Sửa Danh Mục</h2></div>
            <div className="container" style={{ width: 800 }}>
                <Form>
                    <Form.Group className="mb-3">
                        <label>Tên Danh Mục</label>
                        <Form.Control type="text" placeholder="Tên nhãn hiệu" value={tenDanhMuc} onChange={(e) => setTenDanhMuc(e.target.value)} />
                    </Form.Group>
                    <br></br>

                    <Form.Group className="mb-3">
                        <label>Mô Tả</label>
                        <Form.Control as="textarea" rows={3} placeholder="Mô tả" value={moTa} onChange={(e) => setMoTa(e.target.value)} />
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

export default EditCategory;
