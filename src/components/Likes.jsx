import { useState } from 'react';

function Likes() {
    const [likes, setLikes] = useState(0);
    const [clickedLike, setClickedLike] = useState(false);

    const likeHandler = () => {
        if (clickedLike) {
            setLikes(0);
        }
        setLikes(likes => likes + 1);
    }
    if (clickedLike === false) {
        setLikes('');
        setClickedLike(true);
    }
    return (
        <>
        <button onClick={likeHandler} style={{width: '7rem'}}>Like {likes}</button>
        </>
    )
}

export default Likes;