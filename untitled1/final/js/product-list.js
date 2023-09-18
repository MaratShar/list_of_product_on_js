const productList = [
  {
    productId: 1,
    name: "Помидоры 500г",
    price: 100
  },
  {
    productId: 2,
    name: "Лук 1кг",
    price: 100
  },
  {
    productId: 3,
    name: "Огурцы 500г",
    price: 100
  },
  {
    productId: 4,
    name: "Говядина 1кг",
    price: 100
  }
]

const getProductById = function (id) {
  console.log(id)
  const item = productList.filter(el => el.productId == id)
  return item ? item[0] : null
}