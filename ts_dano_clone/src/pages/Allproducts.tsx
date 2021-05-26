import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { actionCreators as productActions } from '../redux/modules/product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Item from '../components/Item';
import Spinner from '../shared/Spinner';
import Container from '../components/Container';

function Allproducts(props: { history: any }) {
    const { history } = props;
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.list);
    const loading = useSelector((state: RootState) => state.product.isLoading);
    useEffect(() => {
        dispatch(productActions.getItemDB());
    }, []);

    return (
        <>
            <Header />
            <Banner src="https://danoshop.net/mall/upload/2020/12/11/201125_W_category_%EB%8B%A4%EB%85%B8%EC%A0%9C%ED%92%88_1.png" />
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Container text="전체보기">
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
                </>
            )}

            <Footer />
        </>
    );
}

export default Allproducts;
