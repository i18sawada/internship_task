
var sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(250);
    p.frameRate(10);
  }

  let shape;
  let flag = 0;

  p.draw = function() {
    // 描画
    let r_flag = p.int(p.random(0, 2));
    let g_flag = p.int(p.random(0, 2));
    let b_flag = p.int(p.random(0, 2));
    if (r_flag == 1) {
      r = p.random(50, 127);
    }
    else {
      r = p.random(128, 255);
    }

    if (r_flag == 1) {
      g = p.random(50, 127);
    }
    else {
      g = p.random(128, 255);
    }

    if (r_flag == 1) {
      b = p.random(50, 127);
    }
    else {
      b = p.random(128, 255);
    }
    p.stroke(r, g, b, 150);
    p.fill(r, g, b, 120);

    shape = p.int(p.random(1, 4));
    if (shape == 1) {
      p.rect(p.random(5, p.width-5), p.random(5, p.height-5), p.random(5, p.width-5)/5, p.random(5, p.height-5)/5);
    }
    else if (shape == 2) {
      p.ellipse(p.random(5, p.width-5), p.random(5, p.height-5), p.random(5, p.width-5)/5, p.random(5, p.height-5)/5);
    }
    else if (shape == 3) {
      p.circle(p.random(5, p.width-5), p.random(5, p.height-5), p.random(5, p.width-5)/5);
    }

    if (flag == 0) {
      p.background(250);
    }
  }
  // キャンバス内を押されるまで非表示
  p.mouseClicked = function() {
    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      flag = 1;
    }
    else {
      flag = 0;
    }
  }
}

new p5(sketch2, "canvasShapes");
