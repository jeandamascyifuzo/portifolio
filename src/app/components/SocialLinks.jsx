import Image from "next/image";
import { socials } from "@/data/portfolio";

const SocialLinks = ({ size = 40 }) => {
  return (
    <ul className="flex items-center gap-3">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="block rounded-full opacity-70 transition hover:-translate-y-0.5 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          >
            <Image src={social.icon} alt="" width={size} height={size} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
