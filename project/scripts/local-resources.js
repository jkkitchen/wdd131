//----------LOCAL RESOURCES FABRIC SHOP CARDS-----------

const fabricShops = [
    {
        shopName: "Marietta's Quilt & Sew",
        location: "Simpsonville",
        services: "Longarm Quilting, Fabric, Classes, Notions, Janome and Babylock sewing machine maintenance and sales",
        fabricBrands: "Art Gallery Fabrics, Kimberbell Fabrics, Moda Fabrics, Riley Blake Designs, Robert Kaufman Fabrics, Ruby Star Society, Tula Pink",
        Image: "images/mariettas-quilt-shop.webp",
        website: "https://www.mariettasquiltandsew.com/"
    },
    {
        shopName: "We're in Stitches",
        location: "Greenville",
        services: "Classes, Fabric, Notions, Bernina sewing machine maintenance and sales",
        fabricBrands: "Art Gallery Fabrics, Moda Fabrics, Ruby Star Society, Tula Pink",
        Image: "images/were-in-stitches.webp",
        website: "https://www.berninagreenville.com/"
    },
    {
        shopName: "Carolina Quilt Studio",
        location: "Greenville",
        services: "Longarm Quilting, Classes, Fabric, Notions, Brother sewing machine maintenance and sales",
        fabricBrands: "Art Gallery Fabrics, Moda Fabrics, Free Spirit Fabrics, Liberty Fabrics",
        Image: "images/carolina-quilt-studio.webp",
        website: "https://www.carolinaquiltstudio.com/"
    },
    {
        shopName: "Hobby Lobby",
        location: "Greenville, Taylors, Easley",
        services: "Fabric, Notions",
        fabricBrands: "Kona Solids",
        Image: "images/hobby-lobby.webp",
        website: "https://www.hobbylobby.com/"
    },
    {
        shopName: "All About Fabrics",
        location: "Williamston",
        services: "Fabric, Notions",
        fabricBrands: "Free Spirit Fabrics, Bernatex",
        Image: "images/all-about-fabrics.webp",
        website: "https://allaboutfabrics.com/"
    }
]

//Define new arrays for each location
const shopsInGreenvilleArea = fabricShops;
const shopsInGreenville = fabricShops.filter(shop => shop.location.includes("Greenville"));
const shopsInSimpsonville = fabricShops.filter(shop => shop.location.includes("Simpsonville"));
const shopsInTaylors = fabricShops.filter(shop => shop.location.includes("Taylors"));
const shopsInEasley = fabricShops.filter(shop => shop.location.includes("Easley"));
const shopsInWilliamston = fabricShops.filter(shop => shop.location.includes("Williamston"));


//Create variables for the links
const greenvilleAreaLink = document.querySelector("#greenville-area");
const greenvilleLink = document.querySelector("#greenville");
const simpsonvilleLink = document.querySelector("#simpsonville")
const taylorsLink = document.querySelector("#taylors");
const easleyLink = document.querySelector("#easley");
const williamstonLink = document.querySelector("#williamston");

//Add Event Listeners and create "fabric shop cards" for the requested area
greenvilleAreaLink.addEventListener("click", () => {
    createFabricShopCard(shopsInGreenvilleArea);
});

greenvilleLink.addEventListener("click", () => {
    createFabricShopCard(shopsInGreenville);
});

simpsonvilleLink.addEventListener("click", () => {
    createFabricShopCard(shopsInSimpsonville);
});

taylorsLink.addEventListener("click", () => {
    createFabricShopCard(shopsInTaylors);
});

easleyLink.addEventListener("click", () => {
    createFabricShopCard(shopsInEasley);
});

williamstonLink.addEventListener("click", () => {
    createFabricShopCard(shopsInWilliamston);
});

//Default, or Home: Loop through the array and create "fabric shop cards" for each fabric shop
createFabricShopCard(fabricShops);

//Function to create squares for each fabric shop
function createFabricShopCard(fabricShops) {
    //Clear before each button is pushed so new arrays can be made
    document.querySelector(".local-fabric-shops").innerHTML = '';
    //Function
    fabricShops.forEach(shop => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let services = document.createElement("p");
        let fabricBrands = document.createElement("p");
        let img = document.createElement("img");

        //Create a link for the card to go to the shop website when clicked on
        let link = document.createElement("a");
        link.setAttribute("href", shop.website);
        link.setAttribute("target", "_blank"); //Open the link in a new tab

        //"Card" content
        name.textContent = shop.shopName;
        location.innerHTML = `<span class="label">Location:</span> ${shop.location}`;
        services.innerHTML = `<span class="label">Services Offered:</span> ${shop.services}`;
        fabricBrands.innerHTML = `<span class="label">Fabric Brands Sold:</span> ${shop.fabricBrands}`;
        img.setAttribute("src", shop.Image);
        img.setAttribute("alt", `${shop.shopName}`);
        img.setAttribute("loading", "lazy");
        // img.setAttribute("width", "auto");
        // img.setAttribute("height", "auto");

        //Append Elements to the "card"
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(location);
        card.appendChild(services);
        card.appendChild(fabricBrands);


        //Append the card inside the link
        link.appendChild(card);

        //Append the link 
        document.querySelector(".local-fabric-shops").appendChild(link);
    });
}


