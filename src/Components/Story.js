import './Story.css'

function Story(props) {
  return (
    <div className='story-feed-outer-circle'>
      <div className='story-feed-inner-circle'>
      </div>
    </div>
  );
}

function Feed(props) {
  return(
    <div className='feed-list'>
      <Story></Story>
      <Story></Story>
      <Story></Story>
      <Story></Story>
      <Story></Story>
      <Story></Story>
      <Story></Story>
      <Story></Story>
      <Story></Story>
    </div>
  )
}

export default Feed
