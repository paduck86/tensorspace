import Layer from './Layer';

function Dense(config) {

	Layer.call(this, config);

	this.units = config.units;

}

Dense.prototype = Object.assign( Object.create( Layer.prototype ), {

	init: function(center) {

		this.center = center;

		let initX = - this.units / 2;

		let count = 0;

		for (let i = 0; i < this.units; i++) {

			let geometry = new THREE.BoxGeometry(1, 1, 1);
			let material = new THREE.MeshBasicMaterial({
				color: 0xffffff,
				shading: THREE.FlatShading,
				vertexColors: THREE.VertexColors,
				transparent: true
			});

			let cube = new THREE.Mesh(geometry, material);

			this.neuralList.push(cube);

			cube.position.set(1.3 * (i + initX) + this.center.x, this.center.y, this.center.z);
			cube.elementType = "neural";
			cube.layerIndex = this.layerIndex;
			cube.positionIndex = count;
			count++;

			this.scene.add(cube);
		}
	},

	assemble: function(layerIndex) {

		this.layerIndex = layerIndex;

		this.outputShape = [this.units, 1, 1];

	},

	calculateRelativeIndex: function (positionIndex) {

		let neuralIndexList = [];

		for (let i = 0; i < this.lastLayer.neuralList.length; i++) {
			neuralIndexList.push(i);
		}

		return neuralIndexList;
	}

} );

export default Dense;