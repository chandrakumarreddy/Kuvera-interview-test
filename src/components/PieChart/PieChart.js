import React from "react";
import "./PieChart.css";

const fixToTwo = _value => Number(_value).toFixed(2);

export default function PieChart({ fund }) {
  if (Object.keys(fund).length === 0) return null;
  return (
    <div>
      <div className="pie emp-status">
        <div className="slice status-interview">
          <div className="slice-inner">
            <span>{fixToTwo(fund["returns"]["year_1"])}</span>
            <br /> Year-01
          </div>
        </div>
        <div className="slice slice-tip status-joining">
          <div className="slice-inner">
            <span>{fixToTwo(fund["returns"]["year_5"])}</span>
            <br /> Year-03
          </div>
        </div>
        <div className="slice status-notice">
          <div className="slice-inner">
            <span>{fixToTwo(fund["returns"]["year_5"])}</span> <br />
            Year-05
          </div>
        </div>
        <div className="slice status-relieving">
          <div className="slice-inner">
            <span role="img" aria-label="question">
              ❓
            </span>{" "}
            <br />
            Year-4
          </div>
        </div>
      </div>
    </div>
  );
}
