/**
 * Borrowed heavily from from https://threejs.org/manual/#en/load-obj
 */
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const COLORS = {
  red: 0xff0000,
  green: 0x00ff00,
  blue: 0x0000ff,
  white: 0xffffff,
  black: 0x000000,
};

/**
 * Create a basic Three.js scene with a single object.
 * @param {*} elementSelector  The selector for the element to append the canvas to
 * @param {*} objectToDisplay  The name of the object to display (expects .mtl and .obj files in the /assets/models/ directory)
 */
export class BasicThreeJs {
  constructor(elementSelector, objectToDisplay, color = colors.white) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    const intensity = 1;
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);

    // Set the camera position
    this.renderer.setSize(500, 500);
    const canvas = document.querySelector(`${elementSelector}`);
    canvas.appendChild(this.renderer.domElement);

    // Loads the Spider Chassis model and adds it to the scene
    mtlLoader.load(`/assets/models/${objectToDisplay}.mtl`, (mtl) => {
      mtl.preload();
      objLoader.setMaterials(mtl);
      objLoader.load(`/assets/models/${objectToDisplay}.obj`, (root) => {
        this.threeJsObject = root;
        this.scene.add(root);

        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        // set the camera to frame the box
        frameArea(boxSize * 1.2, boxSize, boxCenter, this.camera);

        // update the Trackball controls to handle the new size
        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
      });
    });

    const animate = this.animate.bind(this);
    animate();
  }

  /**
   * Animate the scene.
   */
  animate = () => {
    // Rotate the chassis
    if (this.threeJsObject) {
      this.threeJsObject.rotation.x += 0.01;
      this.threeJsObject.rotation.y += 0.01;
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };
}

/**
 * Set the camera to frame the box
 * @param {*} sizeToFitOnScreen The size of the box that you want to fit in the view
 * @param {*} boxSize The size of the box that you want to fit in the view
 * @param {*} boxCenter The center of the box that you want to fit in the view
 * @param {*} camera The camera that you want to set the position and projection matrix of
 */
function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
  const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
  const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
  const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

  // compute a unit vector that points in the direction the camera is now
  // from the center of the box
  const direction = new THREE.Vector3()
    .subVectors(camera.position, boxCenter)
    .multiply(new THREE.Vector3(1, 0, 1))
    .normalize();

  // move the camera to a position distance units way from the center
  // in whatever direction the camera was from the center already
  camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

  // pick some near and far values for the frustum that
  // will contain the box.
  camera.near = boxSize / 100;
  camera.far = boxSize * 100;

  camera.updateProjectionMatrix();

  // point the camera to look at the center of the box
  camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
}
