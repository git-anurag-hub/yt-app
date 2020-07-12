import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VIdeoDetail from "./VIdeoDetail";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearchSubmit("ted-ed");
  }

  onSearchSubmit = async (term) => {
    const KEY = "AIzaSyCq8S1lNjv1dpWSCHdwBPzxMziP4pL6htE";
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onSearchSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VIdeoDetail video={this.state.selectedVideo}></VIdeoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
