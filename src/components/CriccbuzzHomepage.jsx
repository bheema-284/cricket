import { HomePage, News, Videos } from './CricHome';
import '../App.css';
export const CricbuzzHomepage = () => {
  return (
    <div id="dh4">
      <div id="d">
        <h2>Cricbuzz Plus</h2>
        <div id="cbplus">
          <p>
            <a id="pt" href="/#news">
              Trending
            </a>
          </p>
          <p>
            <a id="pe" href="/#minifeed">
              Editorials
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Videos
            </a>
          </p>
        </div>
        <hr />
      </div>
      <div>
        <h2>Featured</h2>
        <div id="news">
          <News />
        </div>
        <h2>Videos</h2>
        <Videos />
      </div>
      <hr />
      <h2>Editorials</h2>
      <div className="editorial">
        <HomePage />
      </div>
    </div>
  );
};
