import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ProductList, Title } from '../../components/common';
import { useBrandContext } from '../../context/brandContext';

const BrandProductListPage = () => {
    const { brandKey } = useParams();
    const { getBrandsProducts, brandProducts, dispatch } = useBrandContext();

    useEffect(() => {
        getBrandsProducts(dispatch, brandKey);
        // eslint-disable-next-line
    }, [brandKey])

    return (
        <main className='bg-secondary'>
            <div className='container'>
                <div className='sc-wrapper py-5'>
                    <Title title={brandKey} />
                    <ProductList products={brandProducts} />
                </div>
            </div>
        </main>
    )
}

export default BrandProductListPage