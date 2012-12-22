chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.getSelected(null, function(tab) {  
    if (typeof localStorage['urls'] === "undefined") {
      localStorage['urls'] = "[]";
    }    
    if (localStorage['urls'].length == 0) {
      var urls = [];
    } else {
      var urls = JSON.parse(localStorage['urls']);
    }  
    urls.push({title: tab.title, url: tab.url, date: new Date()});
    //alert(tab.url);
    localStorage['urls'] = JSON.stringify(urls);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://~.herokuapp.com/api/add?url=" + tab.url + "&title=" + tab.title);
    xmlHttp.send(null);
  });

  var audioFX1 = new Audio("./shoumoneeeee.m4a");
  audioFX1.play();
});

chrome.browserAction.setBadgeText({text:"100"});
