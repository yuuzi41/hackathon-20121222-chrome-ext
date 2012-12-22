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

    httpSend(tab.title, tab.url);

    setTimeout(function () {
      httpSendCnt(tab.url);
    }, 100);
  });

  var audioFX1 = new Audio("./audio/robot_child.wav");
  var audioFX2 = new Audio("./audio/yukkuri.wav");
  var audioFX3 = new Audio("./audio/saykana.m4a");
  var audioFX4 = new Audio("./audio/woman_hanagoe.wav");
  var ary = [audioFX1,audioFX2,audioFX3]
  var rand = ary[Math.floor(Math.random() * ary.length)];
  console.log(rand);
  rand.play();
});

chrome.extension.onMessage.addListener(function(request,sender,sendResponse) {
  chrome.browserAction.setBadgeText({text: (''+request.ccnt)});
  sendResponse({farewell: "goodbye"});
});

var httpSendCnt = function (url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function( ) {
      if ( xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var obj = JSON.parse(xmlHttp.responseText);
        chrome.browserAction.setBadgeText({text: (''+obj.count)});
      }
    }
    xmlHttp.open("GET", "http://shomo.herokuapp.com/api/cnt?url=" + url, true);
    xmlHttp.send(null);
}

function httpSend(title, url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://shomo.herokuapp.com/api/add?title=" + title + "&url=" + url);
    xmlHttp.send(null);
}

// chrome.browserAction.setBadgeText({text:"1"});

function selected(url){
  var urls = JSON.parse(localStorage['urls']);
  for(var i = 0; i < urls.length; i++){
    if (urls[i].url == url) {
      return '1';
    }
  }
  return '0';
}