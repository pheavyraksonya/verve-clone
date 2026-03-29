import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useFetch = (selector, thunk) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(selector);
  useEffect(() => {
    dispatch(thunk());
  }, []);
  return { data, status };
};

export default useFetch;
