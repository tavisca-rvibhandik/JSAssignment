window.onload = function () {
    document.getElementById('url').addEventListener('keypress', getData);
}
function getData() {
    var keyCode = event.keyCode || event.which;
    if(keyCode ==13)
    {
    	var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
                var obj = JSON.parse(xmlhttp.responseText);

		var main = document.getElementById("main");

		
		
		var inner = document.getElementById("inner");
				
		inner.className += 'format-inner';

		   var title = document.getElementById("title");
			

		        title.innerHTML = "<p class=\"text-style3\">" + obj.responseData.feed.title + "<br>"
				+ "<p class=\"text-style1\">" + obj.responseData.feed.description + "<br>";	

		        inner.appendChild(title);	

                   var i = 0;
			
                   while (obj.responseData.feed.entries[i] != 'undefined') {
                  

			

		           var Div = document.createElement("Div");
			
                           //Div.id = i.toString();
                           if (i % 2 == 0) {
                                Div.className += 'format-div-odd text-style2';
                           }
                    	   else{
                           	Div.className += 'format-div-even text-style2';
			   }


                    
                            Div.innerHTML = "<div>" + "<a href=\"\" class=\"format-title\">" + obj.responseData.feed.entries[i].title + "</a>"
							+ "<p class=\"format-date\">" + obj.responseData.feed.entries[i].publishedDate + "</p></div>"
							+ "<br>" + obj.responseData.feed.entries[i].contentSnippet + "<br>";
												
                    		
                           i++;
			   inner.appendChild(Div);
		
                   }
		   main.appendChild(inner);
            }
        }
      
        
        xmlhttp.open("GET", "http://googlefeed.appacitive.com/?q="+document.getElementById('url').value, true);


        xmlhttp.send();
   
    }

}