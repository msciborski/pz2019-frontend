export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    console.log('Auth header:', user.token.tokenKey);
    return { 'X-AUTH-TOKEN': user.token.tokenKey };
  } else {
    return {};
  }
}