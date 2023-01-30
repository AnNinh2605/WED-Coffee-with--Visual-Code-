let navbar = document.getElementById('menu-btn')
document.getElementById('menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active')
    cartItem.classList.remove('active');

} 
let searchForm = document.getElementById('.search-btn')
document.getElementById('fas fa-search').onclick = () =>
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-btn')
document.querySelector('#cart-btn').onclick = () =>
{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');    
}
window.onscroll = () =>
{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}