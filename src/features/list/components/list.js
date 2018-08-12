import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllGists } from '../action';

class ListContainer extends Component {

  getAll = (e) => {
    e.preventDefault();
    this.props.getAllGists();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <button type="button" className="btn btn-lg" onClick={(e) => this.getAll(e)}>
              Get All
            </button>
          </div>
          <div className="col-4 pull-right">
            <input type="text" v-model="user" className="form-control margin-t-6" placeholder="Get By User" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <div className="card" v-if="postList.length > 0">
              <ul className="list-group list-group-flush">
                <li>
                  <div className="row">
                    <div className="col-2">
                      <h3>Avatar</h3>
                    </div>
                    <div className="col-4">
                      <h3>Description</h3>
                    </div>
                    <div className="col-3">
                      <h3>Last Update</h3>
                    </div>
                    <div className="col-2">
                      <h3>Comments</h3>
                    </div>
                  </div>
                </li>
                {/* <li className="list-group-item">
                  <div className="row">
                    <div className="col-2">
                      <img v-if="post.owner" />
                    </div>
                    <div className="col-4">
                      <label></label>
                    </div>
                    <div className="col-3">
                      <label></label>
                    </div>
                    <div className="col-2">
                      <label></label>
                    </div>
                    <div className="col-1">
                      <button type="button" className="btn btn-lg">
                        <i className="fa fa-chevron-circle-right" />
                      </button>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ListR }) => ({
  ListR: ListR
});

const mapDispatchToProps = {
  getAllGists
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
