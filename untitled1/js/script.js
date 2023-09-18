let count = document.querySelector("#product-count-input")
let price = document.querySelector("#price-input")
let delete_btn = document.querySelector(".btn-danger")
let add_btn = document.querySelector(".btn-primary")
let tbody = document.querySelector("#check-list")
let template = document.querySelector("#product_item")
let clone_of_product_item = template.content.cloneNode(true)
let td = clone_of_product_item.querySelectorAll("td")
let name_of_product = document.querySelector("select").value

add_btn.addEventListener("click", ()=>{
    td[1].textContent = name_of_product
    td[2].textContent = count.value
    td[3].textContent = price.value
    tbody.appendChild(clone_of_product_item)
})

count.addEventListener('input', (e) => {
    price.value = count.value * 100 
} )

delete_btn.addEventListener("click", () => {
    delete_btn.parentNode.parentNode.remove()
})


