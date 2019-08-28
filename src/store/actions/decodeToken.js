import jwtDecode from 'jwt-decode';

export default async (token) => {
  localStorage.setItem('token', token);
  const userDetails = await jwtDecode(token);
  const { data } = userDetails;
  return data;
}
