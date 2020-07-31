import React from 'react';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [ ]
      
    };
  }
  
  componentDidMount() {

    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20451fdfe736ac7bf0377dc9bd8fbf04'
    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({movies: result})
        
      })
  }
  
  render() {
    console.log(this.state.movies);
      return (
        <div>
          <ul>
            {this.state.movies.results.map(result => (
            <li key = {result.id}>{result.title}
            </li>))}
          </ul>
        </div>
      );
    }
}
    



export default Popular;