import { useDispatch, useSelector } from "react-redux";
import {setFilter} from "redux/filterSlice"
import {getFilter} from 'redux/selectors'


export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter);
  return (
    <input
      type="text"
      value={filter}
      name="filter"
      onChange={event => dispatch(setFilter(event.target.value.trim()))}
    />
  );
};
