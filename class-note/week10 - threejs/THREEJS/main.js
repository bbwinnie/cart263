// library ref: because we are loading a module (importing a reference to three library)
import * as THREE from 'three';

//loader the texture 
const loader = new THREE.TextureLoader();
const water_texture = await loader.loadAsync('textures/Ice002_1K-JPG_Color.jpg');
//need to ensure that the textures are encoded correctly - mapping the colors correctly.
water_texture.colorSpace = THREE.SRGBColorSpace;

// creat SCENE
const scene = new THREE.Scene()

//A: the geometry 骨架
// const geometry = new THREE.BoxGeometry(1, 1, 1)

//B: the material 外观
// const material = new THREE.MeshBasicMaterial({ color: 0x800080 })

// // new metrial {

// const material = new THREE.MeshBasicMaterial({
//     map: water_texture
// })

// // dying the color to the textures.
// material.color = new THREE.Color('#ad86dd');
// //or
// // material.color = new THREE.Color('rgb(0, 128, 255)')

// // material.wireframe = true

// material.transparent = true
// material.opacity = 0.5

// //}

//C: put together 真正的物体 把骨架和外观结合在一起
// const mesh = new THREE.Mesh(geometry, material)

//D: ADD TO THE SCENE
// scene.add(mesh)

//set the scene size
const sizes = {
    width: 800,
    height: 600
}

//set the Camera (perspective Camera(field of view 75% , aspect ratio)) 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//add the camera
scene.add(camera)

//Access the Canvas 
const canvas = document.querySelector('canvas#three-ex')

//Renderer 渲染器
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//give it the size
renderer.setSize(sizes.width, sizes.height)

// //{creat a new metrail 
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     material
// )
// sphere.position.x = - 1.5

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1),
//     material
// )

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.5, 0.3, 16, 32),
//     material
// )
// torus.position.x = 1.5

// scene.add(sphere, plane, torus)

// camera.position.x = -3;
// camera.position.z = 0.35
// camera.lookAt(plane.position);

// //}

// //{group 
// const group = new THREE.Group()
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// )
// cube1.position.x = 1.5
// group.add(cube1)
// /*https://threejs.org/docs/#SphereGeometry*/
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(.75, 32, 16),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
// )
// sphere.position.y = 1.5
// sphere.position.x = 3
// group.add(sphere)

// group.position.x = -2
// group.rotation.x = Math.PI * .66
// // group.scale.x = .5
// // group.scale.y = .5
// // group.scale.z = .5
// group.scale.set(.5, .5, .5)
// //could do
// //camera.lookAt(group.position)

// camera.position.z = 4;
// //}


//move camera (we need move the camera on the z position. it still on 
// the center of the x and y position)
// if we put 0 it is like we inisde the square
// camera.position.z = 3

// {//TURN ON AXES HELPER (this is kind of debug for the 3d)
// //https://threejs.org/docs/?q=Axes#AxesHelper
// const axesHelper = new THREE.AxesHelper(1)
// scene.add(axesHelper)

// //move it 
// axesHelper.position.x = -1;
// axesHelper.position.y = -1;
// }

// const mesh_2 = new THREE.Mesh(geometry, material)
// scene.add(mesh_2)
// mesh_2.position.x = 1.5
// mesh_2.position.y = 1.25
// mesh_2.position.z = -1 //nagetive z is far way from the camera

// //scale let you change the object on 3d form
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

// // rotation have a promblem with "gimbal lock"
// // 如果绕着y轴旋转，你可以把它想象成旋转木马。
// // 如果你绕着x轴旋转，你可以想象自己正在转动你所在汽车的车轮。
// // 如果绕着z轴线旋转，你可以想象自己正在旋转你所在飞机前面的螺旋桨。
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// //lookAt function is a really good tool for rotation. 
// // that lets you ask an object to look at something.
// // 让camera 摇头看向（x,y,z)的点
// camera.lookAt(new THREE.Vector3(0, -1, 0))
// //or you can make the camera looking up to object.
// // camera.lookAt(mesh_2.position)


const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
mesh.position.x = 1;
mesh.position.y = 1;
mesh.position.z = 1;

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -1;

camera.lookAt(mesh.position);

window.requestAnimationFrame(animate);
let elapsedTime = 0  //
function animate(timer) {
    //calculate the difference since last frame
    let deltaTime = timer - elapsedTime
    elapsedTime = timer //update  new elapsedTime
    mesh.rotation.y += 0.01 * deltaTime


    // Update objects -> elapsed time increases ...
    mesh_2.position.x = Math.cos(elapsedTime / 1000)
    mesh_2.position.y = Math.sin(elapsedTime / 1000)

    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)



}



//render:
renderer.render(scene, camera)




