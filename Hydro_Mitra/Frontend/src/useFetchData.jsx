import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (filter , selectedLoc) => {
  const URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [counter, setUpdateCounter] = useState(0);
  console.log("Fetch data" ,selectedLoc);

  const fetchData = async (filter ) => {
    console.log("Filter Value", filter == "5 min");
    let url = `${URL}/esp/get_sensor_data/6`; // Default for 'Live'
    if (filter == "5 min") {
      url = `${URL}/esp/get_sensor_data/8`;
    } else if (filter == "10 min") {
      url = `${URL}/esp/get_sensor_data/10`;
    }

console.log("Selected Id= " , selectedLoc);
    await axios
      .get(url, {
        params: {
          location_id:selectedLoc ,
        },
        withCredentials: true,
      })
      .then((res) => {
        setData((prevData) => {
          // Force a state update even if the data is the same
          console.log("New data:", res.data);
          setError("");
          return res.data; // Ensure to return the new data
        });
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    let Interval = 3000;
    fetchData(filter,selectedLoc);

    if (filter == "5 min") {
      Interval = 6000;
    } else if (filter == "10 min") {
      Interval = 9000;
    }

    const IntervalId = setInterval(() => {
      fetchData(filter);
    }, Interval);

    return () => {
      clearInterval(IntervalId);
    };
  }, [filter , selectedLoc]);

  return { data, error }; // Return the data to the calling component
};

export default useFetchData;
