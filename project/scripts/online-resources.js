//----------SEASONAL QUILT PATTERNS CARDS-----------

const quiltPatterns = [
    {
        quiltName: "Daisy Mae Quilt",
        designer: "Abby Maed",
        Image: "images/daisy-mae-quilt.webp",
        website: "https://www.abbymaed.com/product-page/daisy-mae-quilt-pattern-pdf"
    },
    {
        quiltName: "Wild Hare Quilt",
        designer: "Vanessa Goertzen",
        Image: "images/wild-hare-quilt.webp",
        website: "https://lellaboutique.com/collections/lovestruck/products/219-wild-hare-pdf-pattern"
    },
    {
        quiltName: "Friendly Blooms Quilt",
        designer: "Chelsi Stratton",
        Image: "images/friendly-blooms-quilt.webp",
        website: "https://www.etsy.com/listing/1256088196/friendly-blooms-pdf-pattern?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_ps-b-craft_supplies_and_tools&utm_custom1=_k_Cj0KCQjw2N2_BhCAARIsAK4pEkXyTMyrQgg102Lj9kBsp6mAD4LE1qiGvLYmde8hBMDG3q-gkeGzMLcaAhDREALw_wcB_k_&utm_content=go_21506855501_167985818399_716809480993_pla-295462056867_c__1256088196_450689267&utm_custom2=21506855501&gad_source=1&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkXyTMyrQgg102Lj9kBsp6mAD4LE1qiGvLYmde8hBMDG3q-gkeGzMLcaAhDREALw_wcB"
    },
    {
        quiltName: "Tulip and Vine Quilt",
        designer: "Sherri McConnell",
        Image: "images/tulip-and-vine-quilt.webp",
        website: "https://www.etsy.com/listing/1677939790/tulip-vine-quilt-runner-mini-and-wall?ga_search_query=tulip%2Band%2Bvine&ref=shop_items_search_1&crt=1&logging_key=c790918f68b72a84444fe98ce624b9b1a1966d88%3A1677939790"
    }
]

//Function to create squares for each quilt pattern
function createQuiltPatternCard(quiltPatterns) {
    quiltPatterns.forEach(pattern => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let designer = document.createElement("p");
        let img = document.createElement("img");

        //Create a link for the card to go to the website where you can buy the pattern when clicked on
        let link = document.createElement("a");
        link.setAttribute("href", pattern.website);
        link.setAttribute("target", "_blank"); //Open the link in a new tab

        //"Card" content
        name.textContent = pattern.quiltName;
        designer.innerHTML = `<span class="label">Designer:</span> ${pattern.designer}`;
        img.setAttribute("src", pattern.Image);
        img.setAttribute("alt", `${pattern.quiltName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "auto");

        //Append Elements to the "card"
        card.appendChild(name);
        card.appendChild(designer);
        card.appendChild(img);

        //Append the card inside the link
        link.appendChild(card);

        //Append the link 
        document.querySelector(".quilt-patterns").appendChild(link);
    });
}

//Default, or Home: Loop through the array and create "temple cards" for each temple
createQuiltPatternCard(quiltPatterns);




//----------ONLINE FABRIC STORE CARDS-----------

const onlineFabricStores = [
    {
        storeName: "Etsy",
        Image: "images/etsy.webp",
        website: "https://www.etsy.com/"
    },
    {
        storeName: "Missouri Star Quilt Company",
        Image: "images/missouri-star-quilt-company.webp",
        website: "https://www.missouriquiltco.com/"
    },
    {
        storeName: "Fat Quarter Shop",
        Image: "images/fat-quarter-shop.webp",
        website: "https://www.fatquartershop.com/"
    }
]

//Function to create squares for each online fabric store
function createOnlineFabricStoreCard(onlineFabricStores) {
    onlineFabricStores.forEach(onlineStore => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let img = document.createElement("img");

        //Create a link for the card to go to the store website when clicked on
        let link = document.createElement("a");
        link.setAttribute("href", onlineStore.website);
        link.setAttribute("target", "_blank"); //Open the link in a new tab

        //"Card" content
        name.textContent = onlineStore.storeName;
        img.setAttribute("src", onlineStore.Image);
        img.setAttribute("alt", `${onlineStore.storeName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "200");
        img.setAttribute("height", "200");

        //Append Elements to the "card"
        card.appendChild(img);
        card.appendChild(name);

        //Append the card inside the link
        link.appendChild(card);

        //Append the link 
        document.querySelector(".online-fabric-stores").appendChild(link);
    });
}

//Default, or Home: Loop through the array and create "temple cards" for each temple
createOnlineFabricStoreCard(onlineFabricStores);


//---------------BINDING CALCULATOR-----------------------

//Define functions to calculate the total length of the binding needed and the yardage needed
function calculateBindingLength(length, width) {
    //Total binding length will be the perimeter of the quilt, plus an additional 6 inches for each strip (42 inches wide) that is used for the binding
    const bindingLength = 2 * length + 2 * width + ((2 * length + 2 * width) / 42 * 6)
    return bindingLength;
}

//Fabric is generally sold in 1/4 yard increments, that is what will be assumed in this calcualtion
function calculateYardageNeeded(bindingLength, bindingWidth) {
    //Calculate number of strips needed then multiply by the binding width and convert from inches to yards
    const bindingYardage = bindingLength / 42 * bindingWidth / 36;
    let wholeYards = Math.floor(bindingYardage);
    const fractionYard = bindingYardage - Math.floor(bindingYardage);

    //Initial value for quarterYard to be used in if statment
    let quarterYard = 0;

    //Conditional statement used to determine what 1/4 yard increment will need to be bought
    if (fractionYard > 0 && fractionYard <= 0.25) {
        quarterYard = "1/4";
    } else if (fractionYard > 0.25 && fractionYard <= 0.5) {
        quarterYard = "1/2";
    } else if (fractionYard > 0.5 && fractionYard <= 0.75) {
        quarterYard = "3/4";
    } else if (fractionYard > 0.75) {
        quarterYard = "";
        wholeYards += 1;
    } else if (fractionYard === 0) {
        quarterYard = "";
    }

    //Return the total as a string
    const roundedBindingYardage = `${wholeYards > 0 ? wholeYards : ""} ${quarterYard} yard(s)`;
    return roundedBindingYardage;
}


//Reference form and result
const form = document.getElementById("calculation-inputs");
const result = document.querySelector(".binding-yardage");

//Use listening event for user to submit values and calculation to take place
form.addEventListener("submit", function (event) {
    event.preventDefault(); //Prevents the form from submitting and refreshing the page

    //Get values input by the user in the form
    let quiltLength = Number(document.getElementById("length").value);
    let quiltWidth = Number(document.getElementById("width").value);
    const selectedBindingWidth = Number(document.querySelector('input[name="binding-width"]:checked').value);

    //Use functions to determine outputs
    const totalBindingLength = calculateBindingLength(quiltLength, quiltWidth);
    const totalBindingYardage = calculateYardageNeeded(totalBindingLength, selectedBindingWidth);

    //Display value to website
    result.textContent = `${totalBindingYardage}`
});
