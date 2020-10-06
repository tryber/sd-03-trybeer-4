import {
  cleanup,
} from '@testing-library/react';
import {
  getProductsLocalStorage, addProductToLocalStorage,
} from '../utils/localStorage';
import mockProducts from './testUtilities/mock/mockProducts';

describe('LocalStorage test functions', () => {
  afterEach(() => cleanup());
  test('addProductToLocalStorage should do a new key in the localStorage with product data', async () => {
    addProductToLocalStorage(mockProducts);
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual(mockProducts);
  });
  test('getProductsLocalStorage should take localStorage products data', async () => {
    addProductToLocalStorage(mockProducts);
    const products = getProductsLocalStorage('cart');
    expect(products).toEqual(mockProducts);
  });
});
