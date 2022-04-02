import { HomePage, LatestScores, News, Videos } from './HomePage';
import '../App.css';
export const Home = () => {
  return (
    <>
      <div id="dh3">
        <h3 id="H3">FEATURED MATCHES</h3>
      </div>
      <div id="scores">
        <div className="scores">
          <LatestScores />
        </div>
      </div>
      <hr />
      <div className="container">
        <News />
        <HomePage />
        <Videos />
      </div>
    </>
  );
};
