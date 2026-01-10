import { ImageResponse } from "next/og";
import { AboutMe } from "@/components/about";
import {FaLinkedin, FaStackOverflow, FaGithub, FaDiscord} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FiMail as Email } from "react-icons/fi";

import profile from "@/images/profile.png";
import {getYearsOfExperience} from "@/lib/age";

export const runtime = 'edge';

export async function GET() {
  const interSemiBold = await fetch(
    new URL('../../../fonts/Inter-SemiBold.ttf', import.meta.url).toString()
  ).then((res) => res.arrayBuffer());


  const interRegular = interSemiBold;


  return new ImageResponse(
    (
		<AboutMe
			  name="Lennard"
			  description={`German Student with a passion for computer science, specializing in Java and Backend development with ${getYearsOfExperience()} Years of Experience. I'm deeply passionate about Object-Oriented Programming and interested in System architecture. I'm currently graduating in Germany.`}
			  image={profile}
			  socialLinks={[
				{
				  name: 'GitHub',
				  url: 'https://github.com/leycm',
				  icon: <FaGithub size={16} />,
				  username: 'leycm'
				},
				{
				  name: 'LinkedIn',
				  url: 'https://linkedin.com/in/leycm',
				  icon: <FaLinkedin size={16} />,
				  username: 'in/leycm'
				},
				{
				  name: 'Twitter',
				  url: 'https://bsky.app/@leycm',
				  icon: <FaBluesky size={16} />,
				  username: '@leycm'
				},
				{
				  name: 'Email',
				  url: 'mailto:leycm@proton.me',
				  icon: <Email size={16} />,
				  username: 'leycm@proton.me'
				},
				{
				  name: 'Stack Overflow',
				  url: 'https://stackoverflow.com/users/30135628',
				  icon: <FaStackOverflow size={16} />,
				  username: 'leycm'
				},
				{
				  name: 'Discord',
				  url: 'https://discordapp.com/users/1063519999886622801',
				  icon: <FaDiscord size={16} />,
				  username: 'leycm'
				}
		  ]}
		/>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 600, // SemiBold
        },
        {
          name: 'Inter',
          data: interRegular,
          style: 'normal',
          weight: 400, // Regular
        },
      ],
    }
  );
}
