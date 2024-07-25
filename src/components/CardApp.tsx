import { FaFacebookSquare, FaInstagram , FaTwitterSquare, FaYoutubeSquare , FaCaretUp, FaCaretDown } from "react-icons/fa";
import { SocialNetwork } from "../types";

interface Props{
    network: SocialNetwork 
    user: string 
    audienceType: string 
    audience: number 
    today: number 
    isUp: boolean
}

const CardApp: React.FC<Props> = ({network, user, audienceType, audience, today, isUp}) => {
    

    const getIcon = () => {
        switch (network) {
          case 'Facebook':
            return <FaFacebookSquare className="text-facebook text-2xl" />;
          case 'Instagram':
            return <FaInstagram className="bg-instagram-gradient text-2xl rounded" />;
          case 'Twitter':
            return <FaTwitterSquare className="text-twitter text-2xl" />;
          case 'YouTube':
            return <FaYoutubeSquare className="text-youtube text-2xl" />;
          default:
            return null;
        }
      };

      const getBorderColor = {
        Facebook: 'bg-facebook',
        Twitter: 'bg-twitter',
        YouTube: 'bg-youtube',
        Instagram: 'bg-instagram-gradient',
    };

  return (
    <div className='w-11/12 mx-auto rounded-md bg-fondoCard flex flex-col items-center gap-4 py-7 relative md:max-w-[319px] cursor-pointer hover:bg-fondoCardHover dark:bg-fondoCardDark dark:hover:bg-fondoCardDarkHover'>
      <div className="flex items-center gap-3">
        {getIcon()}
        <span className="text-gray font-semibold text-sm">{user}</span>
      </div>
      <div className="text-center">
        <h5 className="text-6xl font-bold">{audience}</h5>
        <span className="text-gray tracking-[4px]">{audienceType.toUpperCase()}</span>
      </div>
      <div className={`flex items-center gap-1 ${isUp ? 'text-greenUp' : 'text-redDown'}`}>
        {isUp ? <FaCaretUp/> : <FaCaretDown/>}
        <span className="font-semibold text-sm">{today} Today</span>
      </div>
      <div className={`h-2 ${getBorderColor[network]} w-full absolute top-0 rounded-[10px_10px_0_0]`}></div>
    </div>
  );
};

export default CardApp;
