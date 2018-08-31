function MapAggregation(width, height, depth, color) {

	this.width = width;
	this.height = height;
	this.depth = depth;

	this.color = color;

	this.cube = undefined;
	this.aggregationElement = undefined;

	this.init();

}

MapAggregation.prototype = {

	init: function() {
		let geometry = new THREE.BoxGeometry(this.width, this.depth, this.height);
		let material = new THREE.MeshBasicMaterial({
			color: this.color, opacity: 0.3, transparent: true
		});

		let cube = new THREE.Mesh(geometry, material);

		cube.position.set(0, 0, 0);
		cube.elementType = "aggregationElement";

		this.cube = cube;

		let edgesGeometry = new THREE.EdgesGeometry(geometry);
		let edgesLine = new THREE.LineSegments(edgesGeometry, new THREE.LineBasicMaterial({
			color: 0xA5A5A5
		}));

		let aggregationGroup = new THREE.Object3D();
		aggregationGroup.add(cube);
		aggregationGroup.add(edgesLine);

		this.aggregationElement = aggregationGroup;
	},

	getElement: function() {
		return this.aggregationElement;
	},

	setLayerIndex: function(layerIndex) {
		this.cube.layerIndex = layerIndex;
	}

};

export { MapAggregation };