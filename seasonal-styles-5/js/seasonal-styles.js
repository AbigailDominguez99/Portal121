$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        $("html").css("background-color","#2B7129")
        $("#wear").attr("src","images/spring-wear.jpg")
        $("#logo").attr("src","images/spring.gif")
        $("header h3").text("Jump into Spring");

        $("html").css("background-color","#EBA52B")
        $("#wear").attr("src","images/summer-wear.jpg")
        $("#logo").attr("src","images/summer.gif")
        $("header h3").text("Jump into Summer");

        $("html").css("background-color","#A81124")
        $("#wear").attr("src","images/summer-wear.jpg")
        $("#logo").attr("src","images/summer.gif")
        $("header h3").text("Jump into Summer");

        $("html").css("background-color","#EBA52B")
        $("#wear").attr("src","images/summer-wear.jpg")
        $("#logo").attr("src","images/summer.gif")
        $("header h3").text("Jump into Summer");

    });
});