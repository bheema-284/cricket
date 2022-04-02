import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const Teamsinfo = () => {
  const [mockData3, setMockdata3] = useState([]);
  const url3 =
    'https://api.cricapi.com/v1/countries?apikey=8fb2094c-bd8b-4406-b438-2cc52cff19ea&offset=0';

  useEffect(() => {
    axios.get(url3).then((res) => {
      setMockdata3(res.data.data);
    });
  }, []);
  console.log(mockData3);
  return (
    <>
      <div className="data6">
        {mockData3.map((el) => {
          return (
            <>
              <div id="title6">
                <div id="flagdiv">
                  <img id="flag" src={el.genericFlag} alt="teams" />
                </div>
                <div id="country">
                  <h4>{el.name}</h4>
                </div>
              </div>
            </>
          );
          <hr />;
        })}
      </div>
    </>
  );
};
