import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/reducer';



export class AllUsers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  async componentDidMount () {
    await this.props.fetchUsers();
  }


  render() {
    let users = this.props.users;

    let allUsers = 'Loading...';
    if (users.length) {
      allUsers = users.map(user => {
        return (
          
          <div key={ user.id }>
            <div> { user.name} </div>
          </div>
        )
      });
    }
    return (
      <div id ="all-users">
        <h1>Users</h1>
        <div>{ allUsers }</div>
      </div>
    )
  }
};

// ------ Map State & Dispatch
const mapState = (state) => {
  console.log('Mapping state to props: ', state);
  return {
    users: state.users
  };
};

const mapDispatch = (dispatch) => {
  console.log('mapping dispatch to props');
  return {
    fetchUsers: () => {dispatch(fetchUsers())},
  };
};

export default connect(mapState, mapDispatch)(AllUsers);