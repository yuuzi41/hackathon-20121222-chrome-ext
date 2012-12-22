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

function httpSend(title, url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://~.herokuapp.com/api/add?title=" + title + "&url=" + url);
    xmlHttp.send(null);
}


chrome.browserAction.setBadgeText({text:"100"});
