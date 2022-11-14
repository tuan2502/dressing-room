import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ItemCloth from "./ItemCloth";

export default function TabListCloths(props) {
  const navPills = useSelector((state) => state.DressingRoomReducer.navPills);

  const renderNavPills = () => {
    return navPills.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <a
            className="nav-link btn-default"
            data-toggle="pill"
            href={`#${item.tabName}`}
          >
            {item.showName}
          </a>
        </li>
      );
    });
  };
  return (
    <Fragment>
      <ul className="nav nav-pills">{renderNavPills()}</ul>
      <ItemCloth />
    </Fragment>
  );
}
