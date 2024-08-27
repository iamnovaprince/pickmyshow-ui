import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ImageCardProps, MoviePromoCardProps } from "src/component/nuclear/card/CardProps";
import MoviePromoCard from "src/component/nuclear/card/MoviePromoCard";
import ScrollableCardList from "src/component/nuclear/card/ScrollableCardList";
import CookieManager from "src/component/util/CookieManager";
import { MovieDetail, TheatreDetail } from "./movie-data.model";

const commonSampleTheatre:TheatreDetail = {
  theatreId: 1,
  theatreName: "JHV Cinemas",
  seatMapping: [[1,2,3,4,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
  audiNumber: 1,
  adddress: "Cantoment, Varanasi, Uttar Pradesh"
}

const fixeMovieData :MovieDetail[] = [{
  name: "Munjya - 3D",
  theatredetail: commonSampleTheatre,
  description: "Munjya is a 2024 comedy-horror film based on a Konkan folklore myth about a vengeful spirit that wants to get married. The film is about a young man who visits his hometown and discovers the spirit, called a Munjya, and a family secret. The Munjya is the ghost of a boy who died before marriage but after his munja ceremony, and is said to inhabit peepal trees or near wells. The Munjya is described as a restless bachelor ghost who is clever and multilingual, and roams trees at night. The young man must fight to protect himself and his love from the Munjya",
  showtime: new Date(),
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/39/Munjya_2024.jpg"
},{
  name: "Chandu - 2D",
  theatredetail: commonSampleTheatre,
  description: "Horron  Movie",
  showtime: new Date(),
  posterUrl: "https://stat5.bollywoodhungama.in/wp-content/uploads/2024/06/Chandu-Champion-4-322x438.jpg"
},{
  name: "Avenger Age of Ultron - 3D",
  theatredetail: commonSampleTheatre,
  description: "Superhero  Movie",
  showtime: new Date(),
  posterUrl: "https://m.media-amazon.com/images/I/81mmNk1-LbL._AC_UF1000,1000_QL80_.jpg"
},{
  name: "Avenger Endgame - 3D",
  theatredetail: commonSampleTheatre,
  description: "Avengers: Endgame is a 2019 Marvel superhero movie that takes place after the events of Avengers: Infinity War (2018). In the film, the remaining Avengers and their allies try to undo Thanos' actions from Infinity War, which wiped out half of all life in the universe. The Avengers must work together to restore the universe and bring back their lost loved ones. The film is about friendship, teamwork, and overcoming obstacles to uphold reality",
  showtime: new Date(),
  posterUrl: "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg"
}];

const HomePage = () => {
  const [movieData , setMovieData] = useState<MovieDetail>(fixeMovieData[0]);
  const isUserLoggedIn = new CookieManager().getCookie("isLoggedin");

  if(isUserLoggedIn !== 'true'){
    return <Navigate to="/login" />
  };
  

  let itemList: MovieDetail[] = fixeMovieData;

  for(let i=0;i<3;i++){
    itemList = itemList.concat(itemList);
  }

  const handlePreview = (movieData: MovieDetail) => {
    setMovieData(movieData);
  }

  return (
    <div className="App">
      <MoviePromoCard movieData={movieData} />
      <ScrollableCardList  onSelect = {handlePreview} items={itemList} heading='Currently Playing'/>
    </div>
  );
}

export default HomePage;