const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".pro")
    const pname = document.getElementsByTagName("h5")

    for (let i= 0; i< pname.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];

        if (match) {
               let textvalue = match.textContent || match.innerHTML

               if (textvalue.toUpperCase().indexOf(searchbox) >-1) {
                   product[i].style.display ="";
               } else {
                product[i].style.display = "none";
               }
        }
        
    }
}


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}




// const items =[
//     {
//         id: 0,
//         Image:'f1.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },
//     {
//         id: 1,
//         Image:'f2.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },
//     {
//         id: 3,
//         Image:'f3.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },
//     {
//         id: 4,
//         Image:'f4.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },
//     {
//         id: 5,
//         Image:'f5.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },
//     {
//         id: 6,
//         Image:'f6.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },
//     {
//         id: 7,
//         Image:'f7.jpg',
//         title:'images/Hawai Shirt',
//         price: 120,
//     },

// ];
// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i=0;
//     document.getElementById('root').innerHTML = categories.map((item)=>
//     {
//         var {Image, title, price} = item;
//         return(
//             `<div class='box'>
//             <div class = 'img-box'>
//               <img class='images' src=${images}></img>
//               </div>
//               <div class='bottom'>
//               <p>${title}</p>
//               <h2>$ ${price}.00<h2>`+
//               "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//               `</div>
//               </div>`
//         )
//     }).join('');

//     var cart =[];

//     function addtocart(a){
//         cart.push({...categories[a]});
//         displaycart();
//     }

//     function displaycart(a){
//         let j = 0;
//         if(cart.length==0){
//             document.getElementById('cartItem').innerHTML = "Your cart is empty";

//         }
//         else{
//             document.getElementById('cartItem').innerHTML = cart.map((items)=>
//             {
//                 var {image, title, price} = items;
//                 return(
//                     `<div class='cart-item'>
//             <div class = 'row-img'>
//               <img class='rowimg' src=${images}>
//               </div>
              
//               <p style='font-size:12px;'>${title}</p>
//               <h2 style='font-size:15px'>$ ${price}.00<h2>`+
//               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
//                 )
//             }).join('');


            
            
            

//         }
//     }





let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
                id: 0,
                Image:'images/f1.jpg',
                title:'Hawai Shirt',
                price: 120,
            },
            
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}




