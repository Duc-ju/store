import userApi from '../api/userApi';
import jwt_decode from 'jwt-decode';
import userSlice from '../redux/userSlice';
const useLogin = async (data, dispatch, navigate) => {
  dispatch(userSlice.actions.loginStart());
  try {
    const userAuthen = await userApi.login(data);
    if (userAuthen.access) {
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          access: userAuthen.access,
          refresh: userAuthen.refresh,
        })
      );
      const tokenInfo = jwt_decode(userAuthen.access);
      const userInfo = await userApi.getInfo(tokenInfo.user_id);
      const user = {
        ...userInfo,
        ...userAuthen,
      };
      console.log(user);
      window.localStorage.setItem('user', JSON.stringify(user));
      dispatch(userSlice.actions.loginSuccess(user));
      navigate('/');
    } else {
      dispatch(
        userSlice.actions.loginFailure(
          'Tài khoản hoặc mật khẩu không chính xác'
        )
      );
    }
  } catch (e) {
    dispatch(userSlice.actions.loginFailure('Đăng nhập thất bại'));
  }
};
export default useLogin;
