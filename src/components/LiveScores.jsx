import { News, Videos, Matchinfo } from './LiveCricketScore';
import '../App.css';
export const LiveScores = () => {
  return (
    <div id="dh4">
      <div id="d">
        <h2>Live Cricket Score</h2>
        <div id="cbplus">
          <p>
            <a id="pt" href="/#news">
              Live
            </a>
          </p>
          <p>
            <a id="pe" href="/#minifeed">
              Recent
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Upcoming
            </a>
          </p>
        </div>
        <hr />

        <div id="btnsdiv">
          <button
            style={{
              textTransform: 'none',
              backgroundColor: '#028062',
              color: 'white',
              border: 'transparent',
              borderRadius: '50px',
              width: '120px',
              height: '26px',
              marginTop: '6px',
            }}>
            International
          </button>
          <button
            style={{
              textTransform: 'none',
              backgroundColor: '#CFE0DB',
              color: 'black',
              border: 'transparent',
              borderRadius: '50px',
              width: '100px',
              height: '26px',
              marginTop: '6px',
            }}>
            National
          </button>
          <button
            style={{
              textTransform: 'none',
              backgroundColor: '#CFE0DB',
              color: 'black',
              border: 'transparent',
              borderRadius: '50px',
              width: '90px',
              height: '26px',
              marginTop: '6px',
            }}>
            Women
          </button>
        </div>
        <div id="livscrs">
          <Matchinfo />
          <div id="news">
            <h3 id="H3">FEATURED VIDEOS </h3>
            <News />
            <Videos />
          </div>
        </div>
      </div>
    </div>
  );
};
