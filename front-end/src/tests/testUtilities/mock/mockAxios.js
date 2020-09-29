import mockLogin from './mockLogin';
import mockRegister from './mockRegister';
import mockProducts from './mockProducts';

const URL = 'http://localhost:3001';
const mockAxios = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === `${URL}/register`) { return Promise.resolve(mockRegister); }
    if (url === `${URL}/login`) { return Promise.resolve(mockLogin); }
    if (url === `${URL}/products`) { return Promise.resolve(mockProducts); }
    return Promise.resolve();
  },
});

export default mockAxios;
