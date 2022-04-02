import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const NewsDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://cricbuzz-backend.herokuapp.com/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((er) => {
        setProduct(false);
      });
  }, []);

  return (
    <>
      {product ? (
        <div className="product">
          <img src={product.image} alt="" style={{ width: '150px' }} />
          <div className="productDetails" style={{ padding: '20px' }}>
            <div>
              <h2 className="productName">{product.title}</h2>
              <img className="img2" src={product.image} alt="" />
            </div>
            <h5>Content : </h5>
            <div className="spec">{product.content}</div>
          </div>
        </div>
      ) : (
        'Product Does Not Exist'
      )}
    </>
  );
};
