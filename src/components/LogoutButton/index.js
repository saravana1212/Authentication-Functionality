// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const LogoutButton = props => {
  const onLogoutBtn = () => {
    const history = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onLogoutBtn}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
