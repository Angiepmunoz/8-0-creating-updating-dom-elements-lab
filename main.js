let sectionNewClass = document.querySelector("section")
sectionNewClass.classList.add("featured")

let createArticle = document.createElement("article");


let createImg = document.createElement("img");
createImg.src= "./images/paul-gilmore-unsplash.jpg"
createImg.alt = "Image of a mountain in front of a lake."
createArticle.append(createImg);

let createHeading = document.createElement("h3");
createHeading.textContent = "Stop Planning";
createArticle.append(createHeading)

let createPara = document.createElement("p");
createPara.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
createArticle.append(createPara);

let createAside = document.createElement("aside");

let createAsidePara = document.createElement("p");
createAside.prepend(createAsidePara);

let createSpan = document.createElement("span");
let createStrongText = document.createElement("strong");
createStrongText.textContent = "Read Time:"
createSpan.append(createStrongText)
createStrongText.after(" 4 Minutes")
createAsidePara.prepend(createSpan)

let createLink = document.createElement("a");
createLink.setAttribute("href", "#")
createLink.textContent = "Read more..."
createSpan.after(createLink);

createArticle.append(createAside)

let getSection = document.querySelector("section.posts")
getSection.append(createArticle)

let postArticles = document.querySelectorAll("section.posts article")

let firstArticle = postArticles[0];
let secondArticle = postArticles[1];
secondArticle.after(firstArticle)
