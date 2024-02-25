import { FormattedMessage} from "react-intl";
import UserList from '../UserList/UserList';

const Users = () => {
  return(
    <div>
      <h1><FormattedMessage id='users:title' /></h1>
      <UserList></UserList>
    </div>
  )
}

export default Users;