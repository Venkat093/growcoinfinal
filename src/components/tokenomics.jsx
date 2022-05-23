import left from '../assets/images/Plaque_Left.png';
import tokenomics from '../assets/images/tokenomics.png';
import '../css/tokenomics.css';

const Tokenomics = () => {
	return (
		<div className='tokenomics'>
			<div className='theam-contentt'>
				<div className='row  container'>
					<div className='col-sm-1 imgg align-items-center'>
						<img className='left-img' src={left} alt='' />
					</div>
					<div className='col-sm-10'>
						<div className='row'>
							<div className='col-sm-6'>
								<h1>
									<b>TOKENOMICS</b>
								</h1>
								<p>
									Proident nisi sunt nostrud dolor veniam sunt eu laboris
									laboris. Nostrud qui minim in consequat mollit minim ex et.
									Mollit exercitation est esse dolore labore proident elit irure
									id reprehenderit magna sit. Sit ad aliquip laboris consectetur
									labore ipsum officia sunt. Minim fugiat incididunt id dolore
									nulla amet sunt.
								</p>
							</div>
							<div className='col-sm-4'>
								<img className='tokenimg' src={tokenomics} alt='' />
							</div>
						</div>
						<p>
							Dolore laboris velit veniam anim occaecat. Esse ut occaecat
							consectetur laborum magna excepteur proident. Aliqua sint occaecat
							enim pariatur cillum aliquip esse nulla voluptate quis mollit.
							Velit enim aliqua fugiat sit eu est.
						</p>
						<p>
							Proident qui dolore et nisi mollit do. Labore reprehenderit tempor
							quis ea dolor in magna dolor enim do deserunt aute. Culpa in ad
							reprehenderit ad ipsum. Sit nostrud occaecat cupidatat non commodo
							ullamco pariatur dolore exercitation est labore nisi ullamco
							officia. Nostrud cupidatat ut occaecat fugiat. Magna aliqua cillum
							dolor in excepteur enim nostrud irure. Mollit ad laboris dolore ut
							proident proident dolore commodo dolor aute cupidatat ex.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
