import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from '../../../constants/index';
import { Button, Form, FormGroup } from 'react-bootstrap';

function AddCategory() {
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

    function submitForm(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/DanhMuc", data).then(navigate(route.CATEGORY_LIST));
    }
    return (
        <div>
            <div><h2>Thêm Mới Danh Mục</h2></div>
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
                    <Button type="submit" onClick={submitForm}>Thêm mới</Button>
                </Form>
            </div>
        </div>
    );
}

export default AddCategory;
