import React from "react";
import { Link } from "react-router-dom";

export default function Table({
  tableHeaders,
  tBody,
  match,
  handleSort,
  order = "asc"
}) {
  const renderBody = () => {
    return tBody.map((_data, _index) => {
      return (
        <tr key={_index}>
          {tableHeaders.map((_item, index) => {
            _item = _item.toLowerCase().replace(" ", "_");
            const _modifiedItem = _data[_item];
            if (_item === "name")
              return (
                <td key={index} className="table__tr__th__td">
                  <Link to={`${match.url}/${_data.code}`}>{_modifiedItem}</Link>
                </td>
              );
            if (typeof _modifiedItem === "object")
              return (
                <td key={index} className="flex table__tr__th__td">
                  <div>
                    Year-01 :- {Number(_modifiedItem.year_1).toFixed(2)}
                  </div>
                  <div className="bold">
                    Year-03 :- {Number(_modifiedItem.year_3).toFixed(2)}
                  </div>
                </td>
              );
            return (
              <td key={index} className="table__tr__th__td">
                {_modifiedItem}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <p>
            <strong>
              <u>Note</u> :-
            </strong>{" "}
            You can search based on name/category/fund_type/plan.{" "}
            <u> Click on columns to sort</u>
          </p>
          <table
            summary="This table shows how to create responsive tables using Datatables' extended functionality"
            className="table table-bordered table-hover dt-responsive"
            id="table"
          >
            <thead>
              <tr>
                {tableHeaders.map((_header, index) => (
                  <th
                    key={index}
                    onClick={() => handleSort?.(_header)}
                    className="pointer text-center"
                  >
                    {_header}{" "}
                    <img
                      src={
                        order === "desc"
                          ? "https://cdn4.iconfinder.com/data/icons/thin-gui-elements-2/24/thin-1561_sort_descending_order-512.png"
                          : "https://cdn1.iconfinder.com/data/icons/user-ui-vol-3/16/list_view_option_ascending_descending_order_choices-512.png"
                      }
                      alt="sort"
                      width="20"
                      height="20"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{renderBody()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
