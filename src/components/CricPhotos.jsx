import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Photoscb = () => {
  const { id } = useParams();
  const [mockData, setMockdata] = useState([]);
  const url = `https://cricbuzz-backend.herokuapp.com/photos`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata(res.data);
    });
  }, []);
  console.log(mockData);
  return (
    <>
      <div className="dataphots">
        {mockData.map((el) => {
          return (
            <div className="photos">
              <Link style={{ color: 'white' }} to={`/photos/${el._id}`}>
                <img className="imgphotos" src={el.img} alt="" />
                <h4 style={{ paddingLeft: '10px' }}>{el.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
