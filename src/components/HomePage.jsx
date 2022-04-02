import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const HomePage = () => {
  const [mockData, setMockdata] = useState([]);
  const url = 'https://cricbuzz-backend.herokuapp.com/feed';

  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata(res.data);
    });
  }, []);
  console.log(mockData);
  return (
    <>
      <div className="data">
        {mockData.map((el) => {
          return (
            <div className="data1">
              <p>{el.title}</p>
              <img className="img" src={el.image} alt="" />
              <div>
                <h1>{el.heading}</h1>
                <p> {el.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
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
      <div className="data">
        <h3 id="H3">LATEST NEWS</h3>
        {mockData1.map((el) => {
          return (
            <div className="data2">
              <p>
                <Link
                  to={`/news/${el.id}`}
                  className="lnk"
                  style={{ textDecoration: 'none' }}>
                  {el.title}
                </Link>
              </p>
              <div>
                <p className="p2">{el.time}</p>
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
      <div className="data">
        <h3 id="H3">FEATURED VIDEOS</h3>
        {mockData2.map((el) => {
          return (
            <div className="data3">
              <img className="img3" src={el.image} alt="" />
              <h3>{el.title}</h3>
              <p>{el.content}</p>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const LatestScores = () => {
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
            <div className="data4">
              <p>{el.name}</p>
              <p>{el.status}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
