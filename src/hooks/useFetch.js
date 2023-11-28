import {useState, useEffect, useRef} from 'react';
import {fetchSinToken} from '../helpers/fetch';

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({datos: null, loading: true, error: null});

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    try {
      setState({datos: null, loading: true, error: null});

      const fech = async () => {
        const resp = await fetchSinToken(url, {}, 'POST');
        const {respuesta} = await resp.json();

        console.log(respuesta);

        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            datos: respuesta
          });
        }
      }

      fech();


    } catch (error) {
      setState({
        datos: null,
        loading: false,
        error: error
      })
    }

  }, [url])
  return state;
}
