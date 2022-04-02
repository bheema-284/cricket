import { CbRanking } from './CricRanking';
import { HomePage, News, Videos } from './CricPravicy';
import '../App.css';
export const Rankings = () => {
  return (
    <div id="dh4">
      <div id="dr">
        <h2>ICC Cricket Rankings - Men's Batting</h2>
        <hr />
        <div id="cbplus">
          <p>
            <a id="pt" href="/#news">
              Batting
            </a>
          </p>
          <p>
            <a id="pe" href="/#minifeed">
              Bowling
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Allround
            </a>
          </p>
          <p>
            <a id="pe" href="/#videos">
              Teams
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
              width: '80px',
              height: '26px',
              marginTop: '6px',
            }}>
            TEST
          </button>
          <button
            style={{
              textTransform: 'none',
              backgroundColor: '#CFE0DB',
              color: 'black',
              border: 'transparent',
              borderRadius: '50px',
              width: '70px',
              height: '26px',
              marginTop: '6px',
            }}>
            ODI
          </button>
          <button
            style={{
              textTransform: 'none',
              backgroundColor: '#CFE0DB',
              color: 'black',
              border: 'transparent',
              borderRadius: '50px',
              width: '60px',
              height: '26px',
              marginTop: '6px',
            }}>
            T20
          </button>
        </div>
        <div id="rankingandnews">
          <div id="schedules">
            <CbRanking />
          </div>
          <div id="privnewsr">
            <h3 id="H3">LATEST NEWS</h3>
            <Videos />
            <News />
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  );
};
