
/* FINAL CAMERA + RENDER SETUP */

// Camera position
camera.position.set(10, 8, 12);
controls.target.set(0, 1, 0);
controls.update();


// FINAL RESPONSIVE CANVAS + CAMERA SETUP
camera.position.set(10, 8, 12);
controls.target.set(0, 1, 0);
controls.update();

function resizeCanvas() {
  const parent = canvas.parentElement;
  const width = parent.clientWidth;
  const height = parent.clientHeight;

  if (!width || !height) return;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height, false);
}

const resizeObserver = new ResizeObserver(resizeCanvas);
resizeObserver.observe(canvas.parentElement);

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// DEFAULT FURNITURE
addFurniture('sofa');
addFurniture('table');
addFurniture('plant');

// SINGLE RENDER LOOP
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
// Default furniture so the room isn't empty
addFurniture('sofa');
addFurniture('table');
addFurniture('plant');

// One animation loop only
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
