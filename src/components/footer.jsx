import '../css/footer.css';
import {
	TiSocialTwitterCircular,
	TiSocialInstagram,
	TiSocialFacebookCircular,
	TiSocialLinkedinCircular,
} from 'react-icons/ti';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-top'>
				<div className='d-flex justify-content-center '>
					<div className='mt-5'>
						<h1>
							<b>JOIN OUR COMMUNITY</b>
						</h1>
					</div>
				</div>
				<div className='d-flex justify-content-center position-relative'>
					<p>
						Lorem irure consequat occaecat culpa. Dolor nisi mollit nisi ipsum
						cillum nisi nostrud ea velit labore non incididunt adipisicing eu.
					</p>
				</div>
				<div className='d-flex justify-content-center'>
					<TiSocialTwitterCircular size={40} />
					<TiSocialInstagram size={40} />
					<TiSocialFacebookCircular size={40} />
					<TiSocialLinkedinCircular size={40} />
				</div>
			</div>
			<div className='footer-bottom'>
				<p className='footer-content container'>
					Veniam labore qui deserunt incididunt aliquip eiusmod Lorem velit
					ipsum exercitation pariatur non ipsum. Do dolore commodo sint tempor
					officia deserunt nulla laborum cupidatat. Id aute sunt id aute velit
					pariatur ad voluptate est.
				</p>
			</div>
		</div>
	);
};

export default Footer;
