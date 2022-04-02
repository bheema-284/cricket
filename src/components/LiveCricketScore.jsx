import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const News = () => {
  const [mockData1, setMockdata1] = useState([]);
  const url1 = 'https://cricbuzz-backend.herokuapp.com/news';

  useEffect(() => {
    axios.get(url1).then((res) => {
      setMockdata1(res.data);
    });
  }, []);
  console.log(mockData1);
  return (
    <>
      <div className="news1">
        {mockData1.map((el) => {
          return (
            <div className="newsss">
              <div>
                <img className="imgns" src={el.image} alt="" />
                <div id="headg">
                  <h5>
                    <Link
                      to={`/news/${el.id}`}
                      className="lnk"
                      style={{ textDecoration: 'none' }}>
                      {el.title}
                    </Link>
                  </h5>
                </div>
                <p className="p23">{el.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Videos = () => {
  const [mockData2, setMockdata2] = useState([]);
  const url2 = 'https://cricbuzz-backend.herokuapp.com/videos';

  useEffect(() => {
    axios.get(url2).then((res) => {
      setMockdata2(res.data);
    });
  }, []);
  console.log(mockData2);
  return (
    <>
      <>
        <div className="news1">
          {mockData2.map((el) => {
            return (
              <div className="newsss">
                <div>
                  <img className="imgns" src={el.image} alt="" />
                  <div id="headg">
                    <h5>
                      <Link
                        to={`/videos/${el.id}`}
                        className="lnk"
                        style={{ textDecoration: 'none' }}>
                        {el.title}
                      </Link>
                    </h5>
                  </div>
                  <p className="p23">{el.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

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
      <div className="data4">
        {mockData3.map((el) => {
          return (
            <>
              <div id="title">
                <h3 id="tleh3">{el.name}</h3>
              </div>
              <div className="data4">
                <p>{el.status}</p>
                <div id="datevenue">
                  <p>{el.dateTimeGMT}</p>
                  <p>
                    <li>{el.venue}</li>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
