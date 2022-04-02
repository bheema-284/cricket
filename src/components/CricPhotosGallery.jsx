import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export const PhotosGallerycb = () => {
  const { id } = useParams();
  const [mockData, setMockdata] = useState([]);
  const url = `https://cricbuzz-backend.herokuapp.com/photos/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata({ id: res.data });
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
                <h4 style={{ paddingLeft: '10px' }}>{el.content}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
