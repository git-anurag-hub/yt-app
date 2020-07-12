import React from "react";

const VIdeoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={src} title="videoPlayer"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VIdeoDetail;
