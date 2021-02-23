var xhr = new XMLHttpRequest();

var produits = document.getElementById("produits")

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.warn("Tout va bien !")
        var reponse = JSON.parse(this.responseText)
        reponse.forEach(element => {
            // console.log(element.name)
            var prod = document.createElement("div");
            prod.setAttribute("class", "produit")
            produits.append(prod);

            var nom = document.createElement("h2");
            nom.innerHTML = element.name
            nom.setAttribute("class", "cam_title")
            prod.append(nom)
            
            
            
            
            var imageUrl = document.createElement("img");
           imageUrl.setAttribute('class', "cam_img");
           imageUrl.src = element.imageUrl
           prod.append(imageUrl) 

           var price = document.createElement("prix");
           price.innerHTML = element.price
           price.setAttribute("class", "cam_price");
           prod.append(price);

           var description = document.createElement("des")
           description.innerHTML = element.description
           prod.append(description);

            
        })
        console.info(reponse)
    }
};

xhr.open("GET", "http://localhost:3000/api/cameras/", true);
xhr.send();