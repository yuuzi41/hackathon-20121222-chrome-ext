chrome.browserAction.onClicked.addListener(function() {

  chrome.tabs.getSelected(null, function(tab) {  
    // localStorage[tab.title] = tab.url;

    if (typeof localStorage['urls'] === "undefined") {
      localStorage['urls'] = "[]";
    }
    // alert(localStorage['urls'].length)

    if (localStorage['urls'].length == 0) {
      var urls = [];
    } else {
      var urls = JSON.parse(localStorage['urls']);
    }
  
      urls.push({title: tab.title, url: tab.url, date: new Date()});
      alert(tab.url);
      localStorage['urls'] = JSON.stringify(urls);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://~.herokuapp.com/api/add?url=" + tab.url + "&title=" + tab.title);
    xmlHttp.send(null);
  });

  // console.log(localStorage['urls']);

    // var color = localStorage['color'] ? localStorage['color'] : 'red';
    // chrome.tabs.executeScript(null, {code: "document.body.style.backgroundColor='"+color+"'"});
});

chrome.browserAction.setBadgeText({text:"100"});
