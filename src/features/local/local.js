



export const setUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}