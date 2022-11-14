import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryCloth } from "../redux/actions/DressingRoomAction";

export default function ItemCloth(props) {
  const navPills = useSelector((state) => state.DressingRoomReducer.navPills);
  const tabPanes = useSelector((state) => state.DressingRoomReducer.tabPanes);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="well">
        <div className="tab-content">
          {navPills.map((navPillsItem, index) => {
            return (
              <div
                key={index}
                className="tab-pane container fade"
                id={navPillsItem.tabName}
              >
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter(
                        (tabPanesItem) =>
                          tabPanesItem.type === navPillsItem.type
                      )
                      .map((tabPanesItem, index) => {
                        return (
                          <div key={index} className="col-md-3">
                            <div className="card text-center">
                              <img src={tabPanesItem.imgSrc_jpg} />
                              <h4>
                                <b>{tabPanesItem.name}</b>
                              </h4>
                              <button
                                onClick={() => {
                                  dispatch(tryCloth(tabPanesItem));
                                }}
                              >
                                Thử đồ
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
