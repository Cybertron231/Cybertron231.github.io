// Array of image filenames
const imageFilenames = [
    '61a5aded3de43.jpg', '634cdfb9c7835.jpg', '639cf40ce94b1.jpg', '640bd2613674c.jpg', '649c8fd2eac14.jpg', '65346c8ab8987.jpg',
    '61e077aebf4f5.jpg', '6351993f31523.jpg', '639fe086b8c7d.jpg', '64111bfcabfda.jpg', '64ac859c82f1f.jpg', '6535cd63008ca.jpg',
    '6265a8da009e7.jpg', '63530c72d4eba.jpg', '63a298711aa04.jpg', '641a01a71e473.jpg', '64bf8332b590e.jpg', '6539a57bb92ee.jpg',
    '62702f6cac84f.jpg', '63588f6a3bb8f.jpg', '63bdd925a2a05.jpg', '64220397d9512.jpg', '64de9cb2a74ef.jpg', '6548399df0fd6.jpg',
    '629bb02480080.jpg', '635defcc6f83e.jpg', '63d20c9f11ed1.jpg', '6431d3bfa18fe.jpg', '64e6a69d6ddea.jpg', '65581f6744c5c.jpg',
    '629bb731b279e.jpg', '63700c0bc937d.jpg', '63d83f807108e.jpg', '643332a831fed.jpg', '64fe2f5a27685.jpg', '6561a6e71037c.jpg',
    '62b218f18aa72.jpg', '6376a61e5b573.jpg', '63f288c6e4b20.jpg', '64348ab852b4c.jpg', '65079db00fa34.jpg', '6566ca4d57b8f.jpg',
    '62f0117d8d62a.jpg', '6378016c37f8c.jpg', '63fc1eeacf988.jpg', '643c63c5bdb83.jpg', '650a3a63ac46f.jpg', '656934b4e3396.jpg',
    '631656b68d5fd.jpg', '637a809e48e94.jpg', '64024baf36f86.jpg', '64447a3a9c5f3.jpg', '6519cf6c20449.jpg', '65a5c1d48b77d.jpg',
    '6327798fce64e.jpg', '6383dc4aa9b8d.jpg', '6403a8cb75442.jpg', '64503c9a3c375.jpg', '651df8e510cb7.jpg', '65adbcd4001a2.jpg',
    '6346d73ed21e1.jpg', '63867e2e50e59.jpg', '64079d9d0d810.jpg', '646b0a293bc09.jpg', '65209326846d0.jpg',
    '6346d8b90ed6b.jpg', '63868fed64926.jpg', '640a1f921b6b0.jpg', '646eb54b04e08.jpg', '652afee9c7641.jpg'
    ];
    
const imageLinks = [
    'https://gamebanana.com/mods/338083', 'https://gamebanana.com/mods/407166', 'https://gamebanana.com/mods/417128', 'https://gamebanana.com/mods/431508', 'https://gamebanana.com/mods/452855', 'https://gamebanana.com/mods/475113',
    'https://gamebanana.com/mods/350254', 'https://gamebanana.com/mods/407642', 'https://gamebanana.com/mods/417496', 'https://gamebanana.com/mods/432291', 'https://gamebanana.com/mods/455359', 'https://gamebanana.com/mods/475340',
    'https://gamebanana.com/mods/373448', 'https://gamebanana.com/mods/407806', 'https://gamebanana.com/mods/417854', 'https://gamebanana.com/mods/433471', 'https://gamebanana.com/mods/458436', 'https://gamebanana.com/mods/475785',
    'https://gamebanana.com/mods/375137', 'https://gamebanana.com/mods/408655', 'https://gamebanana.com/mods/421700', 'https://gamebanana.com/mods/434586', 'https://gamebanana.com/mods/463063', 'https://gamebanana.com/mods/477766',
    'https://gamebanana.com/mods/381692', 'https://gamebanana.com/mods/409379', 'https://gamebanana.com/mods/424241', 'https://gamebanana.com/mods/436969', 'https://gamebanana.com/mods/464343', 'https://gamebanana.com/mods/479676',
    'https://gamebanana.com/mods/381702', 'https://gamebanana.com/mods/411754', 'https://gamebanana.com/mods/425093', 'https://gamebanana.com/mods/437220', 'https://gamebanana.com/mods/468048', 'https://gamebanana.com/mods/480952',
    'https://gamebanana.com/mods/384923', 'https://gamebanana.com/mods/412547', 'https://gamebanana.com/mods/428482', 'https://gamebanana.com/mods/437396', 'https://gamebanana.com/mods/469289', 'https://gamebanana.com/mods/481644',
    'https://gamebanana.com/mods/394574', 'https://gamebanana.com/mods/412710', 'https://gamebanana.com/mods/429747', 'https://gamebanana.com/mods/438566', 'https://gamebanana.com/mods/469623', 'https://gamebanana.com/mods/481917',
    'https://gamebanana.com/mods/400259', 'https://gamebanana.com/mods/413059', 'https://gamebanana.com/mods/430335', 'https://gamebanana.com/mods/439666', 'https://gamebanana.com/mods/471706', 'https://gamebanana.com/mods/481644',
    'https://gamebanana.com/mods/402439', 'https://gamebanana.com/mods/414296', 'https://gamebanana.com/mods/430557', 'https://gamebanana.com/mods/441368', 'https://gamebanana.com/mods/472198', 'https://gamebanana.com/mods/491522',
    'https://gamebanana.com/mods/406352', 'https://gamebanana.com/mods/414582', 'https://gamebanana.com/mods/431042', 'https://gamebanana.com/mods/445138', 'https://gamebanana.com/mods/472535',
    'https://gamebanana.com/mods/406354', 'https://gamebanana.com/mods/414598', 'https://gamebanana.com/mods/431299', 'https://gamebanana.com/mods/445631', 'https://gamebanana.com/mods/473912'

]

const selectedImageFilenames = [
    '64de9cb2a74ef.jpg', '646b0a293bc09.jpg', '649c8fd2eac14.jpg', '651df8e510cb7.jpg', '6403a8cb75442.jpg',
    '6535cd63008ca.jpg', '6539a57bb92ee.jpg', '6561a6e71037c.jpg', '64111bfcabfda.jpg', '65346c8ab8987.jpg',
    '65581f6744c5c.jpg', '643332a831fed.jpg', '64348ab852b4c.jpg', '650a3a63ac46f.jpg', '641a01a71e473.jpg',
    '64ac859c82f1f.jpg', '64503c9a3c375.jpg'
];

const resultArray = imageFilenames.map(filename => selectedImageFilenames.includes(filename));

let nsfw = true;

function shuffleTwoArrays(array1, array2) {
    if (array1.length !== array2.length) {
      throw new Error("Arrays must have the same length");
    }
  
    for (let i = array1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap elements in both arrays
      [array1[i], array1[j]] = [array1[j], array1[i]];
      [array2[i], array2[j]] = [array2[j], array2[i]];
    }
}

function toggleNSFW(){
    const imgs= document.querySelectorAll(".logos-slide img");
    const btn = document.querySelector("#nsfw");
    const render = document.querySelector("#rendering");
    nsfw=!nsfw;
    if(!nsfw){
        btn.style.borderColor = "lightgreen";
        btn.style.boxShadow= "0 0 20px rgba(0, 255, 0, 0.75), inset 0 0 20px rgba(0, 255, 0, 0.75)";

        render.style.display="none";

        for(let i = 0; i<selectedImageFilenames.length*2;i++){
            const result = Array.from(imgs).find(element => element.src.includes(selectedImageFilenames[Math.floor(i/2)]) && element.style.display!="none");
            if(result){
                result.style.display="none";
            }
        }
    }
    else{
        render.style.display="";
        btn.style.borderColor = "red";
        btn.style.boxShadow= "0 0 20px rgba(255, 0, 0, 0.75), inset 0 0 20px rgba(255, 0, 0, 0.75)";

        for(let i = 0; i<imgs.length;i++){
                imgs[i].style.display = "";

        }
    }
}

function toggleOverlay() {
    var overlay = document.getElementById('overlay');

    if (overlay.style.display === 'block') {
        overlay.style.opacity = 0;

        setTimeout(function() {
            console.log('This is an easter egg');
            overlay.style.display = 'none';
        }, 500); // Wait for the transition to complete (300ms in this example)
    } else {
        overlay.style.display = 'block';

        setTimeout(function() {
            overlay.style.opacity = 0.7;
        }, 10); // Start the transition after a short delay (10ms in this example)
    }
}

document.addEventListener("DOMContentLoaded", function () {

    shuffleTwoArrays(imageFilenames, imageLinks);
    var windowWidth = screen.width;

    var scaleFactor = windowWidth / 2048;
          
    const imageContainer = document.querySelectorAll('.logos-slide');

    // Loop through the image filenames and create img elements
    let j = 0;
    
    for(let i = 0; i<imageContainer.length*2; i++){
        let k = j+10
        for(j; j<k&&j<imageFilenames.length; j++){
            const imgElement = document.createElement('img');
            imgElement.src = `./modimages/${imageFilenames[j]}`;
            imgElement.alt = j; // You can set a better alt text if available
            imgElement.onclick = function () {
                siteLink(this.alt);
            };
            imageContainer[Math.floor(i/2)].appendChild(imgElement);
        }
        if(i%2!=0){
        } else{ 
            j-=10;
        }
    }
    /*
    const imgs = document.querySelectorAll(".logos-slide img");
    for(let i = 0; i<imgs.length; i++){
        imgs[i].style.width = 285*scaleFactor + "px";
        imgs[i].style.height = 161*scaleFactor + "px";
    }
    */
   toggleNSFW();

    
});



function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    var reveal = document.querySelector(".reveal");
    var windowWidth = screen.width;
    var scaleFactor = windowWidth / 2048;
    

    

    // Check if the sidebar is currently hidden (right: -400px)
    if (parseInt(getComputedStyle(sidebar).right) < 0) {
      sidebar.style.right = '0%';
      reveal.style.right = "23%";
      reveal.style.transform = 'rotate(-180deg)';

      const elementsToFadeIn = document.querySelectorAll(".sidebar button");
  
      function fadeInElement(element, delay) {
          setTimeout(function () {
              element.style.opacity = '1';
          }, delay);
      }
  
      // Set initial opacity to 0 for all elements
      elementsToFadeIn.forEach(function (element) {
          element.style.opacity = '0';
      });
  
      // Set the delays for each element (adjust as needed)
      const delayBetweenElements = 200; // 1000ms = 1s
      let delay = 0;
  
      // Fade in each element with a delay
      elementsToFadeIn.forEach(function (element) {
          fadeInElement(element, delay);
          delay += delayBetweenElements;
      });
    } else {
      sidebar.style.right = "-22%";
      reveal.style.right = "1%";
      reveal.style.transform = 'rotate(0deg)';

      const elementsToFadeIn = document.querySelectorAll(".sidebar button");
  
      function fadeInElement(element, delay) {
          setTimeout(function () {
              element.style.opacity = '0';
          }, delay);
      }
  
      // Set initial opacity to 0 for all elements
      elementsToFadeIn.forEach(function (element) {
          element.style.opacity = '0';
      });
  
      // Set the delays for each element (adjust as needed)
      const delayBetweenElements = 200; // 1000ms = 1s
      let delay = 0;
  
      // Fade in each element with a delay
      elementsToFadeIn.forEach(function (element) {
          fadeInElement(element, delay);
          delay += delayBetweenElements;
      });

    }

    toggleOverlay();

      


 

}

function siteLink(altText){
    window.location.href = imageLinks[parseInt(altText)];
    
}




