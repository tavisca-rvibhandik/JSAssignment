

var eleid;
var b = null;
var ballArr = new Array();
var cnt = 0;


function ball(eleid, left, top) {
    this.elementId = eleid;
    this.chngx = 5;
    this.chngy = 5;
    this.top = top;
    this.left = left;
  
}

function move(b) {

    var x = b.left;
    var y = b.top;
    if (x < 0 || x > 1300)
        b.chngx = -b.chngx;

    if (y < 0 || y > 620)
        b.chngy = -b.chngy;

    b.left = x + b.chngx;
    b.top = y + b.chngy;

    var balls = document.getElementById(b.elementId);
    balls.style.top = b.top + 'px';
    balls.style.left = b.left + 'px';
}


function draw() {
    ballArr[cnt - 1] = new ball('circle' + cnt, Math.floor((Math.random() * 1300) + 1), Math.floor((Math.random() * 620) + 1));
    var ballOnHtml = document.createElement('div');
    ballOnHtml.id = ballArr[cnt - 1].elementId;
    ballOnHtml.className = 'circle';
    ballOnHtml.style.top = ballArr[cnt - 1].top + 'px';
    ballOnHtml.style.left = ballArr[cnt - 1].left + 'px';
    document.getElementsByTagName('body')[0].appendChild(ballOnHtml);
}

var bounce = function () {
    for (var i = 1; i <= cnt; i++) {
        move(ballArr[i - 1]);
    }
}

function initial() {
    var button = document.getElementById('add');
    button.onclick = function () {
        cnt++;
        draw();
    };

    setInterval(bounce, 20);
}
