const renderProductOption = function (productListItem) {
  return `<option value="${productListItem.productId}">${productListItem.name}</option>`
}
const renderProductListOptions = function (productList) {
  return productList.map(productListItem => renderProductOption(productListItem)).reduce((a, b) => `${a}${b}`)
}

const renderFormPrice = function () {
  let { count, productId } = getFormData()
  
  if (!count && productId)
    count = 0
  
  if (count == null || !productId)
    return
  
  const product = getProductById(productId)
  document.getElementById("price-input").value = product.price * count
}

const productInputChanged = function () {
  renderFormPrice()
}

const countInputChanged = function () {
  renderFormPrice()
}

const getFormData = function () {
  return {
    productId: document.getElementById('product-input').value,
    count: document.getElementById('product-count-input').value
  }
}

const initForm = function () {
  const productInput = document.getElementById("product-input")
  const countInput = document.getElementById("product-count-input")
  productInput.addEventListener("change",event => productInputChanged())
  countInput.addEventListener("input",event => countInputChanged())
  productInput.innerHTML = renderProductListOptions(productList)
}