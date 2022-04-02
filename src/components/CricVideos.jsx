import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [mockData, setMockdata] = useState([]);
  const url = 'https://cricbuzz-backend.herokuapp.com/minifeed';
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
            <div className="editorials">
              <img className="img11" src={el.image} alt="" />
              <div id="cont">
                <p>{el.title}</p>
                <h2>{el.heading}</h2>
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
      <div className="news">
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
        <div className="news">
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
