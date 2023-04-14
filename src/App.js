import './App.css';
import './MyComponents/style1.css';
import Header from "./MyComponents/Header";
import About from "./MyComponents/About";
import Layout from "./MyComponents/Layout";
import Footer from "./MyComponents/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let a, val, url, pic, html;
  function myfunction() {
    a = document.getElementById('nameid').value;
    if (a === "") {
      alert("Enter the movie or series");
    }
    else {
      url = "https://api.themoviedb.org/3/search/movie?api_key=9625803e1ef16ae505ef82d07be55799&query=";
      val = (url + a);
      getData();
    }
  }
  function getData() {
    fetch(val).then((response) => {
      return response.json();
    }).then((data) => {
      displayData(data);
    })
  }
  function displayData(data) {
    pic = "https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path;
    html = "<img src=\"" + pic + '"width="40%" height="20%" id="user_pic"></img><br>'
      + "<div class=\"user_info_fetch\">"
      + "<div class=\"movie_title\">"+ data.results[0].original_title + "</div><br>"
      + "<div class=\"movie_info\">Release Date: </div>" + data.results[0].release_date + "<br>"
      + "<div class=\"movie_info\">Vote Average: </div>" + data.results[0].vote_average + "<br>"
      + "<div class=\"movie_info\">Vote Count: </div>" + data.results[0].vote_count + "<br>"
      + "<div class=\"movie_info\">Over-view: </div>" + data.results[0].overview +"<br></div>"
    document.getElementById("info").innerHTML = html;
  }
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/" render={() => {
            return (
              <>
                <Layout myfunction={myfunction} />
              </>)
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
