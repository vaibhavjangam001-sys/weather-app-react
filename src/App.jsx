import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, fetchForeCast } from "./redux/actions/weatherAction";
const App = () => {
  const weather = useSelector((state) => state.weatherReducer.weather);
  const foreCast = useSelector((state) => state.weatherReducer.foreCast);
  const city = useSelector((state) => state.weatherReducer.city);
  const loading = useSelector((state) => state.weatherReducer.isLoading);
  const error = useSelector((state) => state.weatherReducer.error);
  

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchWeather("mumbai"));
    // dispatch(fetchForeCast("mumbai"));
  }, []);

  return <div className="bg-red-500">App</div>;
};

export default App;
