; // semi-colon is a safety net against concatenated scripts and/or other modules which may not be closed properly.
(function ($) {
    // TODO: Create default values for settings
    var _defaults = {
        answer: 42
    };

    /**
     * TODO: The module <%= moduleName %> does things.
     *
     * How to use:
     * - Create instance of <%= moduleName %>:
     *   var myModule = new <%= moduleName %>({
     *     halfAnswer: 21
     *   });
     * - Call method foo of module instance
     *   console.log(myModule.foo('bar'));
     *
     * @type {{init: Function, foo: Function}}
     */
    var <%= moduleName %> = {
        /**
         * initial method to set up module
         */
        init: function () {
            // always start a function with this line to have access to this (as self) in whole function scope
            var self = this;

            // TODO: check required settings here
            if (this.settings.halfAnswer == null) {
                jQuery.error('Required setting "halfAnswer" can not be empty');
            }

            // TODO: do things to set up

            // use defaults and other settings from instantiation
            console.log(self.settings.answer);
            console.log(self.settings.halfAnswer);
        },

        /**
         * TODO: Write your own functions here
         */

        /**
         * A public function
         * @param bar
         */
        foo: function (bar) {
            var self = this;
            // do things here
            console.log(bar, self);
        },

        /**
         * A private function
         * @private
         */
        _foo2: function () {
            // do things here
        }
    };

    /**
     * [auto-generated code]
     * The actual module constructor
     *
     * @param options
     * @constructor
     */
    function <%= moduleName %>Constructor(options) {
        this.settings = $.extend({}, _defaults, options);
        this.init();
    }

    /**
     * [auto-generated code]
     * Avoid Module.prototype conflicts
     */
    $.extend(<%= moduleName %>Constructor.prototype, <%= moduleName %>);

    /**
     * [auto-generated code]
     * A module wrapper
     *
     * @param options
     * @returns {<%= moduleName %>Constructor}
     * @constructor
     */
    window.<%= moduleName %> = function (options) {
        return new <%= moduleName %>Constructor(options);
    };

})(jQuery, window, document);