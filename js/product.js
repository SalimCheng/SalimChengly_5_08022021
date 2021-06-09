/*const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const camId = urlParams.get("id")*/

const urlParams = new URLSearchParams(window.location.search);
const camId = urlParams.get("id");
const url = "http://localhost:3000/api/cameras";

async function productSelected() {
    fetch(url + "/" + camId)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        data = response;
        console.info(data);

        const test = document.getElementById("test");
        
        let desContainer = document.createElement("ul");
        desContainer.setAttribute("class", "des_container");

        let desName = document.createElement("h2");
        desName.setAttribute("class", "des_name");
        desName.innerHTML = response.name

        let desImg = document.createElement("img");
        desImg.setAttribute("class", "des_img");
        desImg.src = response.imageUrl

        
        let description = document.createElement("p");
        description.setAttribute("class", "des_text");
        description.innerHTML = response.description
        
        let desList = document.createElement("li");
        desList.setAttribute("class", "des_list");
        
        let desText = document.createElement("div");
        desText.setAttribute("class", "container_text");
        
        let desPrice = document.createElement("p");
        desPrice.innerHTML = response.price
        desPrice.setAttribute("class", "des_price");
        desPrice.textContent = (parseInt(response.price, 10) / 100) + ",00 €";
        
        //let optLenses = document.getElementById("lenses");
        
        let optLenses = document.createElement("select");
        optLenses.setAttribute("id", "lenses");

        response.lenses.forEach(lenses => {
            let option = document.createElement("option");
            optLenses.append(option);
            option.setAttribute("value", "Type de lentille");
            option.textContent = lenses;

        });
        optLenses.addEventListener('change', function() {
            let selected = optLenses.selectedIndex;
            console.log(selected);
        })

        let desOpt = document.createElement("p");
        desOpt.innerHTML = '<p class="lenses">Type de lentille :</p>';
        
        let desTitle = document.createElement("h3");
        desTitle.setAttribute("class", "des_title");
        desTitle.innerHTML = '<h3 class="des_title">Description</h3>';

        let titleLine = document.createElement("div");
        titleLine.setAttribute("class", "title_line");
        titleLine.innerHTML = '<div class="title_line"></div>';
        

       // })

        test.append(desContainer);
        desContainer.append(desName);
        desContainer.append(desList);
        desList.append(desImg);
        desList.append(desText);
        desText.append(desTitle);
        desTitle.append(description);
        desText.append(desOpt);
        desOpt.append(optLenses);
        desText.append(desPrice);
        desText.append(titleLine);

/*
        let desContainer = create("div", "class", "des_container");
        
        let desName = create("h2", "class", "des_name");
        desName.innerHTML = data.name
        let desPrice = create("p", "class", "des_price");

        let desImg = create("img", "src", data.imageUrl);
        imageUrl.src = data.desImg


        let desText = create("p", "class", "des_text");

        desImg.setAttribute("alt", "Image de la caméra");
        desImg.setAttribute("class", "des_img");

        desName.textContent = data.name;
        desPrice.textContent = data.price / 100 + " " + ",00 €";
        desText.textContent = data.description;

        test.append(desContainer);*/
    })
    .catch(error => {
        console.error("Erreur fatale")
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
productSelected();