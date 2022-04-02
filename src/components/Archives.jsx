import { Matchinfo } from './CricArchives';
import '../App.css';
export const Archives = () => {
  return (
    <div id="dh4">
      <div id="d">
        <div id="cbplus">
          <p>
            <a id="pe" href="/#news">
              Current Matches
            </a>
          </p>
          <p>
            <a id="pe" href="/#minifeed">
              Current & Future Series
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Matches By Day Teams
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Teams
            </a>
          </p>
          <p>
            <a id="pt" href="/#videos">
              Series Archive
            </a>
          </p>
        </div>
        <hr />
        <h2>Cricket Match Archives</h2>
        <h2>2022</h2>
        <hr />
        <div id="archives">
          <Matchinfo />
        </div>
      </div>
    </div>
  );
};
