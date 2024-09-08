import { Navigate } from "react-router-dom";
import ScrollableCardList from "src/component/nuclear/card/ScrollableCardList";
import CookieManager from "src/component/util/CookieManager";
import Swiper from "src/component/swiper";
import Navbar from "src/component/navbar";

// Import movie data
import { currentMovieData, upcomingMovieData } from '../Data/MovieData';

const HomePage = () => {
  const isUserLoggedIn = new CookieManager().getCookie("isLoggedin");

  if (isUserLoggedIn !== 'true') {
    return <Navigate to="/user/login" />;
  }

  return (
    <div className="App">
      <Navbar />
      <Swiper items={upcomingMovieData} />
      <ScrollableCardList items={currentMovieData} heading='Currently Playing' />
      <ScrollableCardList items={upcomingMovieData} heading='Coming Soon' />
    </div>
  );
}

export default HomePage;
