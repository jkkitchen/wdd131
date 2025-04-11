//----------LOCAL RESOURCES FABRIC SHOP CARDS-----------

const fabricShops = [
    {
        shopName: "Marietta's Quilt & Sew",
        location: "Simpsonville, SC",
        services: "Longarm Quilting, Fabric, Classes, Notions, Janome and Babylock sewing machine maintenance and sales",
        fabricBrands: "Art Gallery Fabrics, Kimberbell Fabrics, Moda Fabrics, Riley Blake Designs, Robert Kaufman Fabrics, Ruby Star Society, Tula Pink",
        Image: "images/mariettas-quilt-shop.webp",
        website: "https://www.mariettasquiltandsew.com/"
    },
    {
        shopName: "We're in Stitches",
        location: "Greenville, SC",
        services: "Classes, Fabric, Notions, Bernina sewing machine maintenance and sales",
        fabricBrands: "Art Gallery Fabrics, Moda Fabrics, Ruby Star Society, Tula Pink",
        Image: "images/were-in-stitches.webp",
        website: "https://www.berninagreenville.com/"
    },
    {
        shopName: "Carolina Quilt Studio",
        location: "Greenville, SC",
        services: "Longarm Quilting, Classes, Fabric, Notions, Brother sewing machine maintenance and sales",
        fabricBrands: "Art Gallery Fabrics, Moda Fabrics, Free Spirit Fabrics, Liberty Fabrics",
        Image: "images/carolina-quilt-studio.webp",
        website: "https://www.carolinaquiltstudio.com/"
    },
    {
        shopName: "Hobby Lobby",
        location: "Multiple Locations",
        services: "Fabric, Notions",
        fabricBrands: "Kona Solids",
        Image: "images/hobby-lobby.webp",
        website: "https://www.hobbylobby.com/"
    },
    {
        shopName: "All About Fabrics",
        location: "Williamston, SC",
        services: "Fabric, Notions",
        fabricBrands: "Free Spirit Fabrics, Bernatex",
        Image: "images/all-about-fabrics.webp",
        website: "https://allaboutfabrics.com/"
    }
]

//Function to create squares for each fabric shop
function createFabricShopCard(fabricShops) {
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
        img.setAttribute("width", "300");
        img.setAttribute("height", "auto");

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

//Default, or Home: Loop through the array and create "temple cards" for each temple
createFabricShopCard(fabricShops);
