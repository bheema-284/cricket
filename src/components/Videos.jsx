import { News, Videos } from './CricHome';
import '../App.css';
export const Videoscb = () => {
  return (
    <div id="dh4">
      <div id="d">
        <h2>All Cricket Videos</h2>
        <div id="cbplus">
          <p>
            <a id="pt" href="/#news">
              All Videos
            </a>
          </p>
          <p>
            <a id="pe" href="/#minifeed">
              Categories
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Playlists
            </a>
          </p>
        </div>
        <hr />
      </div>
      <h2>Latest Videos</h2>
      <div>
        <div id="news">
          <News />
        </div>
        <h2>India</h2>
        <Videos />
        <hr />
        <h2>Playlists</h2>
        <News />
        <hr />
        <h2>Ashes Match Clips</h2>
        <Videos />
        <hr />
        <h2>BBL Match Clips</h2>
        <News />
        <hr />
        <h2>Categories</h2>
        <Videos />
        <hr />
        <h2>Cricbuzz in Conversation</h2>
        <News />
        <hr />
        <h2>Press Conference</h2>
        <Videos />
        <hr />
        <h2>Match Clips of India tour of England, 2021</h2>
        <News />
        <hr />
        <h2>Stranger XI</h2>
        <Videos />
        <hr />
        <h2>Castrol Activ Champions</h2>
        <News />
        <hr />
        <h2>Cricbuzz Specials</h2>
        <Videos />
        <hr />
        <h2>Cricbuzz Comm Box Shows</h2>
        <News />
        <hr />
        <h2>IPL 2019</h2>
        <Videos />
        <hr />
      </div>
    </div>
  );
};
