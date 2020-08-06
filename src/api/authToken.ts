import Cookies from 'js-cookie';

export const isAuthenticated = !!Cookies.get('token');

export const setAuthToken = ({ token, isKeepToken = false }: ISetAuthToken) => {
  Cookies.set('token', token, { expires: isKeepToken ? 9999 : undefined });
};

export const setAuthRefreshToken = ({
  refreshToken,
  isKeepRefreshToken = false,
}: ISetAuthRefreshToken) => {
  Cookies.set('refreshToken', refreshToken, {
    expires: isKeepRefreshToken ? 9999 : undefined,
  });
};

export const token = Cookies.get('token');

export const removeAllTokens = () => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
};

interface ISetAuthToken {
  token: string;
  isKeepToken: boolean;
}

interface ISetAuthRefreshToken {
  refreshToken: string;
  isKeepRefreshToken: boolean;
}
