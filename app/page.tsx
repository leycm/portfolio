import { Content, ContentTitle, Page, Section } from "@/components/content";
import { Experience, ExperienceAndProjects, TimelineEnd, TimelineStart } from "@/components/experience";
import { Sidebar, SidebarTitle, SidebarName, SidebarSubtitle, SidebarNavigation, SidebarNavLink } from "@/components/sidebar";
import { SidebarNavItem } from "@/components/sidebar-client";
import { getMyAge, getYearsOfExperience } from "@/lib/age";
import { Tech } from "@/components/tech";
import {FaJava, FaPython, FaDocker, FaGitAlt, FaLinkedin, FaStackOverflow, FaGithub, FaDiscord} from "react-icons/fa";
import { SiKotlin, SiGo, SiSpring, SiRedis } from "react-icons/si";
import { tags } from "./tags";
import { Email } from "@/components/icons";
import Quote from "@/components/quote";
import { AboutMe } from "@/components/about";

import demo from "@/images/demo.png";
import profile from "@/images/profile.png";
import { FaBluesky } from "react-icons/fa6";

export default function Portfolio() {
	return (
		<Page>
			<Sidebar rows={3}>
				<SidebarName>
					<SidebarTitle>{"leycm"}</SidebarTitle>
					<SidebarSubtitle>{"Java Lover"}</SidebarSubtitle>
					<SidebarSubtitle secondary>{`${getMyAge()} * Germany`}</SidebarSubtitle>
				</SidebarName>
				<SidebarNavigation>
					<SidebarNavItem section="about">
						{"* About Me"}
					</SidebarNavItem>
					<br/>
					<SidebarNavItem section="tech">
						{"* Tech Stack"}
					</SidebarNavItem>
					<br/>
					<SidebarNavItem section="experience">
						{"* Experience"}
						<br/>
						<div className="w-[2ch] h-px inline-block" />
						{"& Projects"}
					</SidebarNavItem>
					<br/>
				</SidebarNavigation>
				<div className="w-full mt-auto mb-8">
          <SidebarNavigation inter>
            <SidebarNavLink href="https://github.com/leycm">
              <div className="flex flex-row items-end gap-4">
                <FaGithub size={32} />
                <span>{"leycm"}</span>
              </div>
            </SidebarNavLink>
          </SidebarNavigation>
				</div>
			</Sidebar>
			<Content>
				<Section id="about">
					<ContentTitle>About Me</ContentTitle>
					<AboutMe 
					  name="Lennard"
					  description={`German Student with a passion for computer science, specializing in Java and Backend development with ${getYearsOfExperience} Years of Experience. I'm deeply passionate about Object-Oriented Programming and currently graduating in Germany.`}
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
				</Section>
				<Section id="tech">
					<ContentTitle>Tech Stack</ContentTitle>
					<div className="max-w-6xl py-16 pl-4 pr-4 sm:pl-6 lg:pl-16 grid grid-cols-1 md:grid-cols-2 l:grid-cols-2 lg:grid-cols-3 gap-5 px-8">
						<Tech tech={{
							name: "Java",
							description: "OOP based language with strong type security.",
							usage: "for large applications and robust backend systems.",
							familiarity: "extensive experience with Java and its ecosystem.",
							color: "#5382A1",
							icon: <FaJava />
						}} />
						<Tech tech={{
							name: "Spring",
							description: "Java framework for building enterprise-level applications.",
							usage: "to develop backends and public api endpoints.",
							familiarity: "interested in Spring Boot and its features.",
							color: "#6DB33F",
							icon: <SiSpring />
						}} />
						<Tech tech={{
							name: "Kotlin",
							description: "language designed to interoperate fully with Java and the JVM.",
							usage: "to experiment with it features and build Android applications.",
							familiarity: "comfortable with Kotlin syntax and standard library.",
							color: "#7F52FF",
							icon: <SiKotlin />
						}} />
						<Tech tech={{
							name: "Go",
							description: "modern compiled language known for its simplicity and efficiency.",
							usage: "mostly to build command-line tools and small application.",
							familiarity: "familiar with Go's syntax and times feature.",
							color: "#00ADD8",
							icon: <SiGo />
						}} />
						<Tech tech={{
							name: "Python",
							description: "interpreted, high-level programming language known for its simplicity and versatility.",
							usage: "Automation scripts, data processing", // TODO: improve
							familiarity: "-",
							color: "#3776AB",
							icon: <FaPython />
						}} />
						<Tech tech={{
							name: "Redis",
							description: "in-memory data structure store, used as a database, cache, and message broker.",
							usage: "Caching layer and real-time data processing",
							familiarity: "Experience with Redis for caching and pub/sub",
							color: "#DC382D",
							icon: <SiRedis />
						}} />
						<Tech tech={{
							name: "Docker",
							description: "platform for developing, shipping, and running applications in containers.",
							usage: "-",
							familiarity: "-",
							color: "#2496ED",
							icon: <FaDocker />
						}} />
						<Tech tech={{
							name: "Git",
							description: "distributed version control system for tracking changes in source code during software development.",
							usage: "-",
							familiarity: "-",
							color: "#F05032",
							icon: <FaGitAlt />
						}} />
					</div>
				</Section>
				<Section id="experience">
					<ContentTitle>{"Experience & Projects"}</ContentTitle>
					<ExperienceAndProjects>
						<TimelineStart />
						<Experience
						title="Project 1"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						time="Jan 2024 - Present"
						state="In Progress"
						tags={[tags.react, tags.typescript, tags.tailwindcss]}
						github="#"
						images={[demo, demo, demo, demo, demo, demo]}
					/>
					<Experience
						title="Project 2"
						content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						time="Mar 2024 - Jun 2024"
						state="Completed"
						tags={[tags.nextjs, tags.typescript, tags.postgresql]}
						github="#"
						images={[demo]}
					/>
					<Experience
						title="Project 3"
						content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
						time="Feb 2024 - Apr 2024"
						state="Completed"
						tags={[tags.react, tags.javascript, tags.firebase]}
						github="#"
						images={[demo]}
					/>
					<Experience
						title="Project 4"
						content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
						time="Dec 2023 - Jan 2024"
						state="Completed"
						tags={[tags.nextjs, tags.typescript, tags.tailwindcss]}
						github="#"
						images={[demo]}
					/>
					<Experience
						title="Education"
						content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
						time="2024 - 2028"
						state="In Progress"
						tags={[tags.cpp, tags.javascript]}
					/>
						<TimelineEnd />
					</ExperienceAndProjects>
				</Section>
				<Quote>
					<span className="text-slate-800">{"“"}</span>
					<span>{"I'm "}</span>
					<span className="text-slate-500">{"unique"}</span>
					<span>{", like "}</span>
					<br/>
					<span className="text-slate-500">{"everyone else"}</span>
					<span>{"."}</span>
					<span className="text-slate-800">{"”"}</span>
				</Quote>
			</Content>
		</Page>
	);
}
