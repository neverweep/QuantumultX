// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
    $done(Null);
}

function countryCheck(country) {
    if(country) {
        return country
    } else {
        return "Unknown Country/Region"
    }
}

function cityCheck(city) {
    if(city) {
        return city
      } else {
        return "Unknown City"
      }
}

function ispCheck(isp) {
    if(isp) {
        return isp
      } else {
        return "Unknow ISP"
      }
}
  
function orgCheck(org) {
    if(org) {
        return org
    } else {
        return "Unknown Data Center"
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
var description = "Country/Region:" + country + '\n' + "City: " + city + '\n' + "ISP: " + isp + '\n' + "Data Center: " + org;


$done({title, subtitle, ip, description});