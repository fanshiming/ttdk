// 计算两个地点之间的距离
function countDist(lat1, lng1, lat2, lng2) {//纬度1,经度1,纬度2,经度2
      var f = ((lat1 + lat2) / 2) * Math.PI / 180.0;  
      var g = ((lat1 - lat2) / 2) * Math.PI / 180.0;  
      var l = ((lng1 - lng2) / 2) * Math.PI / 180.0;  
      var sg = Math.sin(g);  
      var sl = Math.sin(l);  
      var sf = Math.sin(f);  
      var s, c, w, r, d, h1, h2;  
      var a = 6378137.0;//地球的直径  
      var fl = 1 / 298.257;  
      sg = sg * sg;  
      sl = sl * sl;  
      sf = sf * sf;  
      s = sg * (1 - sl) + (1 - sf) * sl;  
      c = (1 - sg) * (1 - sl) + sf * sl;  
      w = Math.atan(Math.sqrt(s / c));  
      r = Math.sqrt(s * c) / w;  
      d = 2 * w * a;  
      h1 = (3 * r - 1) / 2 / c;  
      h2 = (3 * r + 1) / 2 / s;  
      var num = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
  num = Math.round(num);  
      return num;//返回单位:米  
  }


  // 计算两个地点之间的距离
  //纬度1,经度1,纬度2,经度2
function rad(d){  // 弧度转为角度
  return d * Math.PI / 180.0;
}

function calcDistance(lat1,  lng1,  lat2,  lng2) {
  let Ea = 6378137;   // 赤道半径  米
  let Eb = 6356725;   // 极半径
  var radLat1 = rad(lat1);
  var radLat2 = rad(lat2);
  var a = radLat1 - radLat2;
  var b = rad(lng1) - rad(lng2);
  var s = 2 * Math . asin(Math . sqrt(Math . pow(Math . sin(a / 2), 2) +
              Math . cos(radLat1) * Math . cos(radLat2) * Math . pow(Math . sin(b / 2), 2)));
  let ec = Eb+(Ea-Eb)*(90-39)/90
  s = s * ec;// EARTH_RADIUS ;
  s = Math.round(s);
  return s; // 返回米
  }


  module.exports.countDist = countDist;
  module.exports.calcDistance = calcDistance;
