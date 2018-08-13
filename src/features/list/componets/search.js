import React from 'react';

const SearchGists = (props) => {
  return (
    <div className="PlayPause">
       <div className="row">
          <div className="col-4 offset-2">
            <button 
              type="button" 
              className="btn btn-lg" 
              onClick={(e) => props.getAll(e)}
            >
              Show all gists
            </button>
          </div>
          <div className="col-4 pull-right">
            <input 
              type="text" onKeyUp={(e) => props.getByUser(e)} 
              className="form-control margin-t-6" 
              placeholder="Search by user" />
          </div>
        </div>
    </div>
  )
}

export default SearchGists;
