import logo from "../../assets/Screenshot 2024-08-28 200018.png";
import Popup from  "../Popup";
import Searchbar from "../searchbar/Index";
import "./index.css";


export default function Navbar() {

  /*const onSearchChange = debounce((e) => {
    if (e.target.value.length > 2) { 
      dispatch(getMoviesBySearch(e.target.value));
      dispatch(setcurrentPage(1));
    }else{
      dispatch(getMovies())
    }
  }, 500);*/

  return (
    <header className="navbar">
      <img id="logo" src={logo} alt="logo"/>
      <Searchbar/>
      <Popup/>
    </header>
  );
}