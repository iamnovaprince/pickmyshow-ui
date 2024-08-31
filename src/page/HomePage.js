import { Navigate } from "react-router-dom";
import ScrollableCardList from "src/component/nuclear/card/ScrollableCardList";
import CookieManager from "src/component/util/CookieManager";
import Swiper from "src/component/swiper"
import Navbar from "src/component/navbar";


const TheatreDetail = [{
  theatreId: 1,
  theatreName: "PVR Cinemas",
  occupiedSeats: "[5,13,11,12,28]",
  audiNumber: 1,
  start_date: "2024-08-25",
  end_date: "2024-09-05",
  Showtime: ["12:00", "15:30", "19:00"],
  adddress: "JHV Mall, Cantoment",
  price: "300",
  city: "varanasi"
},
{
  theatreId: 2,
  theatreName: "Carnival Cinemas",
  occupiedSeats: "[12,25,19,8,5]",
  audiNumber: 3,
  Showtime: ["10:30", "13:30", "17:00","20:30"],
  start_date: "2024-08-25",
  end_date: "2024-09-05",
  adddress: "PDR Mall, Goduliya",
  price: "250",
  city: "varanasi"
},
{
  theatreId: 3,
  theatreName: "IP Cinemas",
  occupiedSeats: "[15,30,22,25,10]",
  audiNumber: 1,
  start_date: "2024-08-25",
  end_date: "2024-09-05",
  Showtime: ["10:30", "13:30", "17:00","20:30"],
  adddress: "IP Mall, Sigra",
  price: "180",
  city: "varanasi"
}]

const currentMovieData = [
  {
  id: "0",
  title: "The Shawshank Redemption",
  description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  genres: ['Drama'],
  ratings: "9.3",
  release_date: "1994",
  image_url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
  director: "Frank Darabont",
  writer: "Stephen King (novel), Frank Darabont (screenplay)",
  duration: "142",
  age_certification: "R",
  theatredetail: TheatreDetail
},
{
    id: "1",
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    genres: ['Crime', 'Drama'],
    ratings: "9.2",
    release_date: "1972",
    image_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    director: "Francis Ford Coppola",
    writer: "Mario Puzo (novel), Francis Ford Coppola (screenplay)",
    duration: "175",
    age_certification: "R",
    theatredetail: TheatreDetail
},
{
    id: "2",
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genres: ['Action', 'Crime', 'Drama'],
    ratings: "9.0",
    release_date: "2008",
    image_url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    director: "Christopher Nolan",
    writer: "Jonathan Nolan (story), Christopher Nolan (story), Christopher Nolan (screenplay)",
    duration: "152",
    age_certification: "PG-13",
    theatredetail: TheatreDetail
},
{
  id: "3",
  title: "The Godfather Part II",
  description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  genres: ['Crime', 'Drama'],
  ratings: "9.0",
  release_date: "1974",
  image_url: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
  director: "Francis Ford Coppola",
  writer: "Mario Puzo (novel), Francis Ford Coppola (screenplay)",
  duration: "202",
  age_certification: "R",
  theatredetail: TheatreDetail
},
{
  id: "4",
  title: "12 Angry Men",
  description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
  genres: ['Crime', 'Drama'],
  ratings: "9.0",
  release_date: "1957",
  image_url: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
  director: "Sidney Lumet",
  writer: "Reginald Rose (screenplay)",
  duration: "96",
  age_certification: "NR",
  theatredetail: TheatreDetail
},
{
  id: "5",
  title: "Schindler's List",
  description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  genres: ['Biography', 'Drama', 'History'],
  ratings: "9.0",
  release_date: "1993",
  image_url: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  director: "Steven Spielberg",
  writer: "Steven Zaillian (screenplay), Thomas Keneally (novel)",
  duration: "195",
  age_certification: "R",
  theatredetail: TheatreDetail
},
{
  id: "6",
  title: "The Lord of the Rings: The Return of the King",
  description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  genres: ['Action', 'Adventure', 'Drama'],
  ratings: "9.0",
  ranking: "top7",
  release_date: "2003",
  image_url: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  director: "Peter Jackson",
  writer: "Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay), J.R.R. Tolkien (novel)",
  duration: "201",
  age_certification: "PG-13",
  theatredetail: TheatreDetail
},
{
  id: "7",
  title: "Pulp Fiction",
  description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  genres: ['Crime', 'Drama'],
  ratings: "8.8",
  release_date: "1994",
  image_url: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
  director: "Quentin Tarantino",
  writer: "Quentin Tarantino (screenplay), Roger Avary (screenplay)",
  duration: "154",
  age_certification: "R",
  theatredetail: TheatreDetail
},
{
  id: "8",
  title: "The Lord of the Rings: The Fellowship of the Ring",
  description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  genres: ['Action', 'Adventure', 'Drama'],
  ratings: "8.8",
  release_date: "2001",
  image_url: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
  director: "Peter Jackson",
  writer: "Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay), J.R.R. Tolkien (novel)",
  duration: "178",
  age_certification: "PG-13",
  theatredetail: TheatreDetail
},
{
  id: "9",
  title: "The Good, the Bad and the Ugly",
  description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
  genres: ['Adventure', 'Western'],
  ratings: "8.8",
  release_date: "1966",
  image_url: "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  director: "Sergio Leone",
  writer: "Luciano Vincenzoni (screenplay), Sergio Leone (screenplay), Agenore Incrocci (screenplay), Furio Scarpelli (screenplay)",
  duration: "161",
  age_certification: "R",
  theatredetail: TheatreDetail
},
{
  id: "10",
  title: "Forrest Gump",
  description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  genres: ['Drama', 'Romance'],
  ratings: "8.8",
  release_date: "1994",
  image_url: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
  director: "Robert Zemeckis",
  writer: "Eric Roth (screenplay), Winston Groom (novel)",
  duration: "142",
  age_certification: "PG-13",
  theatredetail: TheatreDetail
}
];

const upcomingMovieData  = [
{
  title: "Martin",
  genres: ['Action','Drama'],
  ratings: "N/R",
  description: "Martin is a pulse pounding edge of the seat action thriller. A character whose dramatic journey takes him to the length and breadth of the country to fight against evil forces lurking to destroy India. But he is also in love with a beautiful lass. His journey is of discovering himself, finding love and fighting for his motherland. Can he hold the fort on all three gates?",
  image_url: "https://images.filmibeat.com/webp/img/popcorn/fan_images/movie/20279/dhruva-sarja-martin-photos-images-80432.jpg",
},
{
  title: "Devara - Part 1",
  genres: ['Action', 'Adventure', 'Drama'],
  ratings: "N/R",
  description: "Devara is a movie starring Jr. NTR, Saif Ali Khan and Janhvi Kapoor in prominent roles. It is written and directed by Koratala Siva.",
  image_url: "https://media-cache.cinematerial.com/p/500x/jiltqu5b/devara-part-1-indian-movie-poster.jpg",
},
{
  title: "Transformers One",
  genres: ['Action', 'Animation'],
  ratings: "N/R",
  description: "Every Transformers One is the untold origin story of sworn enemies Optimus Prime and Megatron. But once are bonded like brothers, they change the fate of Cybertron forever.",
  image_url: "https://www.movieposters.com/cdn/shop/files/transformers_one_480x.progressive.jpg",
},
{
  title: "Jigra",
  genres: ['Adventure','Comedy'],
  ratings: "N/R",
  description: "A sister puts up a courageous fight for her Jigra!",
  image_url: "https://upload.wikimedia.org/wikipedia/en/1/11/Jigra_film_poster.jpg",
}
];

const HomePage = () => {

  const isUserLoggedIn = new CookieManager().getCookie("isLoggedin");

  if(isUserLoggedIn !== 'true'){
    return <Navigate to="/user/login" />
  };
  
  return (
    <div className="App">
      <Navbar/>
      < Swiper items={upcomingMovieData} />
      <ScrollableCardList   items={currentMovieData} heading='Currently Playing'/>
      <ScrollableCardList   items={upcomingMovieData} heading='Coming Soon'/>
    </div>
  );
}

export default HomePage;