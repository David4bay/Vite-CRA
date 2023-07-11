import { useState } from 'react';

function Likes() {
    const [likes, setLikes] = useState(0);
    const [clickedLike, setClickedLike] = useState(false);

    const likeHandler = () => {
     if (clickedLike === false) {
        setLikes(1);
        setClickedLike(true);
     } else {
        setClickedLike(false);
        setLikes(0);
     }
    }
    return (
        <>
        <button onClick={likeHandler} style={{width: '7rem'}}>Like {likes}</button>
        </>
    )
}

export default Likes;