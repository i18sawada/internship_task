
var sketch3 = function(p) {
  let n;
  let shape = [];
  p.setup = function() {
    p.createCanvas(300, 300);
    p.frameRate(20);
    n = 3 * p.int(p.random(5,12));
    for (let i = 0; i < n; i++) {
      // 正方形のキャンバスを想定
      shape.push(p.random(5, p.width-5));
    }
  }

  let flag = 0;
  let X3 = 0;
  let Y3 = 0;

  p.draw = function() {
      p.background(250);
      p.stroke(255, 0, 0);
      p.line(X3, Y3, X3, Y3-30);
      p.fill(255, 0, 0);
      p.rect(X3, Y3-30, 20, 10);
      p.stroke(0);
      p.fill(255);
      for (let i = 0; i < n; i = i+3) {
        // 半径を丁度いいサイズにする
        while(shape[i+2] > 30) {
          shape[i+2] = shape[i+2]/2;
        }
        p.circle(shape[i], shape[i+1], shape[i+2]);
      }
      // キャンバス内をクリックされたとき移動開始
      if (flag == 1) {
        for (let i = 0; i < n; i = i+3) {
          shape[i] = shape[i] + (X3-shape[i])/200;
          shape[i+1] = shape[i+1] + (Y3-shape[i+1])/200;
        }
      }
      // キャンバス外をクリックされた時
      if (flag == 0) {
        p.background(250);
        // 画面外をクリックされたら、円を配置し直す
        for (let i = 0; i < n; i++) {
          shape.pop(i);
      }
      n = 3 * p.int(p.random(5,12));
      for (let i = 0; i < n; i++) {
        // 正方形のキャンバスを想定
        shape.push(p.random(5, p.width-5));
      }
    }
  }

  // キャンバス内を押されるまで非表示
  p.mouseClicked = function() {
    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      flag = 1;
      X3 = p.mouseX;
      Y3 = p.mouseY;
    }
    else {
      flag = 0;
    }
  }
}
new p5(sketch3, "canvasGather");
