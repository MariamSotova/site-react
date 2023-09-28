import logo from "./img/donut.svg";

export const Main = () => {
  return (
    <div className="main-wrp">
      <img src={logo} className="main-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://github.com/MariamSotova"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};
