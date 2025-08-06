import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  // { icon: <FaFacebook />, path: "Facebook" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/alisamizade" },
  { icon: <FaGithub />, path: "https://github.com/ali-smz" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/web.tiimes/" },
  // { icon: <FaYoutube />, path: "Youtube" },
];

const Socials = ({ containerStyles, IconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={IconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
