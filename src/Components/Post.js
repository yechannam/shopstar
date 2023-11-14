
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

	return (
		<div style={style}>
			<h1 style={headStyle}>{props.name}</h1>
			<div style={{border: '1px solid #52525255', width:'100%'}}></div>
			<ImgList />
			<div style={{border: '1px solid #52525255', width:'100%', marginTop: 'auto', marginBottom: '15px'}}></div>
			<PostNav />
		</div>
	);
}

function ImgList() {
	return <img alt="set" src="./img/home.png" style={
		{
			padding: '10px',
			maxHeight: '500px',
		}
	}></img>
}


function PostNav() {
	const Navstyle = {
		height: '40px',
		width: '40px',
		marginLeft: '10px',
	}
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
		<img alt="logo" style={Navstyle} src="img/logo.png"/>
		<img alt="logo" style={Navstyle} src="img/logo.png"/>
		<img alt="logo" style={Navstyle} src="img/logo.png"/>
		</div>
	);
}