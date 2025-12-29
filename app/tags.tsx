import { Angular, Arduino, Assembly, AuthJS, CPP, CSharp, Docker, Firebase, GitHub, JavaScript, NextJS, NodeJS, PostgreSQL, React, Rust, ShadCN, Swift, TailwindCSS, TypeScript } from "@/components/icons";
import {FaJava, FaDatabase, FaPython, FaGit, FaGoogle} from "react-icons/fa";
import {SiSpring, SiKotlin, SiAmazon, SiRedis} from "react-icons/si";

export interface TagType {
	name: string;
	url?: string;
	icon?: React.ReactNode;
	color?: string;
	description?: string;
}

export const tags = {
	gson: {
		name: "Gson",
		url: "https://de.wikipedia.org/wiki/Gson",
		icon: <FaGoogle size={24} className="group-hover:text-red-400" />,
	},
	redis: {
		name: "Redis",
		url: "https://chat.openai.com/?q=What%20is%20Redis%20and%20how%20do%20you%20use%20it%3F",
		icon: <SiRedis size={24} className="group-hover:text-red-400" />,
	},
	java: {
		name: "Java",
		url: "https://chat.openai.com/?q=What%20is%20Java%20and%20how%20does%20it%20work%3F",
		icon: <FaJava size={24} className="group-hover:text-red-400" />,
	},
	springboot: {
		name: "Spring Boot",
		url: "https://chat.openai.com/?q=Explain%20Spring%20Boot%20and%20its%20core%20features%3F",
		icon: <SiSpring size={24} className="group-hover:text-green-500" />,
	},
	github: {
		name: "GitHub",
		url: "https://chat.openai.com/?q=What%20is%20GitHub%20and%20how%20do%20you%20use%20it%3F",
		icon: <GitHub size={24} className="group-hover:text-gray-700" />,
	},
	git: {
		name: "Git",
		url: "https://chat.openai.com/?q=What%20is%20Git%20and%20why%20is%20it%20useful%3F",
		icon: <FaGit size={24} className="group-hover:text-orange-500" />,
	},
	sql: {
		name: "SQL",
		url: "https://chat.openai.com/?q=What%20is%20SQL%20and%20how%20do%20you%20query%20databases%3F",
		icon: <FaDatabase size={24} className="group-hover:text-blue-400" />,
	},
	aws: {
		name: "AWS",
		url: "https://chat.openai.com/?q=What%20is%20AWS%20and%20what%20services%20does%20it%20offer%3F",
		icon: <SiAmazon size={24} className="group-hover:text-orange-400" />,
	},
	python: {
		name: "Python",
		url: "https://chat.openai.com/?q=What%20is%20Python%20and%20what%20is%20it%20used%20for%3F",
		icon: <FaPython size={24} className="group-hover:text-yellow-400" />,
	},
	kotlin: {
		name: "Kotlin",
		url: "https://chat.openai.com/?q=What%20is%20Kotlin%20used%20for%3F",
		icon: <SiKotlin size={24} className="group-hover:text-purple-400" />,
	},
	react: {
		name: "React",
		url: "https://chat.openai.com/?q=What%20is%20React%20and%20how%20do%20you%20build%20apps%20with%20it%3F",
		icon: <React size={24} className="group-hover:text-sky-300" />,
	},
	nextjs: {
		name: "Next.js",
		url: "https://chat.openai.com/?q=What%20is%20Next.js%20and%20why%20use%20it%3F",
		icon: <NextJS size={24} className="group-hover:text-slate-300" />,
	},
	tailwindcss: {
		name: "Tailwind CSS",
		url: "https://chat.openai.com/?q=What%20is%20Tailwind%20CSS%20and%20how%20do%20you%20style%20with%20it%3F",
		icon: <TailwindCSS size={24} className="group-hover:text-sky-300" />,
	},
	typescript: {
		name: "TypeScript",
		url: "https://chat.openai.com/?q=What%20is%20TypeScript%20and%20what%20are%20its%20benefits%3F",
		icon: <TypeScript size={24} className="group-hover:text-sky-300" />,
	},
	javascript: {
		name: "JavaScript",
		url: "https://chat.openai.com/?q=What%20is%20JavaScript%20and%20how%20is%20it%20used%3F",
		icon: <JavaScript size={24} className="group-hover:text-yellow-200" />,
	},
	nodejs: {
		name: "Node.js",
		url: "https://chat.openai.com/?q=What%20is%20Node.js%20and%20how%20does%20it%20work%3F",
		icon: <NodeJS size={24} className="group-hover:text-green-300" />,
	},
	firebase: {
		name: "Firebase",
		url: "https://chat.openai.com/?q=What%20is%20Firebase%20and%20what%20features%20does%20it%20provide%3F",
		icon: <Firebase size={24} className="group-hover:text-yellow-200" />,
	},
	postgresql: {
		name: "PostgreSQL",
		url: "https://chat.openai.com/?q=What%20is%20PostgreSQL%20and%20how%20do%20you%20use%20it%3F",
		icon: <PostgreSQL size={24} className="group-hover:text-sky-300" />,
	},
	rust: {
		name: "Rust",
		url: "https://chat.openai.com/?q=What%20is%20Rust%20and%20why%20is%20it%20popular%3F",
		icon: <Rust size={28} className="group-hover:text-red-300" />,
	},
	docker: {
		name: "Docker",
		url: "https://chat.openai.com/?q=What%20is%20Docker%20and%20how%20does%20it%20help%20developers%3F",
		icon: <Docker size={24} className="group-hover:text-sky-300" />,
	},
	shadcnui: {
		name: "shadcn/ui",
		url: "https://chat.openai.com/?q=What%20is%20shadcn/ui%20and%20how%20do%20you%20use%20it%3F",
		icon: <ShadCN size={24} className="group-hover:text-slate-300"/>,
	},
	authjs: {
		name: "Auth.js",
		url: "https://chat.openai.com/?q=What%20is%20Auth.js%20and%20how%20do%20you%20authenticate%20with%20it%3F",
		icon: <AuthJS size={24} className="group-hover:text-purple-300" />,
	},
	assembly: {
		name: "Assembly",
		url: "https://chat.openai.com/?q=What%20is%20Assembly%20language%20and%20why%20learn%20it%3F",
		icon: <Assembly size={24} className="group-hover:text-red-300" />,
	},
	cpp: {
		name: "C++",
		url: "https://chat.openai.com/?q=What%20is%20C%2B%2B%20and%20what%20are%20its%20use%20cases%3F",
		icon: <CPP size={24} className="group-hover:text-sky-300" />,
	},
	arduino: {
		name: "Arduino",
		url: "https://chat.openai.com/?q=What%20is%20Arduino%20and%20how%20do%20you%20get%20started%3F",
		icon: <Arduino size={24} className="group-hover:text-sky-300" />,
	},
	swift: {
		name: "Swift",
		url: "https://chat.openai.com/?q=What%20is%20Swift%20and%20what%20makes%20it%20unique%3F",
		icon: <Swift size={24} className="group-hover:text-red-300" />,
	},
	angular: {
		name: "Angular",
		url: "https://chat.openai.com/?q=What%20is%20Angular%20and%20how%20do%20you%20build%20apps%20with%20it%3F",
		icon: <Angular size={24} className="group-hover:text-red-300" />,
	},
	csharp: {
		name: "C#",
		url: "https://chat.openai.com/?q=What%20is%20C%23%20and%20how%20is%20it%20used%3F",
		icon: <CSharp size={24} className="group-hover:text-blue-300" />,
	},
}