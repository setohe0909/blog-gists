import React from 'react';

const searchClass = {
  fontWeight: '900',
  margin: '20px 0px 20px 56px'
};

const inputSearch ={
  border: '1px solid black',
  marginTop: '10px',
  width: '50%'
}; 

const SearchGists = props => {
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
          <div style={searchClass}> OR </div>
          <div className="col-md-6 pull-left">
            <strong>Gists by user: </strong>
            <input 
              type="text" onKeyUp={(e) => props.getByUser(e)} 
              className="form-control margin-t-2"
              style={inputSearch} 
              placeholder="Search" />
          </div>
        </div>
    </div>
  )
}

export default SearchGists;
