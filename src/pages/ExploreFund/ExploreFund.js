import React from "react";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import fundsContext from "../../fundsContext";
import { getData } from "../../utils/fetch";
import { GET_FUND } from "../../urls";
import { ADD_FUND } from "../../types";
import PieChart from "../../components/PieChart";

export default function ExploreFund({ match }) {
  const fund_code = match.params.fund_code;
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { dispatch, state } = React.useContext(fundsContext);
  React.useEffect(() => {
    const fetchFund = async () => {
      try {
        const payload = await getData(`${GET_FUND}/${fund_code}.json`);
        setLoading(false);
        dispatch({ type: ADD_FUND, payload });
      } catch (error) {
        console.log(error.message);
        setError("Opps something went wrong");
      }
    };
    fetchFund();
  }, [dispatch, fund_code]);
  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;
  const renderFund = () => {
    const fund = state.fund?.[0];
    const fundKeys = Object.keys(fund);
    if (fundKeys.length === 0) return null;
    fundKeys.length = 10;
    return fundKeys.map(_fund => (
      <div>
        {_fund} :- {JSON.stringify(fund[_fund])}
      </div>
    ));
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-8">{renderFund()}</div>
          <div className="col-sm-4">
            <h1 className="text-center">Returns</h1>
            <PieChart fund={state.fund[0]} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
