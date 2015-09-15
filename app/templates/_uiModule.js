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
     * - Instantiate <%= moduleName %> with options
     *   $('.plugin').<%= moduleName %>({
     *     halfAnswer: 21
     *   });
     * - Call method foo on <%= moduleName %> with argument bar
     *   $('.plugin').<%= moduleName %>('foo', 'bar');
     * - Get setting answer on <%= moduleName %>
     *   $('.plugin').<%= moduleName %>('answer');
     * - Set setting answer on <%= moduleName %>
     *   $('.plugin').<%= moduleName %>('answer', 43);
     *
     * @type {{init: Function, foo: Function, _foo2: Function}}
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
            // e.g. find a sub-element and interact with it
            var sub = $(self.element).find('#sub');
            sub.hide();
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
            var sub = $(self.element).find('#sub');
            sub.show();
            console.log(bar);
        },

        /**
         * A private function
         * @private
         */
        _foo2: function () {
            // do things
        }
    };

    /**
     * [auto-generated code]
     * The actual module constructor
     *
     * @param element
     * @param options
     * @constructor
     */
    function <%= moduleName %>Constructor(element, options) {
        this.element = element;
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
     * - preventing against multiple instantiations and
     * - handling method calls and
     * - magic getter & setter
     *
     * @returns {*}
     * @constructor
     */
    $.fn.<%= moduleName %> = function () {
        window.uiModuleWrapper = window.uiModuleWrapper || new UIModuleWrapper({});
        return window.uiModuleWrapper.handle("<%= moduleName %>", <%= moduleName %>Constructor, this, arguments);
    };

})(jQuery, window, document);