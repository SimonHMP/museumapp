
/*

const paintings = data.artObjects

for (i=0; i < paintings.length; i++) {
    const currentPainting = paintings[i]

    if (paintings[i].webImage.width > 1500) {
    displayPainting(currentPainting)
} 

}


    
function displayPainting(paintingOne) {
    const painting = paintings[i]

    //console.log(painting.webImage.url);
    // create img element docmument create element
    const elementTwo = document.createElement('a')
    const elementOne = document.createElement('img')
    elementTwo.href = ("file:///home/simon/Documents/Codaisseur/week-1/museumapp/pages/detail-page.html")
    elementTwo.appendChild(elementOne)
    elementOne.alt = painting.title

    elementOne.src = painting.webImage.url 
    gallery = document.getElementById('gallery')
    console.log(gallery)
    gallery.appendChild(elementTwo)
    console.log(elementTwo)
    
    // set .src property 
    // append the image 
    
    }
*/
//stringChecker(paintings[i].longTitle)
stringChecker('hahaaaj150232aakaka')
function stringChecker (museumString) {



    str = museumString.replace(/[^0-9]/g,'');
    str = Number(str)
        if (str[1] >= 8) {
            console.log('too new')

        } else {
            console.log('just right')
        }

    }
        /*


    for (i=0; i < randomString.length; i++) {
        
    }






    /*
    const paintings = data.artObjects

for (i=0; i < paintings.length; i++) {
    const currentPainting = paintings[i]
    displayPainting(currentPainting)
}


    
function displayPainting(paintingOne) {
    const painting = paintings[i]

    //console.log(painting.webImage.url);
    // create img element docmument create element
    const elementTwo = document.createElement('a')
    const elementOne = document.createElement('img')
    elementTwo.href = ("file:///home/simon/Documents/Codaisseur/week-1/museumapp/pages/detail-page.html")
    elementTwo.appendChild(elementOne)
    elementOne.alt = painting.title

    elementOne.src = painting.webImage.url 
    gallery = document.getElementById('gallery')
    console.log(gallery)
    gallery.appendChild(elementTwo)
    console.log(elementTwo)
    
    // set .src property 
    // append the image 
    
    }*/