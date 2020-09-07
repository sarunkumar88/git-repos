import React from 'react';
import './master.scss';

import Table from '../table/table';
import { fetchMasterAsyncStart } from '../../redux/master/master.actions';
import { connect } from 'react-redux';

class Master extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { masterList: { data, isFetching } } = this.props;

    return (
      <div className="master">
        <h1 className="title">Git Repos</h1>
        {
          isFetching ?
            (
              <div className="spinner-overlay">
                <div className="spinner-container"></div>
              </div>
            )
          : <Table items={data} />
        }
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  masterList: state.master
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchMasterAsyncStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Master);
