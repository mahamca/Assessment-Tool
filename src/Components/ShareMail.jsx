import { useLocation } from "react-router-dom";


const ShareMail = () => {
    const location = useLocation();
    const currentURL = window.location.origin + location.pathname;
    const subject = encodeURIComponent('Check out this page!');
    const body = encodeURIComponent(`Hey, I thought you might find this page interesting: ${currentURL}`);
  
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
  
    return (
        <div>
      <a href={mailtoLink}>
        Share this page via Email
      </a>
    
      {currentURL}</div>
    );
  };

  export default ShareMail