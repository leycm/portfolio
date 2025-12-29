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
import flux from "@/images/flux.png";
import sedis from "@/images/sedis.png";
import cactus0 from "@/images/cactus/cactus2.png";
import cactus1 from "@/images/cactus/cactus3.png";
import cactus2 from "@/images/cactus/cactus6.png";
import cactus3 from "@/images/cactus/cactus7.png";
import cactus4 from "@/images/cactus/cactus8.png";

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
							description: "interpreted, high-level programming language.",
							usage: "for automation scripts, data processing and testing things fast.", // TODO: improve
							familiarity: "familiar with python thrue school and own scripts.",
							color: "#3776AB",
							icon: <FaPython />
						}} />
						<Tech tech={{
							name: "Redis",
							description: "in-memory database, cache, and message broker.",
							usage: "for caching layers and real-time data processing via pub/sub.",
							familiarity: "Experience with Redis for caching and pub/sub",
							color: "#DC382D",
							icon: <SiRedis />
						}} />
						<Tech tech={{
							name: "Docker",
							description: "platform for developing, shipping, and running applications.",
							usage: "mostly for containerizing applications microservices.",
							familiarity: "experienced with using Docker for development and deployment.",
							color: "#2496ED",
							icon: <FaDocker />
						}} />
						<Tech tech={{
							name: "Git",
							description: "distributed version control for tracking changes in source code.",
							usage: " for version control and collaboration on software projects.",
							familiarity: "proficient in Git for source code management.",
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
							title="Cactus Network - A Minecraft Server Network"
							content="Cactus Network is a Minecraft server network that offers a variety of game modes and features for players to enjoy. With a focus on community and player engagement, Cactus Network provides a fun and immersive experience for Minecraft enthusiasts."
							time="Apr 2025 - Present"
							state="In Progress"
							tags={[tags.java, tags.springboot, tags.postgresql, tags.redis, tags.docker]}
							github="https://github.com/cactusmod"
							website="https://cactusmod.xyz"
							images={[cactus0, cactus1, cactus2, cactus3, cactus4]}
						/>
						<Experience
							title="Sedis - Simple Redis Client"
							content="Sedis is a fast synchronous Redis caching for Java, enabling efficient shared values across sub-services and applications. It provides a simple API for common Redis operations, making it easy to integrate caching into any Java project."
							time="Nov 2025 - Present"
							state="In Development"
							tags={[tags.java, tags.redis, tags.gson]}
							github="https://github.com/leycm/sedis"
							images={[sedis]}
						/>
						<Experience
							title="Flux - Event Management System"
							content="Flux is a lightweight synchronous event framework for efficient event handling written in Java. It provides a simple and flexible API for registering, unregistering, and dispatching events, making it easy to integrate into any Java application."
							time="Oct 2024 - Nov 2025"
							state="Stable"
							tags={[tags.java, tags.git]}
							github="https://github.com/leycm/flux"
							images={[flux]}
						/>
						<Experience
							title="Education in High School"
							content="I'm currently graduating high school in Germany with a focus on computer science, mathematics and  physics. I've been passionate about programming and technology from a young age, which has driven me to pursue a deeper understanding of these subjects throughout my education."
							time="2021 - 2028"
							state="In Progress"
							tags={[tags.java, tags.python, tags.git]}
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
