var hero = $(".hero_area");
var menu = $(".custom_menu-container");
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
    } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
    }
});


var myCircle = Circles.create({
    id: "circles-1",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-2",
    radius: 65,
    value: 55,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-3",
    radius: 65,
    value: 65,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-4",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
function myFunction() {
    $(document).ready(() => {

        $('video').attr('controlsList', 'nodownload');
        
        });
        
        var x = document.getElementById("myDIV");
        var y = document.getElementById("myDIVNew");
        x.style.display = "none";
        y.style.display = "none";
        
   // if(($("#password").val() != 'Jalaj7' ) || ($("#password").val() != 'Jalaj77' )){
        if(($("#password").val() == 'ShubhVilla' ) ) {
            
                var x = document.getElementById("myDIV");
                if (x.style.display === "none") {
                x.style.display = "block";
                } else {
                x.style.display = "none";
                }
                getOwnerDetails()

        } else if(($("#password").val() == 'Jalaj77' ) ) {
            
                var y = document.getElementById("myDIVNew");
                if (y.style.display === "none") {
                y.style.display = "block";
                } else {
                y.style.display = "none";
                }
            
        } else {
                    
            alert('Please enter valid password.');
            var x = document.getElementById("myDIV");
            var y = document.getElementById("myDIVNew");
            x.style.display = "none";
            y.style.display = "none";
            $("#password").focus()
            return false;
        }
         
  }

  checkHttpReq()
function checkHttpReq(){	
	if (location.protocol == 'http:'){
	  location.href = location.href.replace("http","https");
	}
}
   