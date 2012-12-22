var urls = JSON.parse(localStorage['urls']);
//var urls = [{title:"title",url:"http://...",time:"12-22"},{title:"title2",url:"tekitou",time:"12-23"}].reverse();
for(var i = 0; i < urls.length; i++){
	var newDt = document.createElement("dt");
	newDt.innerHTML = "<a href=" + urls[i].url + ">" + urls[i].title + "</a>";
	var newDd = document.createElement("dd");
	newDd.innerHTML =  "<p class=\"url\">" + urls[i].url + "</p>";
	newDd.innerHTML += "<p class=\"time\">" + urls[i].time + "</p>";
	var entries = document.getElementById('entries');
	entries.appendChild(newDt);
	entries.appendChild(newDd);	 
}
