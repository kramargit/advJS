const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'images/notebook.jpg' },
    { id: 2, title: 'Mouse', price: 20, img: 'images/mouse.jpg' },
    { id: 3, title: 'Keyboard', price: 200, img: 'images/keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 50, img: 'images/gamepad.jpg' }
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (e) => {
    return `<div class="product-item">
                <img src="${e.img}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.price}&#36;</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    productsList.forEach(item => document.querySelector('.products').innerHTML += item);
};

renderPage(products);