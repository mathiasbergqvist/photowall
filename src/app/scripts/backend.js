import $ from 'jquery';

class Backend {

  getImages(callbackFunction, searchPhrase){
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    var flickrOptions = {
      tags: searchPhrase,
      format: "json"
    };

    $.getJSON(flickrAPI, flickrOptions, callbackFunction)
      .fail(() => {
        console.error("An error occured when trying to connect to Flickr api.");
        throw "Error";
      });
  }
}

export default Backend;
