import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getDetails } from '../action';
import '../scss/details.scss';

class DetailsContainer extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getDetails(params.postId);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    const { detailsR} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="container">
              { 
                detailsR &&
                  <div className="post-card">
                    <div className="post-card__nav">
                      <ul>
                        <li>
                          <button type="button" className="btn arrow-position" onClick={(e) => this.goBack(e)} >
                            <i className="fa fa-chevron-circle-left"></i>wedweer
                          </button>
                        </li>
                      </ul>
                    </div>
          
                    <div className="post-card__content">
                      <div className="post-card__info">
                        { 
                          detailsR.details.owner &&
                          <img className="pull-right" src={detailsR.details.owner.avatar_url} alt=""/>
                        }
                        <h1 v-if="gist.title"> { detailsR.details.title } </h1>
                        <p> { detailsR.details.description } </p>
                        <a href={detailsR.details.html_url} >
                          Open Gist
                        </a>
                      </div>
                    </div>

                    <div className="post-card__img" id="post-card__img">
                      <div className="post-card__social">
                        <ul>
                          <li>
                            <i className="ion ion-chatbox"></i>
                            <span>
                              Comments &nbsp;
                              { detailsR.details.comments }
                            </span>
                          </li>
                          <li>
                            <i className="ion ion-heart"></i>
                            { detailsR.details.forks && 
                              <span>
                                Forks &nbsp;
                                { detailsR.details.forks.length }
                              </span>
                            }
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ DetailsR }) => ({
  detailsR: DetailsR
});

const mapDispatchToProps = {
  getDetails
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsContainer));