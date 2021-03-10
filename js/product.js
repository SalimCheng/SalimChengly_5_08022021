/*const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const camId = urlParams.get("id")*/

const urlParams = new URLSearchParams(window.location.search);
const camId = urlParams.get("id");

let dataProduct;

async function productSelected() {
    fetch(url + "/" + camId).then(function(response){
        response.json().then(function(data){
            dataProduct = data;

            let desContainer = create("div", "class", "des_container");
            let desName = create("h2", "class", "des_name");
            let desPrice = create("p", "class", "des_price");
            let desImg = create("img", "src", data.imageUrl);
            let desText = create("p", "class", "des_text");

            desImg.setAttribute("alt", "Image de la caméra");
            desImg.setAttribute("class", "des_img");

            desName.textContent = data.name;
            desPrice.textContent = data.price / 100 + " " + ",00 €";
            desText.textContent = data.description;
        })
    })
}
/*
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var reponse = JSON.parse(this.responseText)
        console.info(reponse)
    }
    if(this.status == 500)
    {
        console.error("Probleme !")
    }
};


xhr.open("GET", "http://localhost:3000/api/cameras/"+ id, true);
xhr.send();*/

console.info(camId)