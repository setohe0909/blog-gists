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
      <div class="container">
        <div class="row">
          <div class="col-4 offset-2">
            <button type="button" class="btn btn-lg" onClick={(e) => this.getAll(e)}>
              Get All
            </button>
          </div>
          <div class="col-4 pull-right">
            <input type="text" v-model="user" class="form-control margin-t-6" placeholder="Get By User" />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-12">
            <div class="card" v-if="postList.length > 0">
              <ul class="list-group list-group-flush">
                <li>
                  <div class="row">
                    <div class="col-2">
                      <h3>Avatar</h3>
                    </div>
                    <div class="col-4">
                      <h3>Description</h3>
                    </div>
                    <div class="col-3">
                      <h3>Last Update</h3>
                    </div>
                    <div class="col-2">
                      <h3>Comments</h3>
                    </div>
                  </div>
                </li>
                {/* <li class="list-group-item">
                  <div class="row">
                    <div class="col-2">
                      <img v-if="post.owner" />
                    </div>
                    <div class="col-4">
                      <label></label>
                    </div>
                    <div class="col-3">
                      <label></label>
                    </div>
                    <div class="col-2">
                      <label></label>
                    </div>
                    <div class="col-1">
                      <button type="button" class="btn btn-lg">
                        <i class="fa fa-chevron-circle-right" />
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
