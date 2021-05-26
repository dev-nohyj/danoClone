import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Item from '../components/Item';
import Spinner from '../shared/Spinner';
import { actionCreators as productActions } from '../redux/modules/product';
import { RootState } from '../redux/configureStore';

// 알뜰 상품 페이지

function Cheapproducts(props: { history: any }) {
    const { history } = props;
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.thriftyList);
    const loading = useSelector((state: RootState) => state.product.isLoading);
    useEffect(() => {
        if (products.length === 0) {
            dispatch(productActions.getThriftyDB());
        }
    }, []);

    return (
        <>
            <Header />
            <Banner src="https://danoshop.net/mall/upload/2020/12/11/201125_W_category_%EC%95%8C%EB%9C%B0%EC%83%81%ED%92%88_1.png" />
            {loading ? (
                <Spinner />
            ) : (
                <Container text="알뜰상품">
                    {products.map((val) => {
                        return (
                            <div
                                key={val.productId}
                                onClick={() => {
                                    history.push(`/detail/product/${val.productId}`);
                                    window.scrollTo({ top: 0, left: 0 });
                                }}
                            >
                                <Item key={val.productId} {...val} />
                            </div>
                        );
                    })}
                </Container>
            )}
            <Footer />
        </>
    );
}

export default Cheapproducts;
