 var httpSend = function (url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function( ) {
      if ( xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		var obj = JSON.parse(xmlHttp.responseText);
		chrome.extension.sendMessage({ccnt: obj.count}, function(response) {});
      }
    }
    xmlHttp.open("GET", "http://shomo.herokuapp.com/api/cnt?url=" + url, true);
    xmlHttp.send(null);
}

var httpCallback = function(xmlhttp)
{
} 

httpSend(document.URL);
