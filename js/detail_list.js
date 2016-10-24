function checkScrollStatus()
{
    /*
    var scrollTopNum = $("#nbPersonInfoList").scrollTop();
    //var currentYearListHeight = currentYearData.length * 85;
    
    if(scrollTopNum == 0)
    {
        $(".nbPersonInfoRollUp").css("background-image","url('http://file.caixin.com/datanews/nobel_v3/images/personInfoRollUp_u.gif')");
    }
    
    if(scrollTopNum > 0)
    {
        $(".nbPersonInfoRollUp").css("background-image","url('http://file.caixin.com/datanews/nobel_v3/images/personInfoRollUp.gif')");
    }
    
    if(scrollTopNum < currentYearListHeight - 430)
    {
        $(".nbPersonInfoRollDown").css("background-image","url('http://file.caixin.com/datanews/nobel_v3/images/personInfoRollDown.gif')");
    }
    
    if(scrollTopNum ==  currentYearListHeight - 430)
    {
        $(".nbPersonInfoRollDown").css("background-image","url('http://file.caixin.com/datanews/nobel_v3/images/personInfoRollDown_u.gif')");
    }
    */
}

function personListUp()
{
    $("#nbPersonInfoList")
    .animate(
        {scrollTop: "-=85px"},
        500,"linear",checkScrollStatus
    );

}

function personListDown()
{
    $("#nbPersonInfoList")
    .animate(
        {scrollTop: "+=85px"},
        500,"linear",checkScrollStatus
    );
}

function onClickDetailYear()
{
    var year = document.getElementById("nbPersonInfoYear").innerHTML;
    window.open('http://www.pulitzer.org/prize-winners-by-year/' + year)
}

function onClickDetailPerson(id)
{
    var name = document.getElementById("nbPersonInfoFrameDiv" + id).getAttribute("value");
    name = name.replace(/^\s+/, "");
    name = name.replace(/\s/g, "-");
    window.open('http://www.pulitzer.org/winners/' + name);
}
