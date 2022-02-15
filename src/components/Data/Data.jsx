import React, { useEffect, useContext } from "react";
import { Context } from "../../store/Store";
import { fetchData } from "../../services/dataService";
import ListItem from "../ListItem/ListItem";
import { DATA_ACTIONS } from "../../utils/actionHelpers";

const Data = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    fetchData()
      .then((jsonData) => {
        const data = jsonData.results;
        dispatch({ type: DATA_ACTIONS.SET_DATA, payload: data });
      })
      .catch((error) => {
        dispatch({ type: DATA_ACTIONS.SET_ERROR, payload: error });
      });
  }, []);

  let data = <p>Cargando...</p>;

  if (state.error) {
    data = <p>Ha ocurrido un error llamando a la API</p>;
  }

  if (!state.error && state.data) {
    data = state.data.map((item, index) => {
      return <ListItem key={index} value={item}></ListItem>;
    });
  }

  return <ul>{data}</ul>;
};

export default Data;
