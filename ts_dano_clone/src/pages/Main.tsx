import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import MainPageBanner from '../components/MainPageBanner';
import Container from '../components/Container';
import MiniItem from '../components/MiniItem';
import Item from '../components/Item';
import Item2 from '../components/Item2';
import Spinner from '../shared/Spinner';
import { actionCreators as productActions } from '../redux/modules/product';
import { RootState } from '../redux/configureStore';

function Main(props: { history: any }) {
    const { history } = props;
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.list);
    const bestProducts = useSelector((state: RootState) => state.product.bestList);
    const freeProducts = useSelector((state: RootState) => state.product.freeList);
    const loading = useSelector((state: RootState) => state.product.isLoading);

    useEffect(() => {
        dispatch(productActions.getItemDB());
        if (freeProducts.length === 0) {
            dispatch(productActions.getfreeDB());
        }
        if (bestProducts.length === 0) {
            dispatch(productActions.getBestDB());
        }
    }, []);

    const frontProducts = products.slice(47, 51);
    const useFulProducts = products.slice(22, 26);
    const lightFood = products.slice(88, 96);
    const bigSail = products.slice(42, 46);
    const snack = products.slice(104, 108);
    const popularProducts = bestProducts.slice(24, 40);
    const freeDelProducts = freeProducts.slice(8, 20);

    return (
        <>
            <Header />
            <Slider />
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <MiniContainer>
                        {frontProducts.map((val) => {
                            return (
                                <div
                                    key={val.productId}
                                    onClick={() => {
                                        history.push(`/detail/product/${val.productId}`);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }}
                                >
                                    <MiniItem key={val.productId} {...val} />
                                </div>
                            );
                        })}
                    </MiniContainer>

                    <Container text="이번주 베스트 인기상품" main>
                        {popularProducts.map((val) => {
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
                    <MainPageBanner src="https://danoshop.net/mall/upload/2021/03/19/0322_WMB_single.png" />

                    <Container text="후기로 검증된 제품들" main>
                        {useFulProducts.map((val) => {
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

                    <Container text="가볍지만 든든하게" main>
                        {lightFood.map((val) => {
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
                    <Container text="[대용량할인] 더 사면 더 싸다!" main>
                        {bigSail.map((val) => {
                            return (
                                <div
                                    key={val.productId}
                                    onClick={() => {
                                        history.push(`/detail/product/${val.productId}`);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }}
                                >
                                    <Item2 key={val.productId} {...val} />
                                </div>
                            );
                        })}
                    </Container>
                    <MainPageBanner src="https://danoshop.net/mall/upload/2021/04/02/0405_WMB_chai.png" />

                    <Container text="무료배송" main>
                        {freeDelProducts.map((val) => {
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
                    <Container text="입맛 달래주는 착한 간식" main>
                        {snack.map((val) => {
                            return (
                                <div
                                    key={val.productId}
                                    onClick={() => {
                                        history.push(`/detail/product/${val.productId}`);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }}
                                >
                                    <Item2 key={val.productId} {...val} />
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

const MiniContainer = styled.div`
    width: 1140px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default Main;
