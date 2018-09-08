function save() {
  var save = {
    part: part,
    tot: tot,
    tot2: tot2,
    t1f: t1f,
    t2f: t2f,
    t3f: t3f,
    t4f: t4f,
    t5f: t5f,
    t6f: t6f,
    t7f: t7f,
    t8f: t8f,
    bhmass: bhmass,
    bhmax: bhmax,
    bmult: bmult,
    max: max,
    boosts: boosts,
    r1: r1,
    sing: sing,
    time: time,
    font: font,
    sps: sps
  }
  localStorage.setItem("save", JSON.stringify(save));
  var x = document.getElementById("autosave");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  part = savegame.part;
  tot = savegame.tot;
  tot2 = savegame.tot2;
  t1f = savegame.t1f;
  t2f = savegame.t2f;
  t3f = savegame.t3f;
  t4f = savegame.t4f;
  t5f = savegame.t5f;
  t6f = savegame.t6f;
  t7f = savegame.t7f;
  t8f = savegame.t8f;
  bhmass = savegame.bhmass;
  bhmax = savegame.bhmax;
  bmult = savegame.bmult;
  max = savegame.max;
  boosts = savegame.boosts;
  r1 = savegame.r1;
  sing = savegame.sing;
  time = savegame.time;
  font = savegame.font;
  sps = savegame.sps;
  document.getElementById("mult").innerHTML = mult;
  document.getElementById("sps").innerHTML = spsdisp;
}
function clr() {
  part = 0;
  tot = 0;
  tot2 = 0;
  t1f = 1;
  t2f = 0;
  t3f = 0;
  t4f = 0;
  t5f = 0;
  t6f = 0;
  t7f = 0;
  t8f = 0;
  bhmass = 0;
  bhmax = 1000000000000000000000000;
  bmult = 1;
  max = 10;
  boosts = 0;
  r1 = 0;
  sing = 0;
  time = 0;
  sps = 1;
  planb = 0;
  localStorage.removeItem("save");
  document.getElementById("mult").innerHTML = mult;
}
function debug() {
  incr(1e+60);
}
var part = 0;
var partdisp = 0;
var tot = 0;
var tot2 = 0;
var totdisp = 0;
function chngf(x) {
  font = x;
}
function incr(x) {
  part += x;
  tot += x;
  tot2 += x;
  if (part >= 1000) {
    partdisp = part.toExponential(2);
  } else {
    partdisp = part.toFixed(0);
  }
  document.getElementById("partdisp").innerHTML = partdisp;
  if (tot >= 1000) {
    totdisp = tot.toExponential(2);
  } else {
    totdisp = tot.toFixed(0);
  }
  document.getElementById("totdisp").innerHTML = totdisp;
}
var gs = 0;
function cgs(x) {
  gs = x;
}
var font = 0;
var pps = 0;
var ppsdisp = 0;
var sps = 1;
var spsdisp = 1;
function upd() {
  if (boosts === 0) {
    mult = 1;
    document.getElementById("mult").innerHTML = mult;
  }
  if (boosts === 1) {
    mult = 6;
    document.getElementById("mult").innerHTML = mult;
  }
  if (boosts === 2) {
    mult = 36;
    document.getElementById("mult").innerHTML = mult;
  }
  if (boosts === 3) {
    mult = 216;
    document.getElementById("mult").innerHTML = mult;
  }
  if (boosts === 4) {
    mult = 2592;
    document.getElementById("mult").innerHTML = mult;
  }
  if (boosts === 5) {
    mult = 77760;
    document.getElementById("mult").innerHTML = mult;
  }
  document.getElementById("partdisp2").innerHTML = partdisp;
  if (gs === 0) {
    var a = document.getElementById("gs0");
    a.style.display = "block"
  } else {
    var a = document.getElementById("gs0");
    a.style.display = "none"
  }
  if (gs === 1) {
    var a = document.getElementById("gs1");
    a.style.display = "block"
  } else {
    var a = document.getElementById("gs1");
    a.style.display = "none"
  }
  if (gs === 2) {
    var a = document.getElementById("gs2");
    a.style.display = "block"
  } else {
    var a = document.getElementById("gs2");
    a.style.display = "none"
  }
  if (gs === 3) {
    var a = document.getElementById("gs3");
    a.style.display = "block"
  } else {
    var a = document.getElementById("gs3");
    a.style.display = "none"
  }
  if (boosts >= 1) {
    var a = document.getElementById("b1");
    a.style.display = "none"
  }
  if (boosts >= 2) {
    var a = document.getElementById("b2");
    a.style.display = "none"
  }
  if (boosts >= 3) {
    var a = document.getElementById("b3");
    a.style.display = "none"
  }
  if (boosts >= 4) {
    var a = document.getElementById("b4");
    a.style.display = "none"
  }
  if (boosts >= 5) {
    var a = document.getElementById("b5");
    a.style.display = "none"
  }
  document.getElementById("r1").innerHTML = r1;
  if (r1 >= 3) {
    var x = document.getElementById("tdil");
    x.style.display = "block"
  } else {
    var x = document.getElementById("tdil");
    x.style.display = "none"
  }
  if (font === 0) {
    document.getElementById("body").style.fontFamily = "serif";
  }
  if (font === 1) {
    document.getElementById("body").style.fontFamily = "sans-serif";
  }
  if (bhmax >= 1e+61) {
    bhmax = 1e+60;
  }
  pps = t1f*mult*bmult*(2**r1);
  if (pps >= 1000) {
    ppsdisp = pps.toExponential(2);
  } else {
    ppsdisp = pps.toFixed(0);
  }
  document.getElementById("pps").innerHTML = ppsdisp;
  document.getElementById("pps2").innerHTML = ppsdisp;
  document.getElementById("sing").innerHTML = sing;
  if (sps >= 1000) {
    spsdisp = sps.toExponential(2);
  } else {
    spsdisp = sps.toFixed(0);
  }
  document.getElementById("sps").innerHTML = spsdisp;
}
function upds() {
  if (tot >= 1000) {
    var a = document.getElementById("s2");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s2");
    a.style.display = "none"
  }
  if (tot >= 1000000) {
    var a = document.getElementById("s3");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s3");
    a.style.display = "none"
  }
  if (tot >= 1000000000) {
    var a = document.getElementById("s4");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s4");
    a.style.display = "none"
  }
  if (tot >= 1000000000000) {
    var a = document.getElementById("s5");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s5");
    a.style.display = "none"
  }
  if (tot >= 100000000000000) {
    var a = document.getElementById("s6");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s6");
    a.style.display = "none"
  }
  if (tot >= 100000000000000000000) {
    var a = document.getElementById("s7");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s7");
    a.style.display = "none"
  }
  if (r1 >= 1) {
    var a = document.getElementById("s8");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s8");
    a.style.display = "none"
  }
  if (tot >= 100000000000000000000000000) {
    var a = document.getElementById("s9");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s9");
    a.style.display = "none"
  }
  if (tot >= 100000000000000000000000000000000) {
    var a = document.getElementById("s10");
    a.style.display = "block"
  } else {
    var a = document.getElementById("s10");
    a.style.display = "none"
  }
}
var t1f = 1;
var t2f = 0;
var t3f = 0;
var t4f = 0;
var t5f = 0;
var t6f = 0;
var t7f = 0;
var t8f = 0;
var t1fdisp = 1;
var t2fdisp = 0;
var t3fdisp = 0;
var t4fdisp = 0;
var t5fdisp = 0;
var t6fdisp = 0;
var t7fdisp = 0;
var t8fdisp = 0;
function prchf(x) {
  if (x === 0) {
    if (part >= 10) {
      part -= 10;
      t1f += 1;
      if (t1f <= 1000) {
        t1fdisp = t1f.toFixed(0);
      } else {
        t1fdisp = t1f.toExponential(2);
      }
      document.getElementById("t1fdisp").innerHTML = t1fdisp;
    }
  }
  if (x === 1) {
    if (part >= 1000) {
      part -= 1000;
      t2f += 1;
      if (t2f <= 1000) {
        t2fdisp = t2f.toFixed(0);
      } else {
        t2fdisp = t2f.toExponential(2);
      }
      document.getElementById("t2fdisp").innerHTML = t2fdisp;
    }
  }
  if (x === 2) {
    if (part >= 1000000) {
      part -= 1000000;
      t3f += 1;
      if (t3f <= 1000) {
        t3fdisp = t3f.toFixed(0);
      } else {
        t3fdisp = t3f.toExponential(2);
      }
      document.getElementById("t3fdisp").innerHTML = t3fdisp;
    }
  }
  if (x === 3) {
    if (part >= 1000000000) {
      part -= 1000000000;
      t4f += 1;
      if (t4f <= 1000) {
        t4fdisp = t4f.toFixed(0);
      } else {
        t4fdisp = t4f.toExponential(2);
      }
      document.getElementById("t4fdisp").innerHTML = t4fdisp;
    }
  }
  if (x === 4) {
    if (part >= 1000000000000) {
      part -= 1000000000000;
      t5f += 1;
      if (t5f <= 1000) {
        t5fdisp = t5f.toFixed(0);
      } else {
        t5fdisp = t5f.toExponential(2);
      }
      document.getElementById("t5fdisp").innerHTML = t5fdisp;
    }
  }
  if (x === 5) {
    if (part >= 1000000000000000000) {
      part -= 1000000000000000000;
      t6f += 1;
      if (t6f <= 1000) {
        t6fdisp = t6f.toFixed(0);
      } else {
        t6fdisp = t6f.toExponential(2);
      }
      document.getElementById("t6fdisp").innerHTML = t6fdisp;
    }
  }
  if (x === 6) {
    if (part >= 1000000000000000000000000) {
      part -= 1000000000000000000000000;
      t7f += 1;
      if (t7f <= 1000) {
        t7fdisp = t7f.toFixed(0);
      } else {
        t7fdisp = t7f.toExponential(2);
      }
      document.getElementById("t7fdisp").innerHTML = t7fdisp;
    }
  }
  if (x === 7) {
    if (part >= 1000000000000000000000000000000) {
      part -= 1000000000000000000000000000000;
      t8f += 1;
      if (t8f <= 1000) {
        t8fdisp = t8f.toFixed(0);
      } else {
        t8fdisp = t8f.toExponential(2);
      }
      document.getElementById("t8fdisp").innerHTML = t8fdisp;
    }
  }
}
function mf1(x) {
  t1f += x;
  if (t1f <= 1000) {
    t1fdisp = t1f.toFixed(0);
  } else {
    t1fdisp = t1f.toExponential(2);
  }
  document.getElementById("t1fdisp").innerHTML = t1fdisp;
}
function mf2(x) {
  t2f += x;
  if (t2f <= 1000) {
    t2fdisp = t2f.toFixed(0);
  } else {
    t2fdisp = t2f.toExponential(2);
  }
  document.getElementById("t2fdisp").innerHTML = t2fdisp;
}
function mf3(x) {
  t3f += x;
  if (t3f <= 1000) {
    t3fdisp = t3f.toFixed(0);
  } else {
    t3fdisp = t3f.toExponential(2);
  }
  document.getElementById("t3fdisp").innerHTML = t3fdisp;
}
function mf4(x) {
  t4f += x;
  if (t4f <= 1000) {
    t4fdisp = t4f.toFixed(0);
  } else {
    t4fdisp = t4f.toExponential(2);
  }
  document.getElementById("t4fdisp").innerHTML = t4fdisp;
}
function mf5(x) {
  t5f += x;
  if (t5f <= 1000) {
    t5fdisp = t5f.toFixed(0);
  } else {
    t5fdisp = t5f.toExponential(2);
  }
  document.getElementById("t5fdisp").innerHTML = t5fdisp;
}
function mf6(x) {
  t6f += x;
  if (t6f <= 1000) {
    t6fdisp = t6f.toFixed(0);
  } else {
    t6fdisp = t6f.toExponential(2);
  }
  document.getElementById("t6fdisp").innerHTML = t6fdisp;
}
function mf7(x) {
  t7f += x;
  if (t7f <= 1000) {
    t7fdisp = t7f.toFixed(0);
  } else {
    t7fdisp = t7f.toExponential(2);
  }
  document.getElementById("t7fdisp").innerHTML = t7fdisp;
  document.getElementById("t8fdisp").innerHTML = t8fdisp;
}
var time = 0;
var tdisp = 0;
function t(x) {
  time += x;
  if (time <= 1000) {
    tdisp = time.toFixed(2);
  } else {
    tdisp = time.toExponential(2);
  }
  document.getElementById("tdisp").innerHTML = tdisp;
}
var mult = 1;
var boosts = 0;
function prchb(x) {
  if (x === 0) {
    if (part >= 1000) {
      part -= 1000;
      mult *= 6;
      document.getElementById("mult").innerHTML = mult;
      boosts = 1;
      var a = document.getElementById("b1");
      a.style.display = "none"
    }
  }
  if (x === 1) {
    if (part >= 1000000) {
      part -= 1000000;
      mult *= 6;
      document.getElementById("mult").innerHTML = mult;
      boosts = 2;
      var a = document.getElementById("b2");
      a.style.display = "none"
    }
  }
  if (x === 2) {
    if (part >= 1000000000) {
      part -= 1000000000;
      mult *= 6;
      document.getElementById("mult").innerHTML = mult;
      boosts = 3;
      var a = document.getElementById("b3");
      a.style.display = "none"
    }
  }
  if (x === 3) {
    if (part >= 1000000000000) {
      part -= 1000000000000;
      mult *= 12;
      document.getElementById("mult").innerHTML = mult;
      boosts = 4;
      var a = document.getElementById("b4");
      a.style.display = "none"
    }
  }
  if (x === 4) {
    if (part >= 1000000000000000) {
      part -= 1000000000000000;
      mult *= 30;
      document.getElementById("mult").innerHTML = mult;
      boosts = 5;
      var a = document.getElementById("b5");
      a.style.display = "none"
    }
  }
}
var bhmax = 1000000000000000000000000;
var bmult = 1;
var max = 10;
var bhmass = 0;
function bh() {
  bhmass = bhmax - tot2;
  document.getElementById("bhmass").innerHTML = bhmass;
  if (bmult < 100) {
    bmult = 1 + tot2 / 100000000000000000000000000;
  } else {
    bmult = max;
  }
  document.getElementById("bmult").innerHTML = bmult;
}
var r1oh = 0;
function bhtest() {
  if (bhmass <= 0) {
    if (r1 <= 100){
      var a = document.getElementById("main");
      a.style.display = "none"
      var b = document.getElementById("bhr");
      b.style.display = "block"
    }
  } else {
    var a = document.getElementById("main");
    a.style.display = "block"
    var b = document.getElementById("bhr");
    b.style.display = "none"
  }
}
var r1 = 0;
var sing = 0;
function reset() {
  part = 0;
  mult = 1;
  boosts = 0;
  if (bhmax <= 1e+59){
    tot = bhmax;
  }
  tot2 = 0;
  document.getElementById("mult").innerHTML = mult;
  t1f = 1;
  t2f = 0;
  t3f = 0;
  t4f = 0;
  t5f = 0;
  t6f = 0;
  t7f = 0;
  t8f = 0;
  t1fdisp = 1;
  t2fdisp = 0;
  t3fdisp = 0;
  t4fdisp = 0;
  t5fdisp = 0;
  t6fdisp = 0;
  t7fdisp = 0;
  t8fdisp = 0;
  r1 += 1;
  sing += 1;
  document.getElementById("r1").innerHTML = r1;
  var c = document.getElementById("b1");
  c.style.display = "block"
  var d = document.getElementById("b2");
  d.style.display = "block"
  var e = document.getElementById("b3");
  e.style.display = "block"
  var g = document.getElementById("b4");
  g.style.display = "block"
  var h = document.getElementById("b5");
  h.style.display = "block"
  bhmax *= 10000;
  bmult = 1;
  max *= 10;
  var a = document.getElementById("main");
  a.style.display = "block"
  var b = document.getElementById("bhr");
  b.style.display = "none"
}
function prchtd(x){
  if (x === 0){
    if (sing >= 5){
      sing -= 5;
      sps += 1;
    }
  }
  if (x === 1){
    if (sing >= 10){
      sing -= 10;
      sps += 60;
    }
  }
  if (x === 2){
    if (sing >= 15){
      sing -= 15;
      sps += 3600;
    }
  }
  if (x === 3){
    if (sing >= 25){
      sing -= 25;
      sps += 86400;
    }
  }
  if (x === 4){
    if (sing >= 30){
      sing -= 30;
      sps += 604800;
    }
  }
  if (x === 5){
    if (sing >= 40){
      sing -= 40;
      sps += 2592000;
    }
  }
  if (x === 6){
    if (sing >= 50){
      sing -= 50;
      sps += 31536000;
    }
  }
  if (x === 7){
    if (sing >= 65){
      sing -= 65;
      sps += 315360000;
    }
  }
  if (x === 8){
    if (sing >= 80){
      sing -= 80;
      sps += 3153600000;
    }
  }
  if (x === 9){
    if (sing >= 100){
      sing -= 100;
      sps += 31536000000;
    }
  }
  if (x === 10){
    if (sing >= 250){
      sing -= 250;
      sps += 31536000000000;
    }
  }
}
function ttest() {
  if (time >= 1.5e+17) {
    var a = document.getElementById("main");
    a.style.display = "none"
    var b = document.getElementById("bhr");
    b.style.display = "block"
  }
}
function roht() {
  if (r1 >= 100) {
    reset();
  }
}
setInterval(function(){incr(0.05*t1f*mult*bmult*(2**r1));},50);
setInterval(function(){upd();},50);
setInterval(function(){mf1(t2f*mult*0.05);},50);
setInterval(function(){mf2(t3f*mult*0.05);},50);
setInterval(function(){mf3(t4f*mult*0.05);},50);
setInterval(function(){mf4(t5f*mult*0.05);},50);
setInterval(function(){mf5(t6f*mult*0.05);},50);
setInterval(function(){mf6(t7f*mult*0.05);},50);
setInterval(function(){mf7(t8f*mult*0.05);},50);
setInterval(function(){upds();},50);
setInterval(function(){bh();},50);
setInterval(function(){bhtest();},50);
setInterval(function(){t(0.05*sps);},50);
setInterval(function(){save();},30000);
setInterval(function(){roht();},500);
