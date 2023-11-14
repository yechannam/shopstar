
const styles = {
  feedList: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '4px',
    cursor: 'pointer',
    overflowX: 'auto',
    width: '600px',
  },
  storyFeedInnerCircle: {
    width: '95px',
    height: '95px',
    background: '#2196f3',
    borderRadius: '50%',
    border: '4px solid white',
  },
  storyFeedOuterCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    width: '115px',
    height: '115px',
    marginRight: '5px',
    borderRadius: '50%',
    background: 'linear-gradient(253.4deg, rgba(64, 93, 230, 0.8) 31.1%, rgba(147, 60, 219, 0.79) 51.28%, rgba(193, 53, 132, 0.81) 69.63%, rgba(253, 29, 29, 0.83) 86.15%)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
  },
};


function Story(props) {
  return (
    <div style={styles.storyFeedOuterCircle}>
      <div style={styles.storyFeedInnerCircle}>
      </div>
    </div>
  );
}

function Feed(props) {
  return(
    <div style={styles.feedList}>
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
