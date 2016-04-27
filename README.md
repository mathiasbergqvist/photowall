# Photowall

## Introduction
Photowall is a web application that displays photos from the [Flickr API](https://www.flickr.com/services/api/).

## Version
The current version is `1.0.0`.  

## Installation
The user needs to have the package manager [NPM](https://www.npmjs.com/) installed in order to run the application.
To start the application, navigate to the root folder of the project and run the command `npm run dev` in the terminal. The application will start running locally at `http://localhost:9500/`.

## User Guide
The application will display photos in a carousel view and a grid view. 20 photos at a time will be fetched from Flickr.

 To navigate between displayed photos in the carousel view, use the chevron icons. The currently displayed photo will be marked in the grid view as well. Clicking on a photo in the grid view will display the photo in the carousel view.

 Use the search field to search for new photos. The default category of displayed photos is "New York".

## Implementation
The application is built using the JavaScript framework `React`, developed by `Facebook`. Packages is managed using the package manager `npm`. Styling is managed using the CSS pre-processor `Less` along with the third party library `Bootstrap`.

The application manages all its bundle dependencies and hosting using the module bundeler `webpack`. As the application is built using the ECMAScript standard `es6` and the JavaScript syntax extension `JSX`, the compiler `Babel` is used to transform the source code into JavaScript code that can be interprited by the browser. Module loaders os also set up to compile `less` into `css`.

The output of the build will be present in the folder `build`.
     
## Author
Mathias Berggqvist, [mathias.bergqvist@omegapoint.se](mathias.bergqvist@omegapoint.se)
