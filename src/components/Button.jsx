import React, { useState } from "react";

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
      <button onClick={handleLikeClick}>Like</button>
      <button onClick={handleDisLikeClick}>DisLike</button>
      {isLike === 1 ? "👍" : ""}
      {isLike === 2 ? "🤮" : ""}
    </div>
  );
}

export default Button;
