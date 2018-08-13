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
        <button type="button" className="btn arrow-position" onClick={(e) => this.goBack(e)} >
          Press to go back!
        </button>
        { 
          detailsR &&
            <div className="card-details">
              { 
                detailsR.details.owner &&
                  <div className="card-header">
                    <h1 className="card-title">
                      {detailsR.details.owner.login}
                    </h1>
                    <p className="card-subtitle">
                      {detailsR.details.owner.html_url}
                    </p>
                    <img title="profile" alt="img" src={detailsR.details.owner.avatar_url} />
                  </div>
              }
              <div className="card-body">
                <p>
                  {detailsR.details.description} 
                </p>
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
              <div className="card-footer">
                <span className="footer-note">
                  <a href={detailsR.details.html_url} >
                    Open Gist
                  </a>
                </span>
              </div>
            </div>  
        }
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
