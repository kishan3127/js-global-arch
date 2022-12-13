/* global */

// initialisation file for base
(function ($, util) {
  "use strict";

  let $html = $("html");

  function initializeUtils() {
    // initializes request utility
    util.analyticsInit.init();
  }

  $(function () {
    $html.addClass("working-script");
    // initialize specific utilities
    initializeUtils();
  });
})(base.$, base.util);
