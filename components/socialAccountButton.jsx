import { FaDiscord, FaGithub, FaSteam, FaYoutube, FaSpotify, FaReddit, FaTwitter } from "react-icons/fa";

export default (account) => {
  const icon = {
    Discord: <FaDiscord className="w-5 h-5" />,
    Github: <FaGithub className="w-5 h-5" />,
    Steam: <FaSteam className="w-5 h-5" />,
    YouTube: <FaYoutube className="w-5 h-5" />,
    Spotify: <FaSpotify className="w-5 h-5" />,
    Reddit: <FaReddit className="w-5 h-5" />,
    Twitter: <FaTwitter className="w-5 h-5" />
  };

  return (
    <a
      target="_blank"
      href={account.url}
      className="focus:outline-none flex justify-center rounded-md p-2"
      style={{
        color: account.textColor,
        backgroundColor: account.color,
      }}
    >
      {icon[account.name]}
    </a>
  );
};
