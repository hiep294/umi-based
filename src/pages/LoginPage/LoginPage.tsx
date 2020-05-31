import React, { useEffect } from 'react';
import { useHistory, useDispatch } from 'umi';
import Cookies from 'js-cookie';
import { Card } from 'antd';
import LoginForm from './Form';
import styles from './style.less';

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  // useSelect

  useEffect(() => {
    if (Cookies.get('token')) {
      history.push('/');
    }
  }, []);

  const handleSubmit = (payload: any) => {
    dispatch({ type: 'authentication/login', payload, history });
  };

  return (
    <div className={styles.loginContainer}>
      <Card bordered className={styles.loginForm}>
        <LoginForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
}
