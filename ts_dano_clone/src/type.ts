export interface User {
    username: string;
    name: string;
    email: string;
    phone: string;
}

export interface UserInfo {
    user: null | User;
    isLogin: boolean;
}
