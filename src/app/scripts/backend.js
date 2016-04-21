import $ from 'jquery';

class Backend {

  getRequest(callbackFunction){
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    var flickrOptions = {
      tags: "guitar",
      format: "json"
    };

    $.getJSON(flickrAPI, flickrOptions, callbackFunction);
  }
}

export default Backend;
