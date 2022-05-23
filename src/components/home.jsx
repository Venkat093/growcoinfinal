import graph from '../assets/images/Graph-1.png';
import buyback from '../assets/logo/BuyBack.png';
import reward from '../assets/logo/BUSDRewards.png';
import graphbottom from '../assets/images/Graph_Bottom.png';
import liquidity from '../assets/logo/AutoLiquidity.png';
import '../css/home.css';
import left from '../assets/images/Plaque_Left.png';
const Home = () => {
	return (
		<div className='home'>
			<div className='container'>
				<div className='content'>
					<p className='sub-title'>Launching Soon</p>
					<h1 className='title'>loremCupidatat aliquip ad .</h1>
					<p className='description'>
						Dolor fugiat sit nisi consectetur. Ut enim quis enim voluptate elit
						voluptate ad qui exercitation veniam non commodo. Consequat do
						fugiat ullamco velit. Sit occaecat esse culpa consectetur
						consectetur proident do aliquip exercitation sint do aliqua id.
					</p>
					<div className=' d-flex  gap-5 '>
						<button className='but-o'>Sign Up</button>
						<button className='but-e'>Sign Up</button>
					</div>
				</div>
				<div className='image-container'>
					<div className='image'>
						<img src={graph} alt='home image' />
					</div>
					<div className='ellipse-container'>
						<div className='ellipse pink'></div>
						<div className='ellipse orange'></div>
					</div>
				</div>
			</div>
			<div className='row mx-4 my-5'>
				<div className='col-sm-1 imgg align-items-center'>
					<img className='left-img' src={left} alt='' />
				</div>
				<div className='col-sm-10'>
					<h1>
						<b>ABOUT</b>
					</h1>
					<p>
						Mollit voluptate ea cillum sint enim ipsum minim ex laboris et culpa
						sunt tempor mollit. Mollit eu enim adipisicing dolor veniam ut
						excepteur officia ut amet nisi sit do. Culpa anim commodo do qui.
						Deserunt duis voluptate eu id commodo voluptate Lorem laborum aute.
						Dolore labore sint consequat consequat ut veniam adipisicing minim
						aute labore dolor. Lorem pariatur qui ex duis magna. Ad cupidatat
						qui veniam labore cillum cillum aliqua.
					</p>
					<h1>
						<b>WHY HOLD EVERGROWCOIN?</b>
					</h1>
					<p>
						Irure enim exercitation minim officia commodo. Aliqua magna ea ipsum
						irure. Id incididunt ea quis adipisicing est et non aute deserunt ad
						irure culpa eiusmod. Elit aliquip qui magna qui cupidatat qui sit
						elit sunt.
					</p>
					<p>
						Fugiat excepteur laboris anim ullamco est cillum reprehenderit eu
						velit deserunt. Qui sunt occaecat dolor officia Lorem commodo
						ullamco velit velit laboris. Quis non voluptate est labore Lorem
						tempor occaecat deserunt magna. Qui sit esse eiusmod consequat
						reprehenderit anim laborum adipisicing excepteur aliqua adipisicing
						officia laboris esse. Sit laborum veniam sunt exercitation labore.
						Consectetur Lorem sint sint veniam Lorem incididunt elit Lorem quis
						magna id deserunt voluptate anim.
					</p>
					<p>
						Aliquip aliquip ullamco commodo Lorem. Tempor exercitation quis amet
						in cupidatat sit irure irure laboris dolore ex aute et. Pariatur
						ipsum laborum eiusmod sint voluptate anim esse deserunt id nostrud
						pariatur ea labore. Consequat aliquip ex sint adipisicing proident
						id. Officia sit in id anim nostrud sit consequat mollit in. Mollit
						eu ad ea tempor dolore sunt est sunt fugiat ut quis. Ad officia eu
						ad sunt culpa.
					</p>
				</div>
			</div>
			<div className='row mt-4 home-reward'>
				<div className='col-sm-2  icons   '>
					<img className=' reward-icons ' src={buyback} alt='' />
					<span>$BUSD Reward</span>
				</div>
				<div className=' col-sm-2  icons '>
					<img className='l reward-icons ' src={reward} alt='' />
					<span>$BUSD Reward</span>
				</div>
				<div className='col-sm-2  icons '>
					<img className=' reward-icons ' src={liquidity} alt='' />
					<span>$BUSD Reward</span>
				</div>

				<div className='col-md-6 my-5'>
					<img className='graph-bottom  ' src={graphbottom} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Home;
