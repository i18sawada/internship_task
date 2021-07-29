
var sketch1 = function(p) {
  // キャンバスを用意して塗りつぶす
  p.setup = function() {
    p.createCanvas(300, 300);
    p.background(250);
    p.frameRate(30);
  }
  // ベクトルを生成するクラス
  class Vec {
    constructor(_x, _y) {
      this.x = _x;
      this.y = _y;
    }
    // このベクトルとベクトルb(引数)との和
    add(b) {
      let a = this;
      return new Vec(a.x + b.x, a.y + b.y);
    }
    // このベクトルのスカラー(引数s)倍
    mul(s) {
      let a = this;
      return new Vec(s * a.x, s * a.y);
    }
  }
  // 始点の座標、速度、終点の座標
  class Point {
    constructor(_sp, _v, _ep) {
      this.sp = _sp;
      this.v = _v;
      this.ep = _ep;
    }
  }

  let point = new Point(
    new Vec(2, 100),
    new Vec(400, 650),
    new Vec(2, 100)
  );

  let flag = 0;

  p.draw = function() {
    // 線の終点
    point.ep = point.ep.add(point.v.mul(1/60));
    // 左右の壁に反射
    if ((point.ep.x < 0)||(point.ep.x > p.width)) {
      point.sp.x = point.ep.x;
      point.sp.y = point.ep.y;
      point.v.x = -point.v.x;
      p.stroke(p.random(0, 200), p.random(0,200), p.random(0, 200));
    }
    // 上下の壁に反射
    if ((point.ep.y < 0)||(point.ep.y > p.height)) {
      point.sp.x = point.ep.x;
      point.sp.y = point.ep.y;
      point.v.y = -point.v.y;
      p.stroke(p.random(0, 200), p.random(0,200), p.random(0, 200));
    }

    p.line(point.sp.x, point.sp.y, point.ep.x, point.ep.y);

    // 画面外が押されたら
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
new p5(sketch1, "canvasLine");
