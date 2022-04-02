import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const Matchinfo = () => {
  const [mockData3, setMockdata3] = useState([]);
  const url3 =
    'https://api.cricapi.com/v1/currentMatches?apikey=8fb2094c-bd8b-4406-b438-2cc52cff19ea&offset=0&4bb075f6-10d9-4d0b-937a-65fed76bd2a8';

  useEffect(() => {
    axios.get(url3).then((res) => {
      setMockdata3(res.data.data);
    });
  }, []);
  console.log(mockData3);
  return (
    <>
      <div className="data5">
        {mockData3.map((el) => {
          return (
            <>
              <div id="title2">
                <h3 id="tleh4">{el.dateTimeGMT}</h3>
              </div>
              <div className="data5">
                <div id="datevenue">
                  <h4>{el.name},</h4>
                  <p id="venue">{el.venue}</p>
                </div>
              </div>
              <div id="sts">
                <p>{el.status}</p>
                <p>{el.date}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
