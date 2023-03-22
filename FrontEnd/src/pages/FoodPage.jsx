import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../consts-data';
import reviews from './Review';

const FoodPage = () => {
  const [food, setFood] = useState({});
  const { foodId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/foods/${foodId}`);
        setFood(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <div>
          <li>
            <h1>{food.name}</h1>
          </li>
          <li>
            <h2>{food.origin}</h2>
          </li>
          <li>
            <img src={food.foodUrl} />
          </li>
        </div>
        <li>
          <p>{food.description}</p>
        </li>
        <li>
          <p>{reviews}</p>
        </li>
      </ul>
    </div>
  );
};

export default FoodPage;