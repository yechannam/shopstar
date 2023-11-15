import './Story.css'
import Popup from 'reactjs-popup';
import myimg from './close.jpg'

function Story(props) {
  return (
    <div className='story-feed-outer-circle'>
      <Popup trigger={<div className='story-feed-inner-circle'></div>} modal>
        {/* <img src={myimg}></img> */}
        <div className="image-container">
        </div>
      </Popup>
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
