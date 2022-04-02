import { Teamsinfo } from './CricTeams';
import '../App.css';
export const Teams = () => {
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
            <a id="pt" href="/#videos">
              Teams
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Series Archive
            </a>
          </p>
        </div>
        <hr />
        <h2>Cricket Teams</h2>
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
              width: '150px',
              height: '26px',
              marginTop: '6px',
            }}>
            Domestic
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
            Leauge
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
        <div id="schedules">
          <Teamsinfo />
        </div>
      </div>
    </div>
  );
};
