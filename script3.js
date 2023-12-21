// AJAX (asibchronous JS and XML)

let container = document.getElementById("product");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dummyjson.com/products');
xhr.send();
xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // debugger - for serching  local variable data 
        console.log(data);
        const products = data.products;
        // for (let i = 0; i < products.lenght; i++) {
        //     let prod = products[i];
            
        //     let element = document.createElement("div");
        //     element.innerHTML = `
        //         <h3> ${prod.title}</h3>
        //         <p> ${prod.price}</p>
        //         <p> ${prod.rating}</p>`;
           
        //     container.appendChild(element);
        //     element.className = "product";
        // }  
    } else {
           console.log("Error fetching data");
        }
}   
        
        
       
  