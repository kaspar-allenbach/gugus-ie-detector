

  var ua = window.navigator.userAgent;
  if (ua.indexOf("Trident/7.0") > 0)
    $(document.body).addClass('internetExplorer ie11');
  else if (ua.indexOf("Trident/6.0") > 0)
    $(document.body).addClass('internetExplorer ie10');
  else if (ua.indexOf("Trident/5.0") > 0)
    $(document.body).addClass('internetExplorer ie9');
  else
 }
