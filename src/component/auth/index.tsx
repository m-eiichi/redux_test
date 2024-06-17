import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../ducks/auth/slises";
import {RootState} from "../../ducks/store";

export const Auth = () => {
  const isAuth = useSelector((state:RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className="auth-container">
      {!isAuth && (
        <button className="auth-login auth-btn" onClick={loginHandler}>
          Login
        </button>
      )}
      {isAuth && (
        <button className="auth-logout auth-btn" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </div>
  );
};
