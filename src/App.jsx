// import reactLogo from "./assets/react.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faUser, faBook } from "@fortawesome/free-solid-svg-icons";

const VITE_TITLE = import.meta.env.VITE_TITLE;

function App() {
  window.onscroll = function () {
    // scrollFunction();
    showSectionSteam();
  };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 24 ||
  //     document.documentElement.scrollTop > 24
  //   ) {
  //     document.getElementById("header").style.fontSize = "64px";
  //   } else {
  //     document.getElementById("header").style.fontSize = "72px";
  //   }
  // }

  function showSectionSteam() {
    var sectionStream = document.getElementById("section-stream");
    var allTopicInStream = document.getElementsByClassName("topic");
    if (document.documentElement.scrollTop - sectionStream.offsetTop > 0) {
      sectionStream.classList.add("no-opacity");
      for (let i = 0; i < allTopicInStream.length; i++) {
        allTopicInStream[i].style.transform = "translateX(0%)";
        if (i < 2) {
          allTopicInStream[i].style.transition = `ease-out ${1 + i / 2}s`;
        } else {
          allTopicInStream[i].style.transition = `ease-out 0.5s`;
        }
      }
    }
  }

  return (
    <>
      <section className="section section-top">
        <div className="content">
          <h1 id="header">{VITE_TITLE}</h1>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </section>

      <section id="section-stream" className="section section-stream">
        <img
          className="play"
          src="https://i.ibb.co/TvdbMhQ/play-button.png"
          alt=""
        />
        <div className="content">
          <div>
            <h2 className="topic secondary-text">Stream Everything</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div>
            <h2 className="topic secondary-text">Short is the New Long</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="">
            <FontAwesomeIcon
              icon={faVideo}
              className="secondary-text"
              size="3x"
            />
            <h2 className="topic">
              Watch<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faUser}
              className="secondary-text"
              size="3x"
            />
            <h2 className="topic">
              Share<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faBook}
              className="secondary-text"
              size="3x"
            />
            <h2 className="topic">
              Learn<span className="secondary-text dot">.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              dicta consectetur incidunt omnis nam quis quidem nisi ipsa
              deserunt.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-bottom"></section>
    </>
  );
}

export default App;
