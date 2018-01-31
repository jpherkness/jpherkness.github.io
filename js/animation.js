// var camera, scene, renderer, geometry, material, mesh;
// var container
// var meshes = [];

// document.addEventListener('DOMContentLoaded', function () {
//   init();
//   animate();

//   function init() {

//     container = document.getElementById('particles');
//     scene = new THREE.Scene();
//     // camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
//     camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 0, 1000 );
//     camera.position.y = 0;
//     camera.position.x = 0;
//     camera.position.z = 700;
//     scene.add(camera);

//     function setIntervalX(callback, delay, repetitions) {
//       var x = 0;
//       var intervalID = window.setInterval(function () {

//         callback();

//         if (++x === repetitions) {
//           window.clearInterval(intervalID);
//         }
//       }, delay);
//     }

//     setTimeout(function () {
//       setIntervalX(function () {
//         buildCube();
//       }, 0, 30);
//     }, 0);

//     renderer = new THREE.WebGLRenderer({
//       alpha: true
//     });
//     renderer.setClearColor(0xffffff);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);

//     container.appendChild(renderer.domElement);
//     window.addEventListener('resize', onWindowResize, false);
//   }

//   function buildCube() {
//     var colors = [0xff0032, 0xedf2f4];
//     geometries = [
//       new THREE.CircleGeometry(Math.floor(Math.random() * 5) + 10, 20 ),
//       new THREE.CircleGeometry(Math.floor(Math.random() * 5) + 10, 4 ),
//       new THREE.CircleGeometry(Math.floor(Math.random() * 5) + 10, 3 ),
//     ]

//     // Select the color and shape of the mesh
//     var color = colors[Math.floor(Math.random() * 1)];
//     var geometry = geometries[Math.floor(Math.random() * 3)];

//     // Create the mesh
//     var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
//       color: color
//     }));

//     // Position the mesh
//     mesh.position.x = Math.random() * window.innerWidth - window.innerWidth/3;
//     mesh.position.y = Math.random() * window.innerHeight - window.innerHeight/2;
//     mesh.position.z = 0;

//     // Rotate the mesh
//     mesh.rotation.z = Math.random() * 2 * Math.PI;

//     scene.add(mesh);
//     meshes.push({
//       mesh: mesh,
//       direction: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0)
//     });
//   }

//   function onWindowResize() {
//     // camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 0, 1000 );
//   }

//   function animate() {
//     for (var i = 0, len = meshes.length; i < len; i++) {
//       meshes[i].mesh.position.add(meshes[i].direction);
//       var pos = meshes[i].mesh.position;
//       if(!visible(pos)) {
//         meshes[i].mesh.position.x = Math.random() * window.innerWidth - window.innerWidth/3;
//         meshes[i].mesh.position.y = Math.random() * window.innerHeight - window.innerHeight/2;
//       }
//     }
//     render();
//     requestAnimationFrame(animate);
//   }

//   function visible(point) {
//     //check if within camera's view:
//     camera.updateMatrix(); // make sure camera's local matrix is updated
//     camera.updateMatrixWorld(); // make sure camera's world matrix is updated
//     camera.matrixWorldInverse.getInverse( camera.matrixWorld );

//     var frustum = new THREE.Frustum();
//     frustum.setFromMatrix( new THREE.Matrix4().multiply( camera.projectionMatrix, camera.matrixWorldInverse ) );

//     return frustum.containsPoint(point);
//   }

//   var radius = 600;
//   var theta = 0;
//   function render() {
//     renderer.render(scene, camera);
//   }
// });

var camera, scene, renderer, geometry, material, mesh;
var container

document.addEventListener('DOMContentLoaded', function () {
  init();
  animate();

  function init() {

    container = document.getElementById('particles');
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.y = 300;
    camera.position.z = 500;
    scene.add(camera);

    geometry = new THREE.CubeGeometry(20, 20, 20);

    function buildCube() {
      var colors = [0xff0032, 0xedf2f4];
      var randomNum = Math.floor(Math.random() * (2 - 0) + 0);
      var color = colors[randomNum];

      var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        color: color
      }));

      mesh.position.x = Math.random() * 800 - 400;
      mesh.position.y = Math.random() * 800 - 400;
      mesh.position.z = Math.random() * 800 - 400;

      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;

      scene.add(mesh);
    }

    function setIntervalX(callback, delay, repetitions) {
      var x = 0;
      var intervalID = window.setInterval(function () {

        callback();

        if (++x === repetitions) {
          window.clearInterval(intervalID);
        }
      }, delay);
    }

    setTimeout(function () {
      setIntervalX(function () {
        buildCube();
      }, 0, 30);
    }, 0);

    renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  var radius = 600;
  var theta = 0;
  function render() {
    theta += 0.1;
    camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
    camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta)) / 2;
    camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
});
