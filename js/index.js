/**
 * Contains the code we use for logging telemetry.
 */

// Make sure we run this code when the page has finished loading
// and all its components can be reached via code.
window.addEventListener("load", function (e) {
    // Subscription button
    $(".navbar-header > a.navbar-brand.topnav").click(function() {
        logEvent("action-subscription");
    });

    // Top navigation right buttons
    $(".navbar-nav.navbar-right > li:nth-child(1) > a").click(function() {
        logEvent("action-about-top");
    });
    $(".navbar-nav.navbar-right > li:nth-child(2) > a").click(function() {
        logEvent("action-services-top");
    });
    $(".navbar-nav.navbar-right > li:nth-child(3) > a").click(function() {
        logEvent("action-contact-top");
    });

    // Social media buttons on top
    $(".intro-social-buttons > li:nth-child(1) > a").click(function() {
        logEvent("action-twitter-top");
    });
    $(".intro-social-buttons > li:nth-child(2) > a").click(function() {
        logEvent("action-github-top");
    });
    $(".intro-social-buttons > li:nth-child(3) > a").click(function() {
        logEvent("action-linkedin-top");
    });

    // Social media buttons on bottom
    $(".banner-social-buttons > li:nth-child(1) > a").click(function() {
        logEvent("action-twitter-bottom");
    });
    $(".banner-social-buttons > li:nth-child(2) > a").click(function() {
        logEvent("action-github-bottom");
    });
    $(".banner-social-buttons > li:nth-child(3) > a").click(function() {
        logEvent("action-linkedin-bottom");
    });

    // Bottom navigation left buttons
    $("footer .col-lg-12 > .list-inline > li:nth-child(1) > a").click(function() {
        logEvent("action-home-bottom");
    });
    $("footer .col-lg-12 > .list-inline > li:nth-child(3) > a").click(function() {
        logEvent("action-about-bottom");
    });
    $("footer .col-lg-12 > .list-inline > li:nth-child(5) > a").click(function() {
        logEvent("action-services-bottom");
    });
    $("footer .col-lg-12 > .list-inline > li:nth-child(7) > a").click(function() {
        logEvent("action-contact-bottom");
    });
});

//////////////////////////////
///// Set of utility functions
//////////////////////////////

// Log custom events
function logEvent(name) {
    if (!name) return;

    appInsights.trackEvent(name);
}
