/**
 * Contains the code we use for logging telemetry.
 */

// Make sure we run this code when the page has finished loading
// and all its components can be reached via code.
window.addEventListener("load", function (e) {
    // Subscription button
    $(".navbar-header > a.navbar-brand.topnav").click(function() {
        console.log("Clicked");
    });

    // Top navigation right buttons
    $(".navbar-nav.navbar-right > li:nth-child(1) > a").click(function() {
        console.log("Clicked");
    });
    $(".navbar-nav.navbar-right > li:nth-child(2) > a").click(function() {
        console.log("Clicked");
    });
    $(".navbar-nav.navbar-right > li:nth-child(3) > a").click(function() {
        console.log("Clicked");
    });

    // Social media buttons on top
    $(".intro-social-buttons > li:nth-child(1) > a").click(function() {
        console.log("Clicked");
    });
    $(".intro-social-buttons > li:nth-child(2) > a").click(function() {
        console.log("Clicked");
    });
    $(".intro-social-buttons > li:nth-child(3) > a").click(function() {
        console.log("Clicked");
    });

    // Social media buttons on bottom
    $(".banner-social-buttons > li:nth-child(1) > a").click(function() {
        console.log("Clicked");
    });
    $(".banner-social-buttons > li:nth-child(2) > a").click(function() {
        console.log("Clicked");
    });
    $(".banner-social-buttons > li:nth-child(3) > a").click(function() {
        console.log("Clicked");
    });

    // Bottom navigation left buttons
    $("footer .col-lg-12 > .list-inline > li:nth-child(1) > a").click(function() {
        console.log("Clicked");
    });
    $("footer .col-lg-12 > .list-inline > li:nth-child(3) > a").click(function() {
        console.log("Clicked");
    });
    $("footer .col-lg-12 > .list-inline > li:nth-child(5) > a").click(function() {
        console.log("Clicked");
    });
    $("footer .col-lg-12 > .list-inline > li:nth-child(7) > a").click(function() {
        console.log("Clicked");
    });
});

//////////////////////////////
///// Set of utility functions
//////////////////////////////

// Log custom events
function logTelemetryEvent() {

}
