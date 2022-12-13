/**
 * @fileOverview Set up base namespace
 */

/**
 * @namespace
 */
var base = window.base || {};

/**
 * @namespace
 */
base.comp = base.comp || {};

/**
 * @namespace
 */
base.util = base.util || {};

/**
 * @fileOverview clean up 3rd party lib namespaces that pollute the global scope
 * e.g. Remove jQuery from the global scope so that two vesions of jQuery can coexist
 */
(function () {
  "use strict";
  // Namespace jQuery so it doesn't clash with other jquery versions
  base.$ = jQuery.noConflict();

  // window.$ = window.jQuery = null;
})();

/**
 * @fileOverview Provides functionality for the type of wcmmode
 */

(function (base, $, util) {
  ("use strict");

  /**
   * Utility for performing custom validations
   * @memberof base.util
   */

  util.analytics = (function (param) {
    /**
     * Function to check valid email input against an email regex.
     * @memberof base.util.analytics
     * @public
     * @param {string} email is the input email string to check for validation.
     * @return {boolean}
     */
    function sendDataToDataLayer(test) {
      console.log(test);
    }

    /**
     * Function to check if the object is empty or not
     * @memberof base.util.analytics
     * @public
     * @param {string} obj is the input object to check if any property is associated to it or not.
     * @return {boolean}
     */

    return {
      sendDataToDataLayer: sendDataToDataLayer,
    };
  })();
})(base, base.$, base.util);
