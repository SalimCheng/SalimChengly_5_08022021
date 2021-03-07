const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")

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
xhr.send();

console.info(id)