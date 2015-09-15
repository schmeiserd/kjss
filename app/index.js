'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the excellent ' + chalk.red('KJSS') + ' generator!'
        ));

        var prompts = [
            {
                type: 'confirm',
                name: 'ui',
                message: 'Will your module interact with a DOM element?',
                default: true
            },
            {
                type: 'input',
                name: 'name',
                message: 'What\'s the name of your module?',
                default: 'MyModule'
            },
            {
                type: 'confirm',
                name: 'includeWrapper',
                message: 'Do you need the UI module wrapper file (only once per project)?',
                default: false
            }
        ];

        this.prompt(
            prompts,
            function (props) {
                this.props = props;
                done();
            }.bind(this)
        );
    },

    writing: {
        app: function () {
            var templatePath =
                this.props.ui
                    ? '_uiModule.js'
                    : '_abstractModule.js';

            this.fs.copyTpl(
                this.templatePath(templatePath),
                this.destinationPath(this.props.name + '.js'),
                {
                    moduleName: this.props.name
                }
            );

            if (this.props.includeWrapper) {
                this.fs.copy(
                    this.templatePath('UIModuleWrapper.js'),
                    this.destinationPath('UIModuleWrapper.js')
                );
            }
        }
    }
});
