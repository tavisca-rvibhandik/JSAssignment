window.onload = function () {

    var btnhotel = document.getElementById("hotelid");
    var btncar = document.getElementById("carid");
    var btnreload = document.getElementById("reloadid");


    btnreload.onclick = function () {
        window.location.reload();
    }


    btnhotel.onclick = function () {
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

                   var i = 0;

                while (obj.deals[i] != 'undefined') {
                    var div = document.createElement("div");
                    div.id = i.toString();
                    if (i % 2 == 0) {
                        div.className += 'format-div-odd';
                    }
                    else
                        div.className += 'format-div-even';


                    document.body.appendChild(div);
                    div.innerHTML = div.innerHTML = "HotelId :  " + obj.deals[i].hotelId + "<br>"
												+ "HotelName :  " + obj.deals[i].hotelName + "<br>"
												+ "Title : " + obj.deals[i].title + "<br>"
												+ "Description  :" + obj.deals[i].description + "<br>";
												
                    show_image(obj.deals[i].imageUrl, 300, 200,i);
                    i++;
                }
            }
        }
        function show_image(src, width, height,i) {
            var n = i.toString();
            var m = document.getElementById(n);
            var img = document.createElement("img");
            img.src = src;
            img.width = width;
            img.height = height;
            img.className += 'image';
            m.appendChild(img);
            //document.body.appendChild(img);
        }
        
        xmlhttp.open("GET", "http://dev-mystique.tavisca.com/api/deals/all?token=ym5gqryaupna30rugnosdint&$filter=Type eq 'hotel'", true);


        xmlhttp.send();
    }


    //------car-------

    btncar.onclick = function () {

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

                var i = 0;

                while (obj.deals[i] != 'undefined') {
                    var div = document.createElement("div");
                    div.id = i.toString();
                    if (i % 2 == 0) {
                        div.className += 'format-div-odd';
                    }
                    else
                        div.className += 'format-div-even';


                    document.body.appendChild(div);
                    div.innerHTML = "Rental CompanyName : " + obj.deals[i].rentalCompanyName + "<br>"
                                                        + "Rental CompanyCode :  " + obj.deals[i].rentalCompanyCode + "<br>"
                                                        + "Title : " + obj.deals[i].title + "<br>"
                                                        + "Description  :" + obj.deals[i].description + "<br>";
                                                       
                    show_image(obj.deals[i].imageUrl, 300, 200,i);
                    i++;
                }
            }
        }
        function show_image(src, width, height,i) {
            var n = i.toString();
            var m = document.getElementById(n);
            var img = document.createElement("img");
            img.src = src;
            img.width = width;
            img.height = height;
            img.className += 'image';
            m.appendChild(img);
            //document.body.appendChild(img);
        }

               
        
        xmlhttp.open("GET", "http://dev-mystique.tavisca.com/api/deals/all?token=ym5gqryaupna30rugnosdint&$filter=Type eq 'car'", true);
        

        xmlhttp.send();
    }



}//window end