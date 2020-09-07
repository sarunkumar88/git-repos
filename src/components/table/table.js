import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleItem } from '../../redux/master/master.actions';

import './table.scss';

const Table = ({ items, toggleItem, favorites }) => {
  console.log("fav", favorites)
  const tableLists = items.map((item, index) => 
    (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td><Link to={`/detail/${item.name}/contributors`}>{item.name}</Link></td>
        <td>{item.url}</td>
        <td>{item.owner.login}</td>
        <td>
          <a style={{cursor: 'pointer'}} onClick={() => toggleItem(item.id)}>
            {favorites ? favorites.includes(item.id) ? 'Remove Fav': 'Add to fav': 'Add to fav'}
            {console.log("fav", favorites)}
          </a>
        </td>
      </tr>
    )
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.I</th>
          <th>Repo Name</th>
          <th>Repo URL</th>
          <th>Author Name</th>
          <th>Favorites</th>
        </tr>
      </thead>
      <tbody>
        {
          tableLists
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  favorites: state.master.favorites
})

const mapDispatchToProps = dispatch => ({
  toggleItem: (id) => dispatch(toggleItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
