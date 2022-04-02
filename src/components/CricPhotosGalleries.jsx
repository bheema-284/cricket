import './Styles.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const PhotosGalleries = () => {
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
      <div className="dataphotos">
        {mockData.map((el) => {
          return (
            <div className="photogallery">
              <Link style={{ color: 'white' }} to={`/photos/${el._id}`}>
                <img className="imgphotos" src={el.img} alt="" />
                <h4 style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                  {el.title}
                </h4>

                <div id="btnsphoto">
                  <button id="facebook">
                    <FacebookIcon
                      style={{
                        color: 'white',
                      }}
                      fontSize="small"
                    />
                    Share
                  </button>
                  <button id="twter">
                    <TwitterIcon
                      style={{
                        color: 'white',
                      }}
                      fontSize="small"
                    />
                    Twitter
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
