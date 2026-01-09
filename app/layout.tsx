import type { Metadata } from "next";
import { inter } from "@/lib/fonts";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const title = "Hi i'am Ley";
const description = "Software Engineer and Developer";

// Get the domain dynamically from the request headers
const getDomain = (): string => {
  // This will be replaced with the actual domain at request time
  if (typeof window !== 'undefined') {
    return window.location.hostname;
  }
  // Fallback for server-side rendering
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '') || 'leycm.de';
};

const domain = getDomain();
const siteUrl = `https://${domain}`;
const fullTitle = `${domain} - ${title}`;

export const metadata: Metadata = {
	title: fullTitle,
	description: description,
	metadataBase: new URL(siteUrl),
	generator: 'Next.js',
	applicationName: 'LeyCM Portfolio',
	referrer: 'origin-when-cross-origin',
	keywords: ['LeyCM', 'Software Engineer', 'Developer', 'Portfolio', 'Web Development'],
	authors: [{ name: 'LeyCM' }],
	creator: 'LeyCM',
	publisher: 'LeyCM',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: [
			{ url: '/api/icon?size=16x16', sizes: '16x16', type: 'image/png' },
			{ url: '/api/icon?size=32x32', sizes: '32x32', type: 'image/png' },
			{ url: '/api/icon?size=48x48', sizes: '48x48', type: 'image/png' },
			{ url: '/api/icon?size=64x64', sizes: '64x64', type: 'image/png' },
		],
		apple: [
			{ url: '/api/apple-touch-icon?size=60x60', sizes: '60x60', type: 'image/png' },
			{ url: '/api/apple-touch-icon?size=76x76', sizes: '76x76', type: 'image/png' },
			{ url: '/api/apple-touch-icon?size=120x120', sizes: '120x120', type: 'image/png' },
			{ url: '/api/apple-touch-icon?size=152x152', sizes: '152x152', type: 'image/png' },
			{ url: '/api/apple-touch-icon?size=180x180', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{
				rel: 'mask-icon',
				url: '/api/icon?maskable=true',
				color: '#000000',
			},
		],
	},

	openGraph: {
		type: 'website',
		url: siteUrl,
		title: fullTitle,
		description: description,
		siteName: 'LeyCM',
		locale: 'en_US',
		images: [
			{
				url: '/api/og',
				width: 1200,
				height: 630,
				alt: fullTitle,
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: fullTitle,
		description: description,
		creator: '@leycm',
		images: ['/api/og'],
	},

	appleWebApp: {
		title: fullTitle,
		statusBarStyle: 'default',
	},

	other: {
		'msapplication-TileColor': '#ffffff',
		'msapplication-config': '/browserconfig.xml',
		'msapplication-tap-highlight': 'no',
		'application-name': 'LeyCM Portfolio',
	},

	manifest: '/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased dark bg-background text-foreground w-screen h-screen`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
