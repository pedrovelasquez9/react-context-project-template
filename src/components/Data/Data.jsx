import React, { useEffect, useContext } from "react";
import { Context } from "../../store/Store";
import { fetchData } from "../../services/dataService";
import ListItem from "../ListItem/ListItem";
import { DATA_ACTIONS } from "../../utils/actionHelpers";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Data = () => {
  const [state, dispatch] = useContext(Context);

  const fetchInitialData = () => {
    fetchData()
      .then((jsonData) => {
        const data = jsonData.results;
        dispatch({ type: DATA_ACTIONS.SET_DATA, payload: data });
      })
      .catch((error) => {
        dispatch({ type: DATA_ACTIONS.SET_ERROR, payload: error });
      });
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  let data = <Loading message="Cargando..."></Loading>;

  if (state.error) {
    data = (
      <ErrorMessage
        message="Ha ocurrido un error llamando a la API"
        error={state.error}
      ></ErrorMessage>
    );
  }

  if (!state.error && state.data) {
    data = state.data.map((item, index) => {
      return <ListItem key={index} value={item}></ListItem>;
    });
  }

  return <ul>{data}</ul>;
};

export default Data;
