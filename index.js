// Source: https://stackoverflow.com/questions/21825157/internet-explorer-11-detection

module.exports = function gugusIEdetector() {
  var $body = $(document.body);
  var ua = window.navigator.userAgent;

  if (ua.indexOf("Trident/7.0") > 0) {
    $body.addClass('internetExplorer ie11');
  } else if (ua.indexOf("Trident/6.0") > 0) {
    $body.addClass('internetExplorer ie10');
  } else if (ua.indexOf("Trident/5.0") > 0) {
    $body.addClass('internetExplorer ie9');
  } else {
    console.log(ua + ' notIE');
  }
};
