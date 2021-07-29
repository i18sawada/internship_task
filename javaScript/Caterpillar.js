
// document.getElementById('caterpillarSS').onclick = function() {
var sketch4 = function(p) {
  p.setup = function() {
    p.createCanvas(300, 300);
    p.frameRate(30);
  }
  // 体に関する変数
  let h1x = 190;
  let h1y = 150;
  let h2x = h1x - 20;
  let h2y = h1y;
  let h3x = h2x - 20;
  let h3y = h1y;
  let h4x = h3x - 20;
  let h4y = h1y;
  let h5x = h4x - 20;
  let h5y = h1y;
  // 動きを入れるため
  let cnt = 0;
  let X;
  let Y;
  // 頭の動きのため
  let XratioY;
  let noseX = 15;
  let noseY = 0;
  let XratioYn;
  let eyeX1 = 8;
  let eyeY1 = 0;
  let eyeX2 = 0;
  let eyeY2 = 8;

  p.draw = function() {
    p.background(250);
    // Caterpillar の体
    p.stroke(240);
    p.fill(0, 200, 50);
    p.circle(h5x, h5y, 30);
    p.fill(0, 180, 50);
    p.circle(h4x, h4y, 30);
    p.fill(0, 200, 50);
    p.circle(h3x, h3y, 30);
    p.fill(0, 180, 50);
    p.circle(h2x, h2y, 30);
    p.fill(0, 200, 50);
    p.circle(h1x, h1y, 30);

    // 次のCaterpillar
    X = p.mouseX;
    Y = p.mouseY;
    // mouseがcanvas内なら
    if (X > 0 && X < p.width && Y > 0 && Y < p.height) {
      // このif内の処理の頻度
      if (cnt > 10) {
        // mouseにどれだけ各部位が近づけるか
        if (h5x+60 < X || h5x-60 > X || h5y+60 < Y || h5y-60 > Y) {
          h5x = h4x;
          h5y = h4y;
        }
        if (h4x+45 < X || h4x-45 > X || h4y+45 < Y || h4y-45 > Y) {
          h4x = h3x;
          h4y = h3y;
        }
        if (h3x+30 < X || h3x-30 > X || h3y+30 < Y || h3y-30 > Y) {
          h3x = h2x;
          h3y = h2y;
        }
        if (h2x+15 < X || h2x-15 > X || h2y+15 < Y || h2y-15 > Y) {
          h2x = h1x;
          h2y = h1y;
        }
        cnt = 0;
      }
      cnt = cnt + 1;
      h1x = h1x + (X - h1x) / 50;
      h1y = h1y + (Y - h1y) / 50;
    }

    // Caterpillar の頭
    p.fill(20);
    p.circle(h1x + noseX, h1y + noseY, 10);
    p.stroke(10);
    p.fill(10);
    p.circle(h1x + eyeX1 + eyeX2, h1y + eyeY1 + eyeY2, 2);
    p.circle(h1x + eyeX1 - eyeX2, h1y + eyeY1 - eyeY2, 2);

    // 次の頭
    if (X > 0 && X < p.width && Y > 0 && Y < p.height) {
      XratioY = (X - h1x) / (Y - h1y); // 比
      XratioYn = (Y - h1y) / (X - h1x); // 法線の比
      // mouseYが頭の座標より上か下か
      if (Y > h1y) {
        // 比と三平方から
        noseY = p.sqrt(15 ** 2 / (XratioY ** 2 + 1));
        noseX = XratioY * noseY;

        eyeY1 = p.sqrt(8 ** 2 / (XratioY ** 2 + 1));
        eyeX1 = XratioY * eyeY1;

        eyeY2 = p.sqrt(8 ** 2 / (XratioYn ** 2 + 1));
        eyeX2 = eyeY2 * XratioYn;
        // mouseXが頭の座標より右か左か
        if (X > h1x) {
          eyeY2 = -eyeY2;
        } else {
          eyeX2 = -eyeX2;
        }
      } else {
        // 比と３平方から
        noseY = -p.sqrt(15 ** 2 / (XratioY ** 2 + 1));
        noseX = XratioY * noseY;

        eyeY1 = -p.sqrt(8 ** 2 / (XratioY ** 2 + 1));
        eyeX1 = XratioY * eyeY1;

        eyeY2 = -p.sqrt(8 ** 2 / (XratioYn ** 2 + 1));
        eyeX2 = XratioYn * eyeY2;
        // mouseXが頭の座標より右か左か
        if (X < h1x) {
          eyeY2 = -eyeY2;
        } else {
          eyeX2 = -eyeX2;
        }
      }
    }
  }

}
new p5(sketch4, "canvasCatapi")
