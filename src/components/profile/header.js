/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable */
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import useUser from '../../hooks/use-user';
import { isUserFollowingProfile, toggleFollow, getUserByUserId } from '../../services/firebase';
import UserContext from '../../context/user';
import { DEFAULT_IMAGE_PATH } from '../../constants/paths';
import OverLay from '../overlay';
import { updateFollowedUserFollowers, updateLoggedInUserFollowing } from '../../services/firebase';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Header({
  photosCount,
  followerCount,
  setFollowerCount,
  followingCount,
  setFollowingCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    followers,
    following,
    username: profileUsername
  },
  setProfile,
}) {

 
  // const [unFollowed, setUnFollowed] = useState(false);
  const { setUser } = useContext(LoggedInUserContext);
  const { user: loggedInUser } = useContext(UserContext);
  let { user } = useUser(loggedInUser?.uid);
  const [isFollowingProfile, setIsFollowingProfile] = useState(null);
  const activeBtnFollow = user?.username && user?.username !== profileUsername;
  const [unFollowed, setUnFollowed] = useState(false);
  const [openOverLay, setOpenOverLay] = useState(false);
  const [overLayData, setOverLayData] = useState(null)
  

  console.log(loggedInUser.user)
  console.log(user)

  async function handleUnFollowUser(profileDocId, profileId) {
    setUnFollowed(true);
    await updateLoggedInUserFollowing(user.docId, profileId, true);
    await updateFollowedUserFollowers(profileDocId, user.userId, true);
    setOpenOverLay(true)
    const [userUpdated] = await getUserByUserId(user.userId);
    setProfile({profile: userUpdated })
    // setUser(userUpdated)
    following = userUpdated.following;
    setFollowingCount({followingCount: followingCount - 1})
    getProfiles(following, "Following")
    // setUser(null);
    
    console.log(following)
  }

  async function handleRemoveFollowers(profileDocId, profileId) {
    // setUnFollowed(true);
    await updateLoggedInUserFollowing(profileDocId, user.userId, true);
    await updateFollowedUserFollowers(user.docId, profileId, true);
    await getProfiles(followers, "Followers")
    // const [user22] = await getUserByUserId(user.userId);
    // setUnFollowed(true);
    setOpenOverLay(true)
    const [userUpdated] = await getUserByUserId(user.userId);
    setProfile({profile: userUpdated })
    // setUser(userUpdated)
    let followersUpdated = userUpdated.followers;
    setFollowerCount({followerCount: followerCount-1})
    getProfiles(followersUpdated, "Followers")
  }

  // let followersUserIds;
  let getProfiles = async(userIds, title) => { 

          let profiles = await Promise.all(userIds.map(async (id) => {
          let profile = await getUserByUserId(id)
        
          return profile[0]
      }))

      // console.log(followersUserIds)
      setOverLayData({title: title})
      setOverLayData((old) => {return {...old, data:profiles}});
      console.log(overLayData)
      
      // return followersUserIds
      
   }

  

//  getFollowersUserIds()
//   console.log(overLayData)

  const handleOnClick = (userIds, title) => {
    // console.log(userIds)
      if(userIds){
        getProfiles(userIds, title);
      }
      setOpenOverLay(true)
  }

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1
    });
    await toggleFollow(isFollowingProfile, user.docId, profileDocId, profileUserId, user.userId);
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(user.username, profileUserId);
      setIsFollowingProfile(!!isFollowing);
    };

    if (user?.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }

   

    

  }, [user?.username, profileUserId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center items-center">
        {profileUsername ? (
          <img
            className="rounded-full h-40 w-40 flex"
            alt={`${fullName} profile picture`}
            src={`/images/avatars/${profileUsername}.jpg`}
            onError={(e) => {
              e.target.src = DEFAULT_IMAGE_PATH;
            }}
          />
        ) : (
          <Skeleton circle height={150} width={150} count={1} />
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{profileUsername}</p>
          {activeBtnFollow && isFollowingProfile === null ? (
            <Skeleton count={1} width={80} height={32} />
          ) : (
            activeBtnFollow && (
              <button
                className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                type="button"
                onClick={handleToggleFollow}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleToggleFollow();
                  }
                }}
              >
                {isFollowingProfile ? 'Unfollow' : 'Follow'}
              </button>
            )
          )}
        </div>
        <div className="container flex mt-4">
          {!followers || !following ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> {photosCount === 1 ? `photo` : `photos`}
              </p>
              <p style={{ cursor: 'pointer' }} onClick={() =>  handleOnClick(followers, "Followers")} className="mr-10">
                <span className="font-bold">{followerCount}</span>
                {` `}
                {followerCount === 1 ? `follower` : `followers`}
              </p>
              <p style={{ cursor: 'pointer' }} onClick={() => handleOnClick(following, "Following")} className="mr-10">
                <span className="font-bold">{following?.length}</span> following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
            <OverLay
            open={openOverLay}
            setOpen={setOpenOverLay}
            data={overLayData?.data}
            title={overLayData?.title}
            handleUnFollowUser={handleUnFollowUser}
            handleRemoveFollowers={handleRemoveFollowers}
          />
     
          <p className="font-medium">{!fullName ? <Skeleton count={1} height={24} /> : fullName}</p>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    fullName: PropTypes.string,
    username: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array
  }).isRequired
};
