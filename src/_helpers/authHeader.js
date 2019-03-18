export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { 'X-AUTH-TOKEN': user.token.tokenKey };
  } else {
    return {};
  }
}