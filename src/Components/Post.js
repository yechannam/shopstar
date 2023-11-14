
export default function Post(props) {
	const style = {
		marginTop: '40px',
		border: '2px solid #52525255',
		borderRadius: '5%',
		height: '100vh',
		width: '600px',
		marginBottom: '50px',
		display: 'flex',
		flexDirection: 'column',
	};

	const headStyle = {	
		marginLeft: '30px',
		height: '30px',
		display: 'flex',
    	alignItems: 'center',
		fontSize: '25px',
	}

	const imgs=[
		["./img/post/shirt.png"],
	];

	const imgList = imgs.map((a,i)=>{
		console.log(a, i);
		return (<ImgList key={i} imgPaths={a}/>);
	})

	return (
		<div style={style}>
			<h1 style={headStyle}>{props.name}</h1>
			<div style={{border: '1px solid #52525255', width:'100%'}}></div>

			{imgList}
			
			<div style={{border: '1px solid #52525255', width:'100%', marginTop: 'auto', marginBottom: '15px'}}></div>
			
			<PostNav price={props.price}/>
		</div>
	);
}

function ImgList(props) {
	const imgs = props.imgPaths.map((a,i)=>{
		return <img alt="set" key={i} src={a} style={
			{
				padding: '10px',
				maxHeight: '500px',
				borderRadius: '3%',
			}
		}></img>
	})

	return <>
		{imgs}
	</>
}


function PostNav(props) {
	const Navstyle = {
		height: '35px',
		width: '35px',
		marginLeft: '10px',
	}

	const formatPrice = Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(props.price);
	return (
	<div style={
		{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',	
			paddingBottom: '10px',
			maxHeight: '50px',
		}
	}>
		<img alt="heart" style={Navstyle} src="img/heart.png" />
		<img alt="add cart" style={Navstyle} src="img/cart.png"/>
		<img alt="share" style={Navstyle} src="img/share.png"/>
		<div alt="price" style={{
			marginLeft: 'auto',
			marginRight: '20px',
			fontSize: '20px',
		}} >{formatPrice}</div>
	</div>
	);
}