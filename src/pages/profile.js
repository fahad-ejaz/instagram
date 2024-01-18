import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import UserProfile from '../components/profile';
import OverLay from '../components/overlay';
import LoggedInUserContext from '../context/logged-in-user';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();
  // const { user, setActiveUser } = useUser(null);

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      if (user?.userId) {
        setUser(user);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, history]);

  return user?.username ? (
    <LoggedInUserContext.Provider value={{ user, setUser }}>
      <div className="bg-gray-background">
        <Header />
        <OverLay />
        <div className="mx-auto max-w-screen-lg">
          <UserProfile user={user} />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  ) : null;
}
