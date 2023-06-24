import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '..Home/Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onClick = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout Logout={this.onClick} />
          ) : (
            <Login Login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
