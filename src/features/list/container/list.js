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
      <div className="">
        <div className="row">
          <div className="col-4 offset-2">
            <button type="button" className="btn btn-lg" onClick={(e) => this.getAll(e)}>
              Get All
            </button>
          </div>
          <div className="col-4 pull-right">
            <input type="text" onKeyUp={(e) => this.getByUser(e)} className="form-control margin-t-6" placeholder="Get By User" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            {
              ListR.allGists.length > 0 &&
                ListR.allGists.map((item, index) => {
                  return (
                    <div key={index} className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-2">
                              { item.owner &&
                                <img src={item.owner.avatar_url} alt={index} />
                              }
                            </div>
                            <div className="col-4">
                              <label>
                                {item.description}
                              </label>
                            </div>
                            <div className="col-3">
                              <label>
                                {item.updated_at}
                              </label>
                            </div>
                            <div className="col-2">
                              <label>
                                {item.comments}
                              </label>
                            </div>
                            <div className="col-1">
                              <button 
                                type="button" 
                                className="btn btn-lg" 
                                onClick={(e) => this.showDetails(e, item.id)}
                              >
                                <i className="fa fa-chevron-circle-right" />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })
            }
          </div>
        </div>

        <ul className="cards">
          <li className="cards__item">
              <div className="card">
                <div className="card__image card__image--fence"></div>
                <div className="card__content">
                    <div className="card__title">Flex</div>
                    <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                    <button className="btn btn--block card__btn">Button</button>
                </div>
              </div>
          </li>
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
