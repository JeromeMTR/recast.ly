import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYoutube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      searchText: 'JS'
    };
  }



  changeVideo(video) {
    this.setState({currentVideo: video});
  }
  // create search functioin
  // get value inside search bar
  // change the search text to that value
  search(event) {
    clearTimeout(test);
    console.log('text:', event.target.value);
    this.setState({searchText: event.target.value});
    //set timeout 500ms
    var test = (setTimeout(searchYouTube(event.target.value,this.setState.bind(this, ({videos: data}), 500))));
  }



  changeList(list) {
    //take in example video data
    // define array thatll be new list of hits from search
    var newList = [];
    // forEach videoObj  (in the example array)
    list.forEach((video) => {
      //  if videoObj.snippet.title || videoObj snippet description
      if (video.snippet.title || video.snippet.description) {
        //  check if videoObj snippet title || videoobj snippet description includes state.text
        if (video.snippet.title.toLowerCase().includes(this.state.searchText.toLowerCase()) || video.snippet.description.toLowerCase().includes(this.state.searchText.toLowerCase())) {
          //    if true push to new list
          newList.push(video);
        }
      }
    });
    //
    //when finished looping set state of videos to be new list
    this.setState({videos: newList});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search value={this.state.searchText} searchBar={this.search.bind(this)} submitSearch={this.changeList.bind(this)}/> {/* <div><h5><em>search</em> view goes here</h5></div> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* video = this.state.currentVideo */}
            <VideoPlayer video={this.state.currentVideo}/>                             {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} appFunc={this.changeVideo.bind(this)}/>  {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
