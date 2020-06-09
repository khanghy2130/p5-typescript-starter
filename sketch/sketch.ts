const sketch = (p: p5) => {

  const CANVAS_WIDTH : number = 600;
  const CANVAS_HEIGHT : number = 500;

  let exampleImg : p5.Image;

  p.preload = () => {
    exampleImg = p.loadImage("build/assets/example-image.png"); // server only
  };

  p.setup = () => {
    p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    
  };

  p.draw = () => {
    p.background(20,50,0);
    p.fill(250, 250, 120);
    p.square(150, 150, SQUARE_SIZE);

    p.image(exampleImg, 200, 200, 350, 200);
  };
};

window.onload = () => {
  const canvasDiv: HTMLElement = document.getElementById("canvas-program-container");
  canvasDiv.oncontextmenu = function (e) {
      e.preventDefault(); // disable right-click menu on canvas
  };

  new p5(sketch, canvasDiv);
};

