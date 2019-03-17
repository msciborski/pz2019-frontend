export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  if (user && user.token) {
    console.log(user.token.tokenKey)
    return { 'X-AUTH-TOKEN': user.token.tokenKey };
  } else {
    return {};
  }
}