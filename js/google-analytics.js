/* Google Analytics tag tracking from an "enter" keydown, mousedown, or mobile tap event. The ASCII control code for "enter" is 13 */
function setGoogleAnalyticsEnterKeydown(jQuerySelector) {
    $(jQuerySelector).on("keydown mousedown", function () {
        if ((event.type === "keydown" && event.which === 13) || event.type === "mousedown") {
            ga('send', 'event', jQuerySelector, 'hit');
        }
    });
}
