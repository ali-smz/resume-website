import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  { icon: <FaFacebook />, path: "Facebook" },
  { icon: <FaLinkedin />, path: "LinkedIn" },
  { icon: <FaGithub />, path: "Github" },
  { icon: <FaInstagram />, path: "Instagram" },
  { icon: <FaYoutube />, path: "Youtube" },
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
