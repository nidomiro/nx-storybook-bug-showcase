import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Welcome to nx-storybook-bug-showcase-app!</title>
			</Head>
			<div className="bg-gray-500">
				<header className="flex">
					<h1>Welcome to nx-storybook-bug-showcase-app!</h1>
				</header>
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}

export default CustomApp;
