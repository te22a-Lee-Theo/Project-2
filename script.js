let cart = [];

function läggtillivarukorg (namn, pris)
{
    cart.push({namn: namn, pris: pris})
    updateCart();
}

function updateCart(){
    const cartItemsElement = document.getElementById('varukorg-items')
    const cartTotalElement = document.getElementById('varukorg-total')

    Element.innerHTML ='';

    let total = 0;
    cart.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = `${item.namn} - ${item.pris}kr`;
        cartItemsElement.appendChild(listItem);
        total += item.pris;
    });

    cartTotalElement.textContent = total;
}