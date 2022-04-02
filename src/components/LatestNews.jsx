import { HomePage, News, Videos } from './CricLatestNews';
import '../App.css';
export const LatestNews = () => {
  return (
    <div id="dh4">
      <div id="d">
        <div id="cbplus">
          <p>
            <a id="pe" href="/news">
              All Stories
            </a>
          </p>
          <p>
            <a id="pe" href="/crickbuzzplus">
              Cricbuzz Plus
            </a>
          </p>
          <p>
            <a id="pt" href="/news">
              News
            </a>
          </p>
          <p>
            <a id="pe" href="/news">
              Topics
            </a>
          </p>
          <p>
            <a id="pe" href="/news">
              Spotlight
            </a>
          </p>
          <p>
            <a id="pe" href="/news">
              Opinions
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Special
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Stats
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Interview
            </a>
          </p>
          <p>
            <a id="pe" href="/news">
              Live Blogs
            </a>
          </p>
        </div>
        <hr />
        <h2>Latest Cricket News</h2>
        <hr />
      </div>
      <div>
        <div id="news">
          <News />
        </div>
        <Videos />
      </div>

      <div className="editorial">
        <HomePage />
      </div>
    </div>
  );
};
