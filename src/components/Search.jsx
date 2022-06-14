var Search = (value) => {


  var handleChange = event => {
    console.log('eventTarg:', event.target, 'eventVal:', event.target.value);
    var text = event.target.value;
    this.state.searchText = event.target.value;
  };


  return (

    <div className="search-bar form-inline">
      <input className="form-control" type="text" defaultValue='' onChange={handleChange.bind(this)} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;