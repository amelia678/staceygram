// Instaclone!

const IMAGES = [

"https://images.pexels.com/photos/1287365/pexels-photo-1287365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/881142/pexels-photo-881142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1307503/pexels-photo-1307503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",




"images/IMG_3520.jpg",
"images/IMG_3530.jpg",
"images/IMG_3553.jpg",
"images/IMG_3562.jpg",
"images/IMG_3572.jpg",
"images/IMG_3594.jpg",
"images/IMG_3609.jpg",
"images/IMG_3609.jpg",
"images/2018-10-06 21:30:58.814.jpg",
"images/2018-08-05 20_00_41.993.jpg"

];

// function that generates an img element

function createImage(imageURL) {
    const theImage = document.createElement('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
       console.log('hello!');
    //    the element that got clicked is accessible
    // as 'event.target'
    // And, I can read the 'src' attribute!
       console.log(event.target.src);
       
    // I can now set the output image's src to event.target.src
       outputElement.setAttribute('src', event.target.src );
   });

    return theImage;
};

function createThumbnail(imageURL){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(image);

    return theContainer;
};


let firstImageURL = IMAGES[0];
let testThumb = createThumbnail(firstImageURL);
document.body.appendChild(testThumb);

// const triggerElement = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
// const links = document.querySelectorAll('div.thumbnail-item');

// triggerElement.addEventListener('click', function (event) {
//     console.log('Hello!');
//     let newImage = links[i]
//     outputElement.textContent= newImage;
// });

// const Lightbox = function () {
//     const links= document.querySelectorAll('div.lightbox');

//     const preloadImages = function() {
//         for(var i = 0, i < links.length; i++) {
//             var a = links[i];
//             var src = 
//         }
//     }
// }


