import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import axios from 'axios';
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie';
import { config } from '../../config';

interface User {
    username: string;
    name: string;
    email: string;
    phone: string;
}

// 액션
const GET_USER = 'GET_USER';
const LOG_OUT = 'LOG_OUT';

// 액션 생성 함수
const getUser = createAction(GET_USER, (user: User) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));

const inititalState: { user: null; isLogin: boolean } = {
    user: null,
    isLogin: false,
};

// 회원정보 조회
const getUserDB = () => {
    return function (dispatch: any) {
        // 토큰 값 조회
        const jwtToken = getCookie('is_login');
        const Authorization = 'Authorization';
        // 새로고침 하면 헤더 default 날라가므로 다시 헤더에 토큰을 담아줌
        axios.defaults.headers.common[Authorization] = `Bearer ${jwtToken}`;
        axios({
            method: 'get',
            url: `${config.api}/api/user`,
        })
            .then((res) => {
                // 받은 유저 정보 저장
                dispatch(
                    getUser({
                        username: res.data.userName,
                        name: res.data.nickName,
                        email: res.data.email,
                        phone: res.data.phone,
                    }),
                );
            })
            .catch((e) => {
                console.log('에러발생', e);
            });
    };
};

// 로그인
const LoginDB = (userId: string, password: string) => {
    return function (dispatch: any, getState: any, { history }: any) {
        axios({
            method: 'post',
            url: `${config.api}/api/user/login`,
            data: {
                userName: userId,
                password,
            },
        }).then((res) => {
            const jwtToken = res.data;
            // 받은 토큰을 쿠키에 저장
            setCookie('is_login', jwtToken);
            // 통신 시 헤더에 default로 저장
            const Authorization = 'Authorization';
            axios.defaults.headers.common[Authorization] = `Bearer ${jwtToken}`;
            // 로그인 후 회원 정보를 스토어에 최신화
            dispatch(getUserDB());
            history.push('/');
        });
    };
};

// 회원가입
const SignupDB = (userName: string, password: string, nickName: string, email: string, phone: string) => {
    return function (dispatch: any, getState: any, { history }: any): void {
        // 회원 가입 시 작성한 유저 정보를 서버에 보내줌
        axios({
            method: 'post',
            url: `${config.api}/api/user/signup`,
            data: {
                userName,
                password,
                nickName,
                email,
                phone,
            },
        })
            .then(() => {
                // 전송 후 로그인 페이지로 이동
                history.push('/user/login');
            })
            .catch((e) => {
                window.alert(e.response.data);
                console.log('에러 발생:', e);
            });
    };
};

// 리듀서
// redux-actions와 immer를 사용
// user: 유저 정보, is_login: 로그인 상태
// 비슷한 코드라 2개에 액션으로 처리해도 되지만 logger에서 액션 타입만 보고 이해할 수 있게 나눔
export default handleActions(
    {
        [GET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.isLogin = true;
            }),
        [LOG_OUT]: (state) =>
            produce(state, (draft) => {
                // 로그 아웃 시 쿠키에 담긴 토큰 삭제, 회원정보 비워줌, 로그인 여부 false
                deleteCookie('is_login');
                draft.user = null;
                draft.isLogin = false;
            }),
    },
    inititalState,
);

const actionCreators = {
    SignupDB,
    LoginDB,
    getUserDB,
    logOut,
};

export { actionCreators };
