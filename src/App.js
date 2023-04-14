import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { route } from './views/constants/index';
import AdminPage from './views/backend/AdminPage';
import CategoryListPage from './views/backend/components/category/CategoryListPage';
import BrandListPage from './views/backend/components/brand/BrandListPage';
import CustomerListPage from './views/backend/components/customer/CustomerListPage';
import AddCategory from './views/backend/components/category/AddCategory';
import EditCategory from './views/backend/components/category/EditCategory';
import AddBrand from './views/backend/components/brand/AddBrand';
import EditBrand from './views/backend/components/brand/EditBrand';
import AddCustomer from './views/backend/components/customer/AddCustomer';
import EditCustomer from './views/backend/components/customer/EditCustomer';
import ProductListPage from './views/backend/components/product/ProductListPage';
import AddProduct from './views/backend/components/product/AddProduct';
import EditProduct from './views/backend/components/product/EditProduct';
import DetailProduct from './views/backend/components/product/DetailProduct';
import { Home, Basket, Error, Login, Account, Search, ViewProductList, ViewProductSingle, ViewCategoryProductList, ViewBrandProductList } from "./views/frontend/views/index";
import { Navbar, Footer } from "./views/frontend/components/common/index";
import { useAuthContext } from './views/frontend/context/authContext';
import ProtectedRoute from './views/frontend/routers/ProtectedRoute';


function App() {
  const { authData } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter basename='Home'>
        <Navbar />
        <Routes path={'/'}>
          {/* Public routes */}
          <Route path={route.HOME} element={<Home />} />
          <Route path={route.HOME_ALT} element={<Home />} />
          <Route path={route.ERROR} element={<Error />} />
          <Route path={route.LOGIN} element={<Login />} />
          <Route path={route.SINGLE_PRODUCT + ":id"} element={<ViewProductSingle />} />
          <Route path={route.CATEGORY_PRODUCTS + ":categoryKey"} element={<ViewCategoryProductList />} />
          <Route path={route.ACCOUNT} element={<Account />} />
          <Route path={route.SEARCH_PRODUCT + ":searchKey"} element={<Search />} />
          <Route path="*" element={<Error />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute authData={authData} />}>
            <Route path={route.BASKET} element={<Basket />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <BrowserRouter basename='Admin'>
        <AdminPage />
        <Routes path={'/'}>
          <Route path={route.CATEGORY_LIST} element={<CategoryListPage />}></Route>
          <Route path={route.ADD_CATEGORY} element={<AddCategory />}></Route>
          <Route path={route.EDIT_CATEGORY + ':id'} element={<EditCategory />}></Route>
          <Route path={route.BRAND_LIST} element={<BrandListPage />}></Route>
          <Route path={route.ADD_BRAND} element={<AddBrand />}></Route>
          <Route path={route.EDIT_BRAND + ':id'} element={<EditBrand />}></Route>
          <Route path={route.CUSTOMER_LIST} element={<CustomerListPage />}></Route>
          <Route path={route.ADD_CUSTOMER} element={<AddCustomer />}></Route>
          <Route path={route.EDIT_CUSTOMER + ':id'} element={<EditCustomer />}></Route>
          <Route path={route.PRODUCT_LIST} element={<ProductListPage />}></Route>
          <Route path={route.ADD_PRODUCT} element={<AddProduct />}></Route>
          <Route path={route.EDIT_PRODUCT + ':id'} element={<EditProduct />}></Route>
          <Route path={route.DETAIL_PRODUCT + ':id'} element={<DetailProduct />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
