import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';
import { getCookie } from '../shared/Cookie';
import { actionCreators as userActions } from '../redux/modules/user';
import UserInfo from '../pages/UserInfo';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Prepare from '../pages/Prepare';
import Mypage from '../pages/Mypage';
import Allproducts from '../pages/Allproducts';
import DanoInfo from '../pages/DanoInfo';
import Popularproducts from '../pages/Popularproducts';
import Danoproducts from '../pages/Danoproducts';
import Newproducts from '../pages/Newproducts';
import Cheapproducts from '../pages/Cheapproducts';
import Freeproducts from '../pages/Freeproducts';
import DetailProduct from '../pages/DetailProduct';
import Order from '../pages/Order';
import Shopping from '../pages/Shopping';

function App() {
    const dispatch = useDispatch();
    const cookie = getCookie('is_login') ? true : false;
    // 쿠키 존재할때 리렌더링 시 회원정보 조회
    useEffect(() => {
        if (cookie) {
            dispatch(userActions.getUserDB());
        }
    }, []);
    return (
        <>
            <ConnectedRouter history={history}>
                <Route path="/" exact component={Main} />
                <Route path="/user/signup" exact component={Signup} />
                <Route path="/user/login" exact component={Login} />
                <Route path="/prepare" exact component={Prepare} />
                <Route path="/mypage" exact component={Mypage} />
                <Route path="/user/mypage/:id" exact component={UserInfo} />
                <Route path="/products/allproducts" exact component={Allproducts} />
                <Route path="/danoinfo" exact component={DanoInfo} />
                <Route path="/products/popularproducts" exact component={Popularproducts} />
                <Route path="/products/newproducts" exact component={Newproducts} />
                <Route path="/products/danoproducts" exact component={Danoproducts} />
                <Route path="/products/cheapproducts" exact component={Cheapproducts} />
                <Route path="/products/freeproducts" exact component={Freeproducts} />
                <Route path="/detail/product/:id" exact component={DetailProduct} />
                <Route path="/purchase" exact component={Order} />
                <Route path="/cart" exact component={Shopping} />
            </ConnectedRouter>
        </>
    );
}

export default App;
