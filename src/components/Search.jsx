import exampleVideoData from '../data/exampleVideoData.js';
var Search = (props) => {


  return (

    <div className="search-bar form-inline">
      <input className="form-control" type="text" defaultValue='' onChange={props.searchBar.bind(this)} />
      <button className="btn hidden-sm-down" onClick={props.submitSearch.bind(null, exampleVideoData)} >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;