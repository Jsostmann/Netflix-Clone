import React, { Component } from 'react';
 

class movieShowcaseRow extends Component {


   render() {
      let netflixUrl = false; 
      const netflixStyle = {
         height: "52rem",
         width: "50%"
      }

      if (this.props.url === "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
        netflixUrl = true; 
      }

      return (

         <div onClick={this.props.movieDetails} style={netflixUrl ? netflixStyle : null} className={"movieShowcase__container--movie"}>
            <img src={this.props.posterUrl} className="movieShowcase__container--movie-image"/>
         </div>

    
      ); 
   }
}

export default movieShowcaseRow; 