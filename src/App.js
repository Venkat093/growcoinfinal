import { useEffect } from 'react';
import Documents from './components/documents';
import Ecosystem from './components/ecosystem';
import Features from './components/features';
import Home from './components/home';
import Navbar from './components/navbar';
import Target from './components/target';
import Tokenomics from './components/tokenomics';
import scrollreveal from 'scrollreveal';
import Footer from './components/footer';
import ScrollToTop from './components/scroletotop';
function App() {
	useEffect(() => {
		const registerAnimations = () => {
			const sr = scrollreveal({
				origin: 'bottom',
				distance: '80px',
				duration: 2000,
				reset: false,
			});
			sr.reveal(
				`
        nav,
        .document,
        .tokenomics,
        .ecosystem,
        .features,
        .target,
		.target-contents2021,
        .document,
        .footer,
		
    `,
				{
					interval: 500,
				}
			);
		};
		registerAnimations();
	}, []);

	return (
		<div className='app-container'>
			<ScrollToTop />
			<Navbar />
			<Home />
			<Tokenomics />
			<Features />
			<Ecosystem />
			<Target />
			<Tokenomics />
			<Documents />
			<Footer />
		</div>
	);
}

export default App;
