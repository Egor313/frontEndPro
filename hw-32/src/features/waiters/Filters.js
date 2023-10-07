import { useSearchParams } from "react-router-dom";

export function Filters() {
    let [ setSearchParams] = useSearchParams();

    const onFilterBtnClick = (filter) => {
        setSearchParams(`filter=${filter}`);
      }

    return (
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => onFilterBtnClick('all')}>All</button>
        </div>
      )
}