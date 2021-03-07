const url = "http://localhost:3000/api/cameras";

fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        response.forEach(element => {

            var prod = document.createElement("div");
            prod.setAttribute("class", "produit")
            products.append(prod);


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
           price.textContent = (parseInt(element.price, 10) / 100) + ",00 €";

           var description = document.createElement("des")
           description.innerHTML = element.description
           prod.append(description);

           var lien = document.createElement("p")
           lien.innerHTML = "<a href='products.html?id="+element._id+"'>Voir le produit</a>";
           prod.append(lien)


        });
    })
    .catch(error => alert("Erreur :" + error));