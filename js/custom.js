$(function () {
    $('.aj-nav').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).next().slideToggle();
    });

    // Bootstrap Table Class
    $('table').addClass('table');

    // Responsive menu spinner
    $('#menu-spinner-button').click(function () {
        $('#sub-nav-collapse').slideToggle();
    });

    // Catch browser resize
    $(window).resize(function () {
        // Remove transition inline style on large screens
        if ($(window).width() >= 768)
            $('#sub-nav-collapse').removeAttr('style');
    });
});

// gilm (testfairy)
$(document).ready(function() {
    $("div.method button.expand").click(function(e) {
        $(e.currentTarget).blur();

        var description = $(e.currentTarget).closest(".method").next();
        if (description.hasClass("hidden")) {
            // currently hidden, show
            description.removeClass("hidden");
            $(e.currentTarget).text("▼");
        } else {
            // currently visible, hide
            description.addClass("hidden");
            $(e.currentTarget).text("▶");
        }

        e.preventDefault();
    });
});

// gilm (testfairy)
$(document).ready(function() {
    $(".docs-tabs.w-tabs .w-tab-link").click(function(e) {
        var currentTarget = $(e.currentTarget);
        var parent = currentTarget.parent();
        var tabContent = parent.siblings(".w-tab-content");
        var tab_name = currentTarget.data("w-tab");

        parent.children(".w--current").removeClass("w--current");
        currentTarget.addClass("w--current");

        tabContent.children(".w--tab-active").removeClass("w--tab-active");
        tabContent.children(".w-tab-pane[data-w-tab=" + tab_name + "]").addClass("w--tab-active");
    });

    if (window.location.hash) {
      var tab_name = "tab-" + window.location.hash.split('#')[1];
      if ($("a[data-w-tab='" + tab_name + "']").length > 0) {
        $(".w--current").removeClass("w--current");
        $("a[data-w-tab='" + tab_name + "']").addClass("w--current");

        $(".w--tab-active").removeClass("w--tab-active");
        $(".w-tab-pane[data-w-tab=" + tab_name + "]").addClass("w--tab-active");
      }
    }
});

//Fix GitHub Ribbon overlapping Scrollbar
var t = $('#github-ribbon');
if (t[0] && $('article')[0].scrollHeight > $('.right-column').height()) t[0].style.right = '16px';

//Toggle Code Block Visibility
function toggleCodeBlocks() {
    var t = localStorage.getItem("toggleCodeStats")
    t = (t + 1) % 3;
    localStorage.setItem("toggleCodeStats", t);
    var a = $('.content-page article');
    var c = a.children().filter('pre');
    var d = $('.right-column');
    if (d.hasClass('float-view')) {
        d.removeClass('float-view');
        $('#toggleCodeBlockBtn')[0].innerHTML = "Hide Code Blocks";
    } else {
        if (c.hasClass('hidden')) {
            d.addClass('float-view');
            c.removeClass('hidden');
            $('#toggleCodeBlockBtn')[0].innerHTML = "Show Code Blocks Inline";
        } else {
            c.addClass('hidden');
            $('#toggleCodeBlockBtn')[0].innerHTML = "Show Code Blocks";
        }
    }
}

if (localStorage.getItem("toggleCodeStats") >= 0) {
    var t = localStorage.getItem("toggleCodeStats");
    if (t == 1) {
        toggleCodeBlocks();
        localStorage.setItem("toggleCodeStats", 1);
    }
    if (t == 2) {
        toggleCodeBlocks();
        toggleCodeBlocks();
        localStorage.setItem("toggleCodeStats", 2);
    }
} else {
    localStorage.setItem("toggleCodeStats", 0);
}
