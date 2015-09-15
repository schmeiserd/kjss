# KJSS: Yeoman JavaScript Skeleton Generator 

> [Yeoman](https://yeoman.io) generator generates JavaScript Skeletons for simple JS modules
> Enables you to use a consistent JS module format in your projects
> (KJSS stands for KJSS JavaScript Skeleton)

## Get started

```
npm install -g generator-kjss
```

## What it does

The KJSS JavaScript Skeleton (KJSS) generator generates JavaScript skeletons for JavaScript modules.
There are two types of modules:

* DOM manipulating modules ("UI module") (Registered as [jQuery Plugins](https://learn.jquery.com/plugins/))
* "JavaScript only" modules ("Abstract module")

The generated skeletons provide a basic module structure which you will extend with business logic as needed.

## How to use

* Go to wherever you wan't to create a new JavaScript module
* Generate skeleton
```
yo kjss
```
* Answer the questions:
 * Will your module interact with a DOM element? If you say yes, a "UI module" skeleton will be generated
 * What's the name of your module?
 * Do you need the UI module wrapper file? This has to be included only once per project. If your project already contains one, you don't need it again. 

## Add to your project

* Add jQuery to your project
* If it's an UI module: add the UI module wrapper file
* Add your business logic to the skeleton
* Add the module (filename = <module name>.js)
* That's it!

## Credits
The KJSS generator was originally designed for a project @ [develop4edu GmbH](http://www.develop4edu.de/).
The basic module style is based on concepts from [jQuery Plugin Patterns](https://github.com/jquery-boilerplate/jquery-patterns).
