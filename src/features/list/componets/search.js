import React from 'react';

const SearchGists = (props) => {
  return (
    <div>
       <div className="row">
          <div>
            <button 
              type="button" 
              className="btn blue" 
              onClick={(e) => props.getAll(e)}
            >
              Show all gists
            </button>
          </div>
          <div className="col-md-6 pull-right">
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
