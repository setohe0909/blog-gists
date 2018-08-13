import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
  getAllGists, 
  getGistsByUser } from '../action';

import '../scss/list.scss';

class ListContainer extends Component {

  getAll = (e) => {
    e.preventDefault();
    this.props.getAllGists();
  }

  showDetails = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/details/${id}`);
  }

  getByUser = (e) => {
    e.preventDefault();
    if (e.target.value.length > 3) {
      this.props.getGistsByUser(e.target.value);
    }
  }

  render() {
    const { ListR } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-4 offset-2">
            <button type="button" className="btn btn-lg" onClick={(e) => this.getAll(e)}>
              Show all gists
            </button>
          </div>
          <div className="col-4 pull-right">
            <input type="text" onKeyUp={(e) => this.getByUser(e)} className="form-control margin-t-6" placeholder="Search by user" />
          </div>
        </div>
        <br />
        <ul className="cards">
            { ListR.allGists.length > 0 &&
              ListR.allGists.map((item, index) => {
                return (
                  <li key={index} className="cards__item">
                    <div className="card">
                      { item.owner ?
                          <div 
                            className="card__image" 
                            style={{ backgroundImage: `url(${item.owner.avatar_url})`}} />
                          :
                          <div className="card__image card__image--default" />
                      }
                      <div className="card__content">`
                        <div className="card__title">{item.owner.login}</div>
                        <p className="card__text">
                          {item.description}
                          <br />
                          <label>
                            <strong>Comments: </strong>{item.comments}
                          </label>
                          <br />
                          <label>
                            <strong>Last update: </strong>{item.updated_at}
                          </label>
                        </p>
                        <button 
                          onClick={(e) => this.showDetails(e, item.id)} 
                          className="btn btn--block card__btn"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                </li>);
              })
            }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ ListR }) => ({
  ListR: ListR
});

const mapDispatchToProps = {
  getAllGists, 
  getGistsByUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer));
