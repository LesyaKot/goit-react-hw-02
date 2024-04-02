import { useState } from "react";

const UpdateFeedback = ({ feedbackType }) => {
    const [clicks, setClicks] = useState(0);
  
    const handleClick = () => {
      setClicks(clicks + 1);
    };
  
    return (
      <div>
        <button onClick={handleClick}>{feedbackType}</button>
        <p>{clicks}</p>
      </div>
    );
  };
  
const Options = () => {
    return (
      <div>
        <UpdateFeedback feedbackType ="Good" />
        <UpdateFeedback feedbackType ="Neutral" />
        <UpdateFeedback feedbackType ="Bad" />
      </div>
    );
  };
  
 
export default Options;