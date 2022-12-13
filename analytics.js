(function (window, base, $) {
  base.util.analyticsInit = (function (base) {
    const CONST = {
      SELECTOR: {
        link: ".link",
      },
    };

    function bindEvents() {
      $(CONST.SELECTOR.link).on("click", function () {
        console.log("clicked");
      });
    }

    function init() {
      bindEvents();
    }

    return {
      init: init,
    };
  })(base);
})(window, base, base.$);
