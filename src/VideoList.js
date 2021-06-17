import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , onVideoSelect}) => {
    const renderedList  = videos.map((video) => {
        return (<VideoItem key = {video.id.videoId} 
            video = {video} onVideoSelect= {onVideoSelect}/>)
    });

return <div className = 'ui relaxed divided list'>{renderedList}</div>
}

// class VideoList extends React.Component {

//         asd = () =>{
//             const renderedList =  this.props.videos.map((video) => {
//                          return <VideoItem />
//                      });
//             return renderedList;
//         }
//     // const renderedList =  this.props.videos.map((video) => {
//     //      return <VideoItem />
//     //  });
     
//      render(){
//      return <div>{this.asd()}</div>
//      }
//  }


export default VideoList;




