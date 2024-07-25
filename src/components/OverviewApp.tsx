import { FaFacebookSquare, FaInstagram , FaTwitterSquare, FaYoutubeSquare , FaCaretUp, FaCaretDown } from "react-icons/fa";
import { SocialNetwork } from "../types";

interface Props{
  network: SocialNetwork 
  statsType: string 
  stats: number 
  porcentage: number 
  isUp: boolean
}

const OverviewApp: React.FC<Props> = ({network, statsType, stats, porcentage, isUp}) => {

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

  return (
    <div className="bg-fondoCard rounded-xl px-10 py-5 grid gap-6 cursor-pointer hover:bg-fondoCardHover dark:bg-fondoCardDark dark:hover:bg-fondoCardDarkHover">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray">{statsType}</p>
        {getIcon()}
      </div>
      <div className="flex justify-between">
        <p className="text-3xl font-bold">{stats}</p>
        <p className={`flex items-center ${isUp ? 'text-greenUp' : 'text-redDown'}`}>
            {isUp ? <FaCaretUp/> : <FaCaretDown/>}
            <span className="font-semibold text-sm">{porcentage}%</span>
        </p>
      </div>
    </div>
  );
};

export default OverviewApp;
