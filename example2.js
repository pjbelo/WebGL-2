var camera, scene, renderer;
var geometry, material, mesh;

init();
update();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth*.7, window.innerHeight*.7 );
	document.body.appendChild( renderer.domElement );

}

function update() {

	requestAnimationFrame( update );
	renderer.render( scene, camera );
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        mesh.rotation.x -= 0.1;
    }
    else if (e.keyCode == '40') {
        // down arrow
        mesh.rotation.x += 0.1;
    }
    else if (e.keyCode == '37') {
       // left arrow
       mesh.rotation.y -= 0.1;
    }
    else if (e.keyCode == '39') {
       // right arrow
       mesh.rotation.y += 0.1;
    }

}


