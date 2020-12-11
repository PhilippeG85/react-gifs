import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "vtYHCDsmiYtEr977Zf"
    };
  }

  search = (query) => {
    giphy('c4FnOjJm7Pmnx4McvsKjLPANCm4TneNS').search({
      q: query,
      limit: 10
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
