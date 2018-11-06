module.exports = function gugus-ie-detector() {

  var $body = $(document.body);
  var ua = window.navigator.userAgent;

  if (ua.indexOf("Trident/7.0") > 0) {
    console.log(ua + ' IE11');
    $body.addClass('internetExplorer ie11');
  } else if (ua.indexOf("Trident/6.0") > 0) {
    console.log(ua + ' IE10');
    $body.addClass('internetExplorer ie10');
  } else if (ua.indexOf("Trident/5.0") > 0) {
    console.log(ua + ' IE9');
    $body.addClass('internetExplorer ie9');
  } else {
    console.log(ua + ' notIE');
  }

};
