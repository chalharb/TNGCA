/**
 * Created by logan on 3/15/2016.
 */
var app = (function () {
    'use strict';

    var s;
    return {
        settings: {
            document: $(document),
            pathname: window.location.pathname,
            html: $('html')
        },

        init: function () {
            s = this.settings;

            // RUN ALWAYS
            this.initSplashSlider();

            var segmentArray = s.pathname.replace(/(^\/)|(\/$)/g, '').split('/');
            s['segment_1'] = segmentArray[0];
            s['segment_2'] = segmentArray[1];

            switch (s.segment_1) {
                case "":
                    // this.initSplashSlider();
                    break;
                case "":
                    break;
                default:
                    break;
            }
        },


        initSplashSlider: function(){
            $('.splash').slick({
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                dots: false,
                infinite: true,
                speed: 500
            });
        }
    }
})();

$(function () {
    app.init();
});
//# sourceMappingURL=app.js.map
