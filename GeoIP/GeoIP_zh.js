// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
    $done(Null);
}

function countryCheck(country) {
    if(country == "中华民国" || country == "中華民國"){
        return "台湾"
    } else if(country) {
        return country
    } else {
        return "未知国家/地区"
    }
}

function cityCheck(city) {
    if(city) {
        return city.replace("臺","台")
      } else {
        return "未知城市"
      }
}

function ispCheck(isp) {
    if(isp) {
        return isp
      } else {
        return "未知运营商"
      }
}
  
function orgCheck(org) {
    if(org) {
        return org
    } else {
        return "未知数据中心"
    }
}

var body = $response.body;
var obj = JSON.parse(body);

var country = countryCheck(obj['country']);
var city = cityCheck(obj['city']);
var isp = ispCheck(obj['isp']);
var org = orgCheck(obj['org']);

var title = country;
var subtitle = city + ' - ' + org;
var ip = obj['query'];
var description = "国家/地区:" + country + '\n' + "城市: " + city + '\n' + "运营商: " + isp + '\n' + "数据中心: " + org;


$done({title, subtitle, ip, description});