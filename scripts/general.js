import * as THREE from "../three"

const menuDropDown = document.getElementById("but0");
let click = true;

menuDropDown.addEventListener("click", dropDown)

function dropDown(){
   if(click){
        let arr = [];
        arr.push(document.getElementById("but2"));
        arr.push(document.getElementById("but3"));
        arr.push(document.getElementById("but4"))
        const menu = document.getElementById("menuBar");
        
        menu.style.flexDirection = "column";
        menu.style.position = "fixed";
        menu.style.right = "0%";

        for (let index = 0; index < arr.length; index++) {
            arr[index].style.display = "block";
            arr[index].style.visibility = "visible";
        }
        click = !click;
   }else{
        let arr = [];
        arr.push(document.getElementById("but2"));
        arr.push(document.getElementById("but3"));
        arr.push(document.getElementById("but4"))
        const menu = document.getElementById("menuBar")
        menu.style.flexDirection = "row"
        for (let index = 0; index < arr.length; index++) {
            arr[index].style.display = "none";

        }
        click = !click;    
   }

}



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const renderer  = new THREE.WebGLRenderer();


renderer.setSize(window.innerWidth/2, window.innerHeight/2, false);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.TorusKnotGeometry(3,0.2,128, 16,2,5 );
const material = new THREE.MeshBasicMaterial({color: 0xdb3069});
material.wireframe=true;

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 7;



function animate(){
    cube.rotation.x += 0.0025;
	cube.rotation.y += 0.0025;
    renderer.render(scene, camera);
}




