export const addProductToLocalStorage = (product) => {
  const products = JSON.parse(localStorage.getItem('cart'));
  const newProductList = products.concat(product);
  localStorage.setItem('cart', JSON.stringify(newProductList));
  return null;
};

export const removeLocalStorage = (productName) => {
  const products = JSON.parse(localStorage.getItem('cart'));
  const newProductList = products.filter((element) => element.name !== productName);
  localStorage.setItem('cart', JSON.stringify(newProductList));
  return null;
};

export const updateProductInLocalStorage = (productName, quantity) => {
  const products = JSON.parse(localStorage.getItem('cart'));
  const newProductList = products.map((element) => {
    if (element.name === productName) return { ...element, quantity };
    return element;
  });
  localStorage.setItem('cart', JSON.stringify(newProductList));
  return null;
}
