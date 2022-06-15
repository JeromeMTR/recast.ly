import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});


///https://app-hrsei-api.herokuapp.com/api/recastly/videos?q={SEARCH-STRING}&youtube_api_key={YOUTUBE_API_KEY}
var searchYouTube = (query, callback = () => {}) => {
  // TODO
  $.ajax({
    //url
    url:`https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}&youtube_api_key=${YOUTUBE_API_KEY}`,
    //type : get
    type: 'GET',
    //data
    data: {order: '-createdAt'},
    //contenttype
    contentType: 'application/json',
    //success
    success: callback || function(data) {
      console.log('DATA:', data);
    },
    //error
    error: () => { throw new Error('Error you suck'); }
  });
};

export default searchYouTube;
