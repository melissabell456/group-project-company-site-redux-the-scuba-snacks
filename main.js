var productList = [
    {
        name: "Crabby Patty",
        description: "You'll never get the secret recipe",
        url: "<img src='img/crabbyPatty.jpg'>",
        price: "$1.99"
    },
    {
        name: "Banana",
        description: "Need an insulin spike?",
        url: "<img src='img/banana.jpg'>",
        price: "$.50"
    },
    {
        name: "Beef Jerky",
        description: "Goes great with the saltwater!",
        url: "<img src='img/jerky.jpg'>",
        price: "$6.50"
    },
    {
        name: "Donut",
        description: "Not for use as a flotation device",
        url: "<img src='img/donut.jpg'>",
        price: "$1.00"
    },
    {
        name: "Filet",
        description: "For the fancy divers",
        url: "<img src='img/filet.jpg'>",
        price: "$29.99"
    },
    {
        name: "Water",
        description: "Just in case",
        url: "<img src='img/water.jpg'>",
        price: "$2.00"
    },
    {
        name: "Mermaid Cupcake",
        description: "Trending!",
        url: "<img src='img/cupcake.jpg'>",
        price: "$4.50"
    },
    {
        name: "Goldfish",
        description: "We found Nemo!",
        url: "<img src='img/goldfish.jpg'>",
        price: "$2.50"
    }
];

var productGroup = document.getElementById("products");
productGroup.innerHTML = "";
for (var i = 0; i < productList.length; i++) {
    productGroup.innerHTML += "<div class='card'>" + "<div class='name'>" + productList[i].name + "</div>" + "<div class='description'>" + productList[i].description + "</div>" + "<div class='image'>" + productList[i].url + "</div>" + "<div class='price'>" + productList[i].price + "</div>" + "</div>";
};


let feat1 = (Math.random() * 9).toFixed(0);
let feat2 = (Math.random() * 9).toFixed(0);
let feat3 = (Math.random() * 9).toFixed(0);
let counter = 0;
while (feat1 === feat2 || feat1 === feat3 || feat2 === feat3) {
    feat1 = Math.floor(Math.random() * 9).toFixed(0);
    console.log(feat1);
    feat2 = (Math.random() * 9).toFixed(0);
    feat3 = (Math.random() * 9).toFixed(0);
}
console.log(counter);

let featuredGroup = document.getElementById("featured");
featuredGroup.innerHTML = "";
featuredGroup.innerHTML += "<div class='card'>" + "<div class='name'>" + productList[feat1].name + "</div>" + "<div class='description'>" + productList[feat1].description + "</div>" + "<div class='image'>" + productList[feat1].url + "</div>" + "<div class='price'>" + productList[feat1].price + "</div>" + "</div>";

