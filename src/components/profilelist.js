/* eslint-disable */
import {Link, useHistory} from 'react-router-dom'

export default function ProfileList({profile, handleRemove, setOpen, open, text}){

    const username = profile.username;
    // console.log(profile.docId)
    let history = useHistory()
    const handleClick = (e, to) => {
        
        e.preventDefault();
        setOpen(false);
        setTimeout(()=> history.push(to), 500)
    }

    return(
    <div className="flex flex-row items-center align-items justify-between">
        <div className="flex items-center justify-between">
            <img
                className="rounded-full w-8 flex mr-3"
                src={`/images/avatars/${username}.jpg`}
                alt=""
                onError={(e) => {
                    e.target.src = `/images/avatars/default.png`;
                }}
            />
            <Link onClick={(e) => handleClick(e, `/p/${username}`)} to={`/p/${username}`}>
                <p className="font-bold text-sm">{username}</p>
            </Link>
        </div>
        <button
            className="text-xs font-bold text-blue-medium"
            type="button"
            onClick={() => handleRemove(profile.docId, profile.userId)}
        >
            {text}
        </button>
    </div>
)}