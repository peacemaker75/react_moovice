import React from 'react';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
      
    };
  }

  componantDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20451fdfe736ac7bf0377dc9bd8fbf04')
      .then(res => console.log(res));
  }
  
  render() {
      return (
        <div>
          Movies
        </div>
      );
    }
}
    



export default Popular;