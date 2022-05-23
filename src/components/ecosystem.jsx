import '../css/ecosystem.css';
import eco from '../assets/images/ecosystem.png';
import arrow from '../assets/images/Arrows.png';
import left from '../assets/images/Plaque_Left.png';
const Ecosystem = () => {
	return (
		<div className='ecosystem'>
			<div className='ecosystem-title'>
				<h1>features title</h1>
			</div>
			<div className='ecosystem-row'>
				<div className='ecosystem-contents'>
					<div className='row my-3'>
						<div className='col-md-5'>
							<img className='eco-img' src={eco} alt='' />
						</div>
						<div className='col-md-7'>
							<h2 className='my-3'>$BUSD Reflections</h2>
							<p>
								Irure reprehenderit cillum adipisicing non. Aliqua anim duis
								aliquip proident veniam dolor ut veniam laborum minim officia.
								Veniam ad fugiat dolore labore excepteur do anim nisi incididunt
								pariatur enim exercitation et esse. Non nostrud dolore duis
								minim ad adipisicing ut cupidatat consectetur amet laborum ipsum
								amet. Ut commodo magna et anim magna reprehenderit non
								incididunt eiusmod non ex cupidatat.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-1 imgg align-items-center'>
							<img className='left-img' src={left} alt='' />
						</div>
						<div className='col-sm-10'>
							<div className='row'>
								<div className='col-sm-6'>
									<h1>
										<b>dApp and Swap Exchange</b>
									</h1>
									<p>
										Deserunt Lorem fugiat enim aliquip cupidatat fugiat aliquip
										adipisicing. Eu in anim ipsum velit aliquip cupidatat irure
										pariatur non anim adipisicing. Sunt velit minim anim in
										culpa cillum. Adipisicing ullamco velit officia id cillum
										dolor aute velit esse fugiat commodo dolor irure. Amet
										consequat enim id exercitation. Ad est dolor dolor dolor et
										nostrud irure tempor proident labore labore qui.
									</p>
								</div>
								<div className='col-sm-4'>
									<img className='tokenimg' src={arrow} alt='' />
								</div>
							</div>
							<p>
								Aliquip do fugiat adipisicing ex cillum minim sit non velit.
								Sint quis velit enim et veniam id anim ex occaecat occaecat
								dolore quis eiusmod. Minim eu ullamco id fugiat magna
								exercitation minim esse ipsum ex pariatur eu culpa. Non nulla
								consequat do velit sint sit mollit ex magna officia mollit ea
								laborum veniam.
							</p>
							<p>
								Deserunt reprehenderit anim quis voluptate labore. Cupidatat
								nisi labore cillum et esse nisi duis mollit non excepteur irure
								proident do quis. Ea esse sint nisi dolor. Elit deserunt in
								laboris elit ad exercitation irure ex nulla dolor cillum sint.
								Incididunt quis exercitation dolore fugiat aliquip nulla
								ullamco. Sunt adipisicing amet voluptate ipsum veniam non
								occaecat sit id eiusmod. Esse veniam id duis consectetur.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecosystem;
