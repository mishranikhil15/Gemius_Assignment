const main = document.getElementById("main");




async function get_data() {
    let out = await fetch(`http://localhost:4200/cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    });
    let res = await out.json();
    console.log(res.msg.cart);
    let store=res.msg.cart.map((ele)=>{
        let obj={...ele.prodId,quantity:ele.quantity};
           return obj
    })
    console.log(store);
    display(store)
}
get_data()

function display(res) {
    main.innerHTML = ""
    res.forEach((ele) => {
        let div = document.createElement("div");
        div.className = "product";

        let img = document.createElement("img");
        img.className = "product-image";
        img.setAttribute("src", ele.image);

        let name = document.createElement("h3");
        name.className = "product-name";
        let nameSpan = document.createElement("span");
        nameSpan.innerText = "Name: ";
        name.appendChild(nameSpan);
        name.appendChild(document.createTextNode(ele.name));

        let rating = document.createElement("h3");
        rating.className = "product-rating";
        let ratingSpan = document.createElement("span");
        ratingSpan.innerText = "Rating: ";
        rating.appendChild(ratingSpan);
        rating.appendChild(document.createTextNode(ele.rating));

        let price = document.createElement("h3");
        price.className = "product-price";
        let priceSpan = document.createElement("span");
        priceSpan.innerText = "Price: ";
        price.appendChild(priceSpan);
        price.appendChild(document.createTextNode(ele.price));

        let type = document.createElement("h3");
        type.className = "product-type";
        let typeSpan = document.createElement("span");
        typeSpan.innerText = "Type: ";
        type.appendChild(typeSpan);
        type.appendChild(document.createTextNode(ele.type));

        let brand = document.createElement("h3");
        brand.className = "product-brand";
        let brandSpan = document.createElement("span");
        brandSpan.innerText = "Brand: ";
        brand.appendChild(brandSpan);
        brand.appendChild(document.createTextNode(ele.brand));

        let flavors = document.createElement("h3");
        flavors.className = "product-flavors";
        let flavorsSpan = document.createElement("span");
        flavorsSpan.innerText = "Flavors: ";
        flavors.appendChild(flavorsSpan);
        flavors.appendChild(document.createTextNode(ele.flavors));

        let sizes = document.createElement("h3");
        sizes.className = "product-sizes";
        let sizesSpan = document.createElement("span");
        sizesSpan.innerText = "Sizes: ";
        sizes.appendChild(sizesSpan);
        sizes.appendChild(document.createTextNode(ele.sizes));

        let quantity = document.createElement("h3");
        quantity.className = "product-quantity";
        let quantitySpan = document.createElement("span");
        quantitySpan.innerText = "quantity: ";
        quantity.appendChild(quantitySpan);
        quantity.appendChild(document.createTextNode(ele.quantity));


        let btn = document.createElement("button");
        btn.innerText = "Delete"
        btn.addEventListener("click", () => {
            // let arr=JSON.parse(localStorage.getItem("cart"))||[];
            // console.log(ele);
            // arr=[...arr,ele._id]
            // localStorage.setItem("cart",JSON.stringify(arr));

            del_data_from_cart(ele._id)

        })

        let plus_btn = document.createElement("button");
        plus_btn.innerText = "+";
        plus_btn.addEventListener("click", () => {
            
            add_to_cart(ele._id)
            
        })

        let minus_btn = document.createElement("button");
        minus_btn.innerText = "-";
        minus_btn.addEventListener("click", () => {
            
            update_data_from_cart(ele._id)
            
        })

        div.append(img, name, rating, price, type, brand, flavors, sizes, quantity, plus_btn,minus_btn, btn);
        main.append(div);
    });
}


async function update_data_from_cart(id) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDljNTk1NjFmNTliYzkyYmFkYWQ2OTIiLCJyb2xlIjoiU2VsbGVyIiwiaWF0IjoxNjg4MDQ3OTc3fQ.4BEJxf4aSFzut7Jjb-xr5hVkxKBMzeJ6JrnWktbnnQs";

    let out = await fetch(`http://localhost:4200/cart/UpdateCartProducts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ id })
    });

    let res = await out.json();
    console.log(res.msg);
    get_data()
    alert(res.msg);
}

async function del_data_from_cart(id) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDljNTk1NjFmNTliYzkyYmFkYWQ2OTIiLCJyb2xlIjoiU2VsbGVyIiwiaWF0IjoxNjg4MDQ3OTc3fQ.4BEJxf4aSFzut7Jjb-xr5hVkxKBMzeJ6JrnWktbnnQs";

    let out = await fetch(`http://localhost:4200/cart/DeleteCartProducts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ id })
    });

    let res = await out.json();
    console.log(res.msg);
    get_data()
    alert(res.msg);
}


async function add_to_cart(id) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDljNTk1NjFmNTliYzkyYmFkYWQ2OTIiLCJyb2xlIjoiU2VsbGVyIiwiaWF0IjoxNjg4MDQ3OTc3fQ.4BEJxf4aSFzut7Jjb-xr5hVkxKBMzeJ6JrnWktbnnQs";
  
    let out = await fetch("http://localhost:4200/cart/postcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({id})
    });
  
    let res = await out.json();
    console.log(res.msg);
    get_data()
    alert(res.msg);

  }