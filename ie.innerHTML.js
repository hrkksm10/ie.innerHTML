(function () {
    'use strict';

    if (/(msie|trident)/i.test(navigator.userAgent)) {
        var innerHTML = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
            Get = innerHTML.get, Set = innerHTML.set;
        Object.defineProperty(HTMLElement.prototype, "innerHTML", {
            get: function() {
                return Get.call(this);
            },
            set: function(value) {
                var childNodes = this.childNodes;
                while (childNodes.hasChildNodes()) {
                    this.removeChild(childNodes[0]);
                }
                Set.call(this, value);
            }
        });
    }
}());
