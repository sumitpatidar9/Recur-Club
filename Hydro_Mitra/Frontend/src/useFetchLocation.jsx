import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetchLocation() {
  const [loc, setloc] = useState("");
  const [error, seterror] = useState("");

  const URL = import.meta.env.VITE_API_URL;

  const fetchLoc = async () => {
    await axios
      .get(`${URL}/get_all_location`)
      .then((res) => {
        setloc(res.data);
      })
      .catch((error) => {
        seterror(error);
        console.log("Error in fetching Location : ", error);
      });
  };

  useEffect(() => {
    fetchLoc();
  }, []);

  return { loc, error };
}

export default useFetchLocation;
