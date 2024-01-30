//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

import { FBXLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/FBXLoader.js";


//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'dino';

let folder = 0;

//Instantiate a loader for the .gltf file
const fbxLoader = new FBXLoader();

const repoOwner = 'AnotherOrganism657';
const repoName = 'ModelRepo';
const folderPath = 'modmodels/ShenheDurga';

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(250, 500, 1000) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);

fetchFolderContents(`modmodels/ExquisiteNingguang`, folder);

export function changeModel(change){
  folder+=change;
  while(scene.children.length > 0){ 
    scene.remove(scene.children[0]); 
  }
  const last = document.querySelector(".minus")
  const next = document.querySelector(".plus")


  if(folder==0){
    last.style.display="none";
  } else{
    last.style.display="";
  }
  if(folder==3){
    next.style.display="none";
  } else{
    next.style.display="";

  }
  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(250, 500, 1000) //top-left-ish
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
  scene.add(ambientLight);
  fetchFolderContents(`modmodels`, folder, false);

}
function fetchFolderContents(folderPath, searchFolder, run){
  let folderNumber = 0;

  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`)
  .then(response => response.json())
  .then(data => {
    // Find the first FBX file in the folder
    //const fbxFile = data.find(item => item.type === 'file' && item.name.endsWith('.fbx'));
    data.forEach(item => {
      if (item.type === 'file' && item.name.endsWith('.fbx')) {
        // Use the three.js FBXLoader to load the FBX file
        const loader = new FBXLoader();
        loader.load(item.download_url, object => {
          object.traverse(function (child) {
            object.scale.set(0.01, 0.01, 0.01);
            if (child.isMesh) {
              // basic monochromatic energy preservation
              const textureLoader = new THREE.TextureLoader();
              const diffuseColor = new THREE.Color(0.6, 0.6, 0.6);
              //let colorTexture = textureLoader.load('models/jean/Avatar_Lady_Sword_Qin_Tex_Body_Diffuse.png') // Replace with the actual path to your texture
              let newMat;
              if(Array.isArray(child.material)){
                let i =0;
                child.material.forEach(function (material) {
                  newMat = new THREE.MeshToonMaterial( {
                    color: diffuseColor,
                    map: material.map, // Set the texture for color
                    transparent: true,
                    side: THREE.DoubleSide,
                    gradientMap: null
                  } );
                  material = newMat;
      
                  child.material[i] = newMat;
                  i++;
      
      
      
                });
              }else{
                newMat = new THREE.MeshToonMaterial( {
                  color: diffuseColor,
                  map: child.material.map, // Set the texture for color
                  gradientMap: null
                } );
                child.material = newMat;
      
              }
      
              
              switch (child.name) {
                case 'EffectMesh':
                    // Handle EffectMesh
                    child.visible = false;
                    break;
                case 'EyeStar':
                    // Handle EyeStar
                    child.visible = false;
                    break;
                default:
                    // Default case if the name doesn't match any of the cases
                    break;
            }
      
      
            }
          });
          object.position.y=-1;
          scene.add(object);
        });
      } else if (item.type === 'dir') {
        // For subfolders, recursively fetch their contents
        if(folderNumber==searchFolder && run==false){
         // console.log(item.url);
          run=true;
          fetchFolderContents("modmodels/"+item.name, searchFolder, run);

        } else{
          folderNumber++;
        }
      }
    });
  })
  .catch(error => console.error('Error fetching folder contents:', error));

  //Instantiate a new renderer and set its size
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); //Alpha: true allows for the transparent background
  renderer.setSize(window.innerWidth, window.innerHeight);

  //Add the renderer to the DOM
  document.getElementById("container3D").appendChild(renderer.domElement);

  //Set how far the camera will be from the 3D model
  camera.position.z=1.25;
  camera.position.y=0.5;
  //console.log(camera.position);
 // console.log(camera.rotation);



  //This adds controls to the camera, so we can rotate / zoom it with the mouse
  if (objToRender === "dino") {
    controls = new OrbitControls(camera, renderer.domElement);
  }

  //Render the scene
  function animate() {
    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement
    renderer.render(scene, camera);
  }

  //Add a listener to the window, so we can resize the window and the camera
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  //add mouse position listener, so we can make the eye move
  document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  //Start the 3D rendering
  animate();

}






/*
fbxLoader.load(
  'models/jean/Cs_Avatar_Lady_Sword_Qin.fbx',
  (object) => {
    object.traverse(function (child) {
      if (child.isMesh) {
        // basic monochromatic energy preservation
        const textureLoader = new THREE.TextureLoader();
        const diffuseColor = new THREE.Color(0.5, 0.5, 0.5);
        let colorTexture = textureLoader.load('models/jean/Avatar_Lady_Sword_Qin_Tex_Body_Diffuse.png') // Replace with the actual path to your texture
        let newMat;
        if(Array.isArray(child.material)){
          let i =0;
          child.material.forEach(function (material) {
            console.log(material.map.name); 
            newMat = new THREE.MeshToonMaterial( {
              color: diffuseColor,
              map: material.map, // Set the texture for color
              gradientMap: null
            } );
            material = newMat;

            child.material[i] = newMat;
            i++;



          });
        }else{
          console.log(child.material.name); 
          newMat = new THREE.MeshToonMaterial( {
            color: diffuseColor,
            map: child.material.map, // Set the texture for color
            gradientMap: null
          } );
          child.material = newMat;

        }

        
        switch (child.name) {
          case 'EffectMesh':
              // Handle EffectMesh
              child.visible = false;
              break;
          case 'EyeStar':
              // Handle EyeStar
              child.visible = false;
              break;
          default:
              // Default case if the name doesn't match any of the cases
              break;
      }


      }
    });
    scene.add(object)
  },
  (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
      console.log(error)
  }
)
*/
