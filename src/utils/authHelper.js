export const login = (username, password) => {
    // В реальном приложении здесь должна быть проверка через API
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('isLoggedIn');
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };