const scene = new THREE.Scene();

const degreesToRadians = degrees => degrees * Math.PI / 180;

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 100;
  return camera;
};

const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#container").appendChild(renderer.domElement);

  return renderer;
};

const createLight = () => {
  const light = new THREE.PointLight(16777215, 1);
  light.position.set(0, 0, 50);
  return light;
};

const createSphere = () => {
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 1048320,
    wireframe: true
  });
  const sphere = new THREE.Mesh(geometry, material);
  return sphere;
};

const createCube = () => {
  var geometry = new THREE.BoxGeometry(20, 20, 20, 10, 10, 10);
  const material = new THREE.MeshBasicMaterial({
    color: 1048575,
    wireframe: true
  });
  mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

const draw = (scene, camera, cube, sphere) => {
  window.requestAnimationFrame(() => {
    cube.rotation.y = cube.rotation.y + 0.01;
    cube.rotation.x = cube.rotation.x + 0.01;
    sphere.rotation.y = sphere.rotation.y + 0.02;
    sphere.rotation.x = sphere.rotation.x + 0.02;
    renderer.render(scene, camera);
    draw(scene, camera, cube, sphere);
  });
};

const camera = createCamera();
const renderer = createRenderer();
const light = createLight();
const cube = createCube();
const sphere = createSphere();

scene.add(light);
scene.add(camera);
scene.add(cube);
scene.add(sphere);

draw(scene, camera, cube, sphere);