import React from 'react';
import './detail.scss';

import Card from '../card/card';
import { fetchDetailAsyncStart } from '../../redux/detail/detail.actions';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  componentDidMount() {
    const { getContributors, masterList, match: { params: { repoId } } } = this.props;
    const repo = masterList.find(val => val.name === repoId);

    getContributors(repo.contributors_url);
  }

  render() {
    const { contributorsList: { data, isFetching } } = this.props;

    return (
      <div className="detail">
        <h2 className="title">Contributors</h2>
        <div className="link"><Link to="/">Back to Home</Link></div>
        {
          isFetching ?
            (
              <div className="spinner-overlay">
                <div className="spinner-container"></div>
              </div>
            )
          : data.length ? data.map(item => <Card key={item.id} items={item} />) : 'No contributors found'
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  masterList: state.master.data,
  contributorsList: state.detail
})

const mapDispatchToProps = dispatch => ({
  getContributors: url => dispatch(fetchDetailAsyncStart(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
