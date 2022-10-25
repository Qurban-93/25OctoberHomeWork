let productName = document.querySelector('.name');
let productColor = document.querySelector('.color');
let productPrice = document.querySelector('.price');
let productCategory = document.querySelector('.category');
let searchinp = document.querySelector('.search')
let btn = document.querySelector('.add');
let searchbtn = document.getElementById('btn-search');
let btnLogin = document.querySelector(".logined");
let userValue = document.querySelector(".uservalue");
let divLogin = document.querySelector(".login");
let mainDiv = document.querySelector(".table-main");




btnLogin.addEventListener('click',()=>{
    let user = "Qurban"

    if(userValue.value.toLocaleLowerCase() ===user.toLocaleLowerCase()){
        localStorage.setItem("logined",user);
        divLogin.setAttribute("class","deactive");
        mainDiv.setAttribute("class","active");
        console.log(mainDiv);
    }
})

if(localStorage.getItem("logined")){
    divLogin.setAttribute("class","deactive");
    mainDiv.setAttribute("class","active");
}




let products = [];

let product = {
    name: "",
    color: "",
    price: "",
    category: ""
}

productName.addEventListener('change',(e)=>{
    product.name = e.target.value;
})

productColor.addEventListener('change',(e)=>{
    product.color = e.target.value;
})

productPrice.addEventListener('change',(e)=>{
    product.price = e.target.value;
})

productCategory.addEventListener('change',(e)=>{
    product.category = e.target.value;
})


    let count  = 0;
btn.onclick=()=>{
   let newobj = {...product};
    
   if(products.length === 0){
        products.push(newobj)
        console.log(products);
        count++;
        
        let div = document.createElement('div')
        div.setAttribute('class','listproduct')
        document.body.appendChild(div);
        let countspan = document.createElement('span');
        let namespan = document.createElement('span');
        let colorspan = document.createElement('span');
        let pricespan = document.createElement('span');
        let categoryspan = document.createElement('span');

        div.append(countspan,namespan,colorspan,pricespan,categoryspan);
        countspan.innerHTML = count;
        namespan.innerHTML = newobj.name;
        colorspan.innerHTML = newobj.color;
        pricespan.innerHTML = newobj.price;
        categoryspan.innerHTML = newobj.category;

        
   }
   else if(products.length > 0){
    let check = true;
    products.forEach(element => {
        if(element.name === newobj.name && element.color === newobj.color && element.price === newobj.price && element.category === newobj.category)
        {
            alert('Daxil etdiyiniz mehsuldan siyahida movcuddur !')
            console.log(products);
            check = false;
        }
    });
        if(check){
            count++;
            products.push(newobj)
            console.log(products);
            let div = document.createElement('div')
            div.setAttribute('class','listproduct')
            document.body.appendChild(div);
            let countspan = document.createElement('span');
            let namespan = document.createElement('span');
            let colorspan = document.createElement('span');
            let pricespan = document.createElement('span');
            let categoryspan = document.createElement('span');


            div.append(countspan ,namespan,colorspan,pricespan,categoryspan);
            countspan.innerHTML = count;
            namespan.innerHTML = newobj.name;
            colorspan.innerHTML = newobj.color;
            pricespan.innerHTML = newobj.price;
            categoryspan.innerHTML = newobj.category;
        }
    }
   }

   searchbtn.onclick = () => {
    if(products.length === 0){
        alert("Mehsul siyahisi boshdur !");
    }
    else if(products.length>0){
        check = false;
        let div = document.querySelectorAll('.listproduct');

        div.forEach(element =>{
            element.querySelectorAll('span').forEach(span=>{
                span.innerHTML === searchinp.value;
                check = true;
            })
        })
        if(check){
            div.setAttribute('class','active')
        }
        else{
            div.setAttribute('class','deactive');
        }
    }
   }

    


















    






