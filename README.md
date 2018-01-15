# Pattern Library Example
This is a example to show how to use [DaVanMonet](https://github.com/wezz/DaVanMonet) as a dependency.

It features a complete system where you can package your finished compiled css into a nuget or npm package for others to use. 
It also generates a website for previewing all your documented components.

## Configuration
The projects configuration is found in the configs/projectoptions.yml.

There you can specify what css files you want generated from your sources (/src) and add additional resources to your distribution.

The configs/web.config, configs/package.json files are put into the dist/web folder for when you want to deploy the pattern library website.
