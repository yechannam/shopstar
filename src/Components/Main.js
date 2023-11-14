import Post from "./Post";
import Feed from "./Story";

export default function Main() {
	return (
		<div>
			<Feed></Feed>
			<div className='list'>
				<Post title="hello" />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}