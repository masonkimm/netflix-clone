import './App.css';
import logo from './logo.svg';
import requests from './js/requests';
import Row from './components/Row/Row';

import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar />

      <Banner />
      <Row
        genre="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row genre="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row genre="Top Rated 💯" fetchUrl={requests.fetchTopRated} />
      <Row genre="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row genre="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row genre="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row genre="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row genre="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
