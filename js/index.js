const url = "http://localhost:3000/api/cameras";

fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        response.forEach(element => {

            const products = document.getElementById("products")

            var prod = document.createElement("ul");
            prod.setAttribute("class", "produit")
            
            var imageUrl = document.createElement("img");
            imageUrl.setAttribute('class', "cam_img");
            imageUrl.src = element.imageUrl
            
            var textContent = document.createElement("div");
            textContent.setAttribute("class", "cam_text");
            
            var nom = document.createElement("h2");
            nom.innerHTML = element.name
            nom.setAttribute("class", "cam_title")
            
            var price = document.createElement("p");
            price.innerHTML = element.price
            price.setAttribute("class", "cam_price");
            price.textContent = (parseInt(element.price, 10) / 100) + ",00 €";
            
            var description = document.createElement("p")
            description.innerHTML = element.description
            
            var lien = document.createElement("button")
            lien.innerHTML = "<a href='products.html?id="+element._id+"'>Voir le produit</a>";
            lien.setAttribute("class", "link_cam");

            let icon = document.createElement("i")
            icon.innerHTML = '<i class="fas fa-search" aria-hidden="true"></i>';
            
            var listCam = document.createElement("li")
            //listCam.innerHTML = "<li></li>";
            
            
           products.append(prod);
           prod.append(listCam);
           listCam.append(imageUrl);
           listCam.append(textContent);
           textContent.append(nom);            
           textContent.append(price);
           //listCam.append(description);
           textContent.append(lien);
           lien.append(icon);

        });
    })
    .catch(error => alert("Erreur :" + error));