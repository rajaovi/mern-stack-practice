// components/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header>
      {userInfo ? (
        <div>
          <span>Welcome, {userInfo.name}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </header>
  );
};

export default Header;