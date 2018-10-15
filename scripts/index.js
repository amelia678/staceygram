// Instaclone!

const IMAGES = [

{url:"https://images.pexels.com/photos/1287365/pexels-photo-1287365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
alt: "awesome photo"
},
{url:"https://images.pexels.com/photos/881142/pexels-photo-881142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
alt: "beautiful black cat"
},
{url:"https://images.pexels.com/photos/1307503/pexels-photo-1307503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
alt: "beautiful black cat"
},




{url:"images/IMG_3520.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3530.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3553.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3562.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3572.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3594.jpg",
alt: "Stacey's friends"
},
{url:"images/IMG_3609.jpg",
alt: "Stacey's friends"
},
{url:"images/2018-10-06 21:30:58.814.jpg", 
alt: "Stacey's friends"
},
{url:"images/2018-08-05 20_00_41.993.jpg",
alt: "Stacey's friends"
},

];

// function that generates an img element

function createImage(imageInfo) {
    const theImage = document.createElement('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageInfo.url);
    theImage.setAttribute('alt', imageInfo.alt);
    theImage.setAttribute('title', imageInfo.alt);

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

function createThumbnail(imageInfo){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageInfo);
    theContainer.appendChild(image);

    return theContainer;
};

// let firstImageURL = IMAGES[0];
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');

// loop through the IMAGES array.
// for each image, call the anonymous function
// the anon func should expect to receive an image url
IMAGES.forEach(function (singleImageInfo) {
    // we pass that image URL to our creatThumbnail func
    let aThumbnail = createThumbnail(singleImageInfo);

    // then append that thumbnail to the page.
    thumbnailContainer.appendChild(aThumbnail);
} );

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


