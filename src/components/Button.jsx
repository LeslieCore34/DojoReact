import React, { useState } from "react";
import './Button.css'

function Button() {
  const [isLike, setIsLike] = useState(0);

  const handleLikeClick = () => {
    setIsLike(1);
  };
  const handleDisLikeClick = () => {
    setIsLike(2);
  };
  return (
    <div>
      <button className="like" onClick={handleLikeClick}>Like</button>
      <button className="dislike" onClick={handleDisLikeClick}>DisLike</button>
      <div className="button">
        {isLike === 1 ? "👍" : ""}
        {isLike === 2 ? "🤮" : ""}
      </div>
    </div>
  );
}

export default Button;
