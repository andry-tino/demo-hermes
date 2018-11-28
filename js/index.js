/**
 * Contains the code we use for logging telemetry.
 */

// Make sure we run this code when the page has finished loading
// and all its components can be reached via code.
window.addEventListener("load", function (e) {
    $(".navbar-header > a.navbar-brand.topnav").click(function() {
        console.log("Clicked");
    });
});

//////////////////////////////
///// Set of utility functions
//////////////////////////////

// Log custom events
function logTelemetryEvent() {

}
