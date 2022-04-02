import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const CbRanking = () => {
  const [mockData, setMockdata] = useState([]);
  const url = 'https://cricbuzz-backend.herokuapp.com/ranking';
  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata(res.data);
    });
  }, []);
  console.log(mockData);
  return (
    <>
      <div className="rankings">
        <div id="headrank">
          <p id="rankp">Position</p>
          <p id="rankpy">Player</p>
          <p id="rankr">Rating</p>
        </div>
        {mockData.map((el) => {
          return (
            <div className="ranking">
              <p>{el.position}</p>
              <div id="rankimgbox">
                <div id="imgboxxx">
                  <img className="imgrankg" src={el.player_img} alt="" />
                </div>
                <div>
                  <h4>{el.player_name}</h4>
                  <p>{el.player_country}</p>
                </div>
              </div>
              <div id="cont">
                <p>{el.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
