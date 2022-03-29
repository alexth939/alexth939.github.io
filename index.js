var width = $(window).width();
window.onscroll = function () {
    if ((width >= 1000)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background", "#fff");
            $("#header").css("color", "#000");
            $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding", "4vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid var(--main-theme-color)");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            $("#header").css("background", "transparent");
            $("#header").css("color", "#fff");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "6vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid #fff");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
}

var currentProjectPath;
function showCurProjAbout() {
    //$("#projectView").css("display","none");
    //$("#projectView").css("display", "flex");
    //$("#projectView").css("background", `url('') center center`);
}

function magnify(imglink, path) {
    currentProjectPath = path;
    document.getElementById('projectView').getElementsByTagName('iframe')[0].src = currentProjectPath;
    showCurProjAbout();

    //$("#img_here").css("background", `url('${imglink}') center center`);
    $("#magnify").css("display", "flex");
    //$("#magnify").addClass("animated fadeIn");
    setTimeout(function () {
        $("#magnify").css("opacity", "1");
        //$("#magnify").removeClass("animated fadeIn");
    }, 10);
    document.body.style = "overflow:hidden;";
}

function closemagnify() {
    currentProjectPath = '';
    document.getElementById('projectView').getElementsByTagName('iframe')[0].src = '';
    //$("#magnify").addClass("animated fadeOut");
        $("#magnify").css("opacity", "0");
    setTimeout(function () {
        $("#magnify").css("display", "none");
        //$("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background", `url('') center center`);
    }, 500);
    document.body.style = "overflow:auto;";
    //or not auto?
}

setTimeout(function () {
    //$("#loading").addClass("animated fadeOut");
    $("#loading").css("opacity", "0");
    setTimeout(function () {
        //$("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 1000);
}, 1650);

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
});
