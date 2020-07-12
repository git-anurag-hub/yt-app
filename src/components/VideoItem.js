import React from "react";
import "./videoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item video-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
