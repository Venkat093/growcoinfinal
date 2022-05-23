import '../css/features.css';
import burn1 from '../assets/images/burn1.png';
import burn2 from '../assets/images/burn2.png';
import burn3 from '../assets/images/burn3.png';
import burn4 from '../assets/images/burn4.png';
const Features = () => {
	return (
		<div className='features'>
			<div className='features-title'>
				<h1>features title</h1>
			</div>
			<div className='feature-row'>
				<div className='row feature-contents my-5 mx-5'>
					<div className='col-md-4 '>
						<img src={burn1} alt='' />
						<h2 className='my-3'>$BUSD Reflections</h2>
						<p>
							Tempor laborum ex duis consectetur veniam nisi. Adipisicing
							deserunt laboris occaecat sunt ullamco eu velit nisi. Cillum aute
							velit excepteur sint laborum dolor proident ipsum deserunt veniam
							nostrud. Dolore amet sit nisi laboris amet.
						</p>
					</div>
					<div className='col-md-4'>
						<img src={burn2} alt='' />
						<h2 className='my-3'>$BUSD Reflections</h2>
						<p>
							Sunt quis esse ad commodo mollit reprehenderit id Lorem nisi.
							Voluptate labore sunt officia deserunt adipisicing est eu mollit
							nulla anim commodo duis. Officia consequat nisi ea veniam est
							ullamco. Dolore id commodo voluptate ut occaecat consectetur
							occaecat cillum. Minim do pariatur minim pariatur eiusmod duis ad
							et culpa eiusmod ut adipisicing. In id occaecat esse sint esse
							excepteur pariatur nostrud occaecat. Tempor tempor id nostrud
							minim ex eiusmod ipsum consequat commodo anim.
						</p>
					</div>
					<div className='col-md-4'>
						<img src={burn3} alt='' />
						<h2 className='my-3'>$BUSD Reflections</h2>
						<p>
							Anim aliquip laboris quis ullamco elit mollit deserunt sit aliquip
							labore labore. Incididunt nulla exercitation voluptate magna.
							Officia sit cupidatat fugiat sit nostrud deserunt ex nisi commodo
							mollit consequat.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
