function revertFilter() {
	Caman('#my-image', function () {
	    this.revert()
	  });
}

function applyFilter() {
	Caman('#my-image', function () {
	    this.brightness(10);
	    this.contrast(30);
	    this.sepia(60);
	    this.saturation(-30);
	    this.render();
	  });
}

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['vintage']();
// 	    this.render();
// 	  });
// }

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['lomo']();
// 	    this.render();
// 	  });
// }

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['love']();
// 	    this.render();
// 	  });
// }

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['orangePeel']();
// 	    this.render();
// 	  });
// }

function applyFilter2() {
	Caman('#my-image', function () {
	    this['grungy']();
	    this.render();
	  });
}

Caman("#image", function () {
  this.resize({
    width: 500,
    height: 300
  });

  // You still have to call render!
  this.render();
});