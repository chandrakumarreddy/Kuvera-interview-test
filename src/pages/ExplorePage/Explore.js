import React from "react";
import { debounce } from "debounce";
import Loader from "../../components/Loader";
import Table from "../../components/Table.js";
import Header from "../../components/Header";
import Search from "../../components/Search";
import fundsContext from "../../fundsContext";
import { getData } from "../../utils/fetch";
import { GET_FUNDS } from "../../urls";
import { ADD_FUNDS } from "../../types";

const tableHeaders = ["Name", "Fund Category", "Fund Type", "Plan", "Returns"];

function filterResult(_value, search) {
  return (
    _value.name.toLowerCase().indexOf(search) > -1 ||
    _value.code.toLowerCase().indexOf(search) > -1 ||
    _value.fund_type.toLowerCase().indexOf(search) > -1 ||
    _value.fund_category.toLowerCase().indexOf(search) > -1
  );
}

export default function Explore(props) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { dispatch, state } = React.useContext(fundsContext);
  const [order, setOrder] = React.useState("asc");
  const [sorted, setSorted] = React.useState("name");
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const fetchFunds = async () => {
      try {
        const payload = await getData(GET_FUNDS);
        setLoading(false);
        dispatch({ type: ADD_FUNDS, payload });
      } catch (error) {
        setError("Opps something went wrong");
      }
    };
    fetchFunds();
  }, [dispatch]);
  const handleSort = _value => {
    if (tableHeaders.includes(_value)) {
      setOrder(s => (s === "asc" ? "desc" : "asc"));
      setSorted(_value.toLowerCase().replace(" ", "_"));
    }
  };
  const handleChange = e => {
    debounce(setSearch(e.target.value), 200);
  };
  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;
  return (
    <div className="explore">
      <Header />
      <br />
      <Search handleChange={handleChange} />
      <br />
      <Table
        tableHeaders={tableHeaders}
        tBody={state.funds
          .slice(0, 99)
          .filter(_value => filterResult(_value, search))
          .sort((a, b) =>
            order === "asc"
              ? a[sorted] > b[sorted]
                ? 1
                : -1
              : a[sorted] > b[sorted]
              ? -1
              : 1
          )}
        handleSort={handleSort}
        {...props}
        order={order}
      />
    </div>
  );
}
