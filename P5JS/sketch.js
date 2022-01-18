function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(40);
  }
  var w;
  
  function setup() {
    createCanvas(650, 380);
    // Make a Walker object
    w = new Walker();
  }
  
  function draw() {
    background(200, 0, 115);
    // Update and display object
    w.update();
    w.display();
  }
  
  function Walker() {
  
    // Start Walker in center
    this.pos = createVector(width / 2, height / 2);
  
    this.update = function() {
      // Move Walker randomly
      var vel = createVector(random(-10, 10), random(-10, 10));
      this.pos.add(vel);
    }
  
    this.display = function() {
      // Draw Walker as circle
      fill(this.pos.x, this.pos.y, 100);
      ellipse(this.pos.x, this.pos.y, 125, 125, 25);
    }
  }