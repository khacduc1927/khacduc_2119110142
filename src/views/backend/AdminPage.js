import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { route } from '../constants/index';
import { Link } from 'react-router-dom';

export default function IconMenu() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 10 }} style={{ marginLeft: -1100 }}>
                            Admin
                        </Typography>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ float: 'left', width: '20%' }}>
                <Paper sx={{ width: 320, maxWidth: '100%' }}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <h3 style={{ fontSize: 20, marginTop: -2, marginBottom: -2 }}>Các Chức Năng</h3>
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem style={{ marginTop: -7, marginBottom: -7, backgroundColor: 'black' }}></MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link to={route.CATEGORY_LIST} style={{ fontSize: 17 }}>
                                    Quản Lý Danh Mục
                                </Link>
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText><Link to={route.BRAND_LIST} style={{ fontSize: 17 }}>
                                Quản Lý Nhãn Hiệu
                            </Link></ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText><Link to={route.PRODUCT_LIST} style={{ fontSize: 17 }}>
                                Quản Lý Sản Phẩm
                            </Link>    </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText><Link to={route.CUSTOMER_LIST} style={{ fontSize: 17 }}>
                                Quản Lý Khách Hàng
                            </Link></ListItemText>
                        </MenuItem>

                    </MenuList>
                </Paper>
            </div>
        </div >
    );
}