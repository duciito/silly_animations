var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

var cube = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: false } );
var geometry = new THREE.Mesh( cube, material );

var sphere = new THREE.IcosahedronGeometry(1, 0);
var geometry_1 = new THREE.Mesh(sphere, material);

geometry_1.position.x = 2;
geometry.position.x = -2;

scene.add(geometry)
scene.add(geometry_1);

camera.position.z = 3 ;

var render = function () {
  requestAnimationFrame( render );

  for (var i = 0; i < 100; i++) {
    geometry.rotation.x += 0.0002;
    geometry.rotation.y += 0.0002;
    geometry_1.rotation.x += -0.0004;
    geometry_1.rotation.y += -0.0004;
    if (i % 2 === 0) {
      geometry.position.z += 1;
      geometry_1.position.z += 1;
    } else {
      geometry.position.z += -1;
      geometry_1.position.z += -1;
    }
  }

  renderer.render(scene, camera);
};

render();
