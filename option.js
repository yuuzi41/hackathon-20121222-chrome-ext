var urls = JSON.parse(localStorage['urls']);
//var urls = [{title:"title",url:"http://...",time:"12-22"},{title:"title2",url:"tekitou",date:"12-23"}].reverse();
for(var i = 0; i < urls.length; i++){
	var newDt = document.createElement("dt");
	newDt.innerHTML = "<a href=" + urls[i].url + ">" + urls[i].title + "</a>";
	newDt.innerHTML += "<input type='button' id='" + i + "' value='削除' >";

	var newDd = document.createElement("dd");
	newDd.innerHTML =  "<p class=\"url\">" + urls[i].url + "</p>";
	newDd.innerHTML += "<p class=\"date\">" + urls[i].date + "</p>";
	var entries = document.getElementById('entries');
	entries.appendChild(newDt);
	entries.appendChild(newDd);

	document.getElementById(i).onclick = function(){
		ret = confirm("\"" + urls[this.id].title + "\" を削除します．宜しいですか？");
		if(ret == true){
			urls.splice(this.id,1);
			localStorage['urls'] = JSON.stringify(urls);
			location.reload();
		}
	};
}
