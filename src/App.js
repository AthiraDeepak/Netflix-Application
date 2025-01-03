
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
  <div className='App'>
    <Nav/>
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     
      <Row title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Top Rated" 
      fetchUrl={requests.fetchTopRated} />
     <Row title="Trending Movies" 
      fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" 
      fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" 
      fetchUrl={requests. fetchHorrorMovies} />
      <Row title="Romantic Movies" 
      fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" 
      fetchUrl={requests.fetchDocumentaries} />
  </div>
    

  );
}

export default App;
