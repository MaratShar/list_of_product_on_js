const checkList = [
]
const checkListId = "check-list"

const countFullPrice = function () {
  if (checkList.length == 0)
    return 0
  return checkList.map(el => {
    return getProductById(el.productId).price * el.count
  }).reduce((a, b) => {
    return a + b
  })
}

const renderFullPrice = function () {
  document.getElementById('full-price-label').innerText = countFullPrice().toString()
}

const renderCheckListItem = function (index, product, count, checkListItemId) {
  return `
    <tr id="check-list-item-${checkListItemId}">
      <th scope="row">${index + 1}</th>
      <td>${product.productId}</td>
      <td>${product.name}</td>
      <td>${count}</td>
      <td>${product.price * count}</td>
      <td>
        <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger" onclick="removeFromCheckList(${checkListItemId})"><i class="far fa-trash-alt"></i></button>
      </td>
    </tr>
  `;
}

const renderCheckList = function () {
  document.getElementById(checkListId).innerHTML = checkList.map((checkListItem, index) => {
    const product = getProductById(checkListItem.productId)
    const count = checkListItem.count
    return renderCheckListItem(index, product, count, checkListItem.checkListItemId)
  }).reduce((a, b) => a + b)
}

const addToCheckList = function (event) {
  event.preventDefault()
  const { productId, count } = getFormData()
  const checkListItemId = Date.now()
  checkList.push({
    productId, count, checkListItemId
  })
  // console.log(checkList)
  const product =  getProductById(productId)
  document.getElementById(checkListId).innerHTML += renderCheckListItem(checkList.length - 1, product, count, checkListItemId)
  renderFullPrice()
}

const removeFromCheckList = function (checkListItemId) {
  const index = checkList.indexOf(checkList.filter(el => el.checkListItemId == checkListItemId))
  checkList.splice(index, 1)
  document.getElementById(`check-list-item-${checkListItemId}`).remove()
  renderFullPrice()
}

const initCheckList = function () {
  renderCheckList()
  renderFullPrice()
}