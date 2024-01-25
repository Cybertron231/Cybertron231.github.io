document.addEventListener("DOMContentLoaded", function () {
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
      
      
    const imageContainer = document.querySelectorAll('.logos-slide');

    // Loop through the image filenames and create img elements
    let j = 0;
    for(let i = 0; i<imageContainer.length*2; i++){
        let k = j+10
        for(j; j<k&&j<imageFilenames.length; j++){
            const imgElement = document.createElement('img');
            imgElement.src = `./modimages/${imageFilenames[j]}`;
            imgElement.alt = j; // You can set a better alt text if available
            imageContainer[Math.floor(i/2)].appendChild(imgElement);
        }
        if(i%2!=0){
        } else{ 
            j-=10;
        }
    }
});


function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");

    // Check if the sidebar is currently hidden (right: -400px)
    console.log(sidebar);
    if (parseInt(getComputedStyle(sidebar).right) < 0) {
      sidebar.style.right = '0';
    } else {
      sidebar.style.right = '-400px';
    }
  }


