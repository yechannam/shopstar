import Post from "./Post";
import Feed from "./Story";

export default function Main() {
	const postsInfo = [
		{
			id: 1,
			name: 'new T-shrit',
			price: '10000',
		},
		{
			id: 2,
			name: 'new Jeans',
			price: '25000',
		},
		{
			id: 3,
			name: 'new shoes',
			price: '110000',
		}
	]
	const posts = (
		postsInfo.map(function(a) {
			return <Post key={a.id} name={a.name} price={a.price}></Post>
	}));

	return (
		<div>
			<Feed></Feed>
			<div className='list'>
				{posts}
			</div>
		</div>
	)
}