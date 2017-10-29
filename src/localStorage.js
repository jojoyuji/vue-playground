import localStorage from 'lockr';

localStorage.prefix = 'binds-co.';

localStorage.getToken = () => {
  return localStorage.get('authToken');
};

export default localStorage;
