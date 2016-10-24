function update_list(response)
{
    var data = eval ("(" + response + ")");
    
    var person_info_frame_head = "<div id=\"nbPersonInfoFrameDiv";
    var person_info_frame_head1 = "\" class=\"nbPersonInfoFrameDiv\" style=\"cursor: pointer\" style=\"border: 1px solid rgb(226, 228, 227);\" onclick=\"onClickDetailPerson(";
    var person_info_frame_head2 = ")\" value=\"";
    var person_info_frame_head3 = "\">";
    var person_info_frame_tail = "</div>";
    var person_info_photo_head = "<div class=\"nbPersonPhoto_s\">";
    var person_info_photo_tail = "</div>";
    var person_info_banner = "<div class=\"nbPersonRightBanner\" style=\"background-color:#27aae1\"></div>";
    var person_info_info_head = "<div class=\"nbPersonInfoText\"><ul>";
    var person_info_info_tail = "</ul></div>";

    var inner_html = "";
    var undefine = "undefine";
    for (var i = 0; i < data.infos.length; i++) {
        var row = data.infos[i];
        var info_html = "";

        //info_html += "<li>" + row["year"] + "</li>";
        if (row["type"] != "") {
            if (row["type"].length > 30) {
                row["type"] = row["type"].substring(0, 30);
                row["type"] += "...";
            }
            info_html += "<li>" + row["type"] + "</li>";
        } else {
            info_html += "<li>" + undefine + "</li>";
        }

        if (row["author"] != "") {
            if (row["author"].length > 30) {
                row["author"] = row["author"].substring(0, 30);
                row["author"] += "...";
            }
            info_html += "<li>" + row["author"] + "</li>";
        } else {
            info_html += "<li>" + undefine + "</li>";
        }
        
        if (row["organization"] != "") {
            if (row["organization"].length > 30) {
                row["organization"] = row["organization"].substring(0, 30);
                row["organization"] += "...";
            }
            info_html += "<li>" + row["organization"] + "</li>";
        } else {
            info_html += "<li>" + undefine + "</li>";
        }

        inner_html += person_info_frame_head;
        inner_html += i;
        inner_html += person_info_frame_head1;
        inner_html += i;
        inner_html += person_info_frame_head2;
        inner_html += row["author"];
        inner_html += person_info_frame_head3;
        //inner_html += person_info_photo_head;

        //inner_html += person_info_photo_tail;
        //inner_html += person_info_banner;
        inner_html += person_info_info_head;
        inner_html += info_html;
        inner_html += person_info_info_tail;
        inner_html += person_info_frame_tail;
    }
    document.getElementById("nbPersonInfoList").innerHTML = inner_html;
}

function handle_result(response)
{
    var data = eval ("(" + response + ")");

    category = [];
    var i = 0;
    for (var key in data.type_count) {
        var row = {};
        if (key == "") {
            row["value"] = data.type_count[key];
            row["name"] = "null";
        } else {
            row["value"] = data.type_count[key];
            row["name"] = key;
        }
        category[i++] = row;
    }
    
    option.legend.data = category;
    option.series[0].data = category;
    myChart.setOption(option, true);
}

function load_info(params)
{
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("page_right_default").style.display="none";
            document.getElementById("page_right").style.display="block";
            document.getElementById("nbPersonInfoYear").innerHTML = params.name;
            handle_result(xmlhttp.responseText);
            update_list(xmlhttp.responseText);
        }
    }

    xmlhttp.open("GET", "pulitzer.php?year=" + params.name, true);
    xmlhttp.send();
}

function click_button1()
{
    document.getElementById("main_part2").style.display="none";
    document.getElementById("main_part3").style.display="none";
    document.getElementById("main_part1").style.display="block";
    
    document.getElementById("button1").src="jpg/button1_down.jpg";
    document.getElementById("button2").src="jpg/button2_up.jpg";
    document.getElementById("button3").src="jpg/button3_up.jpg";
}

function click_button2()
{
    document.getElementById("main_part1").style.display="none";
    document.getElementById("main_part3").style.display="none";
    document.getElementById("main_part2").style.display="block";

    document.getElementById("button1").src="jpg/button1_up.jpg";
    document.getElementById("button2").src="jpg/button2_down.jpg";
    document.getElementById("button3").src="jpg/button3_up.jpg";
}

function click_button3()
{
    document.getElementById("main_part1").style.display="none";
    document.getElementById("main_part2").style.display="none";
    document.getElementById("main_part3").style.display="block";

    document.getElementById("button1").src="jpg/button1_up.jpg";
    document.getElementById("button2").src="jpg/button2_up.jpg";
    document.getElementById("button3").src="jpg/button3_down.jpg";
}
