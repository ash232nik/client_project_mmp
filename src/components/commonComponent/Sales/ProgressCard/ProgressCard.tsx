import React from "react";
import "../SalesDashbaordCard/card.css";
import ApprovalRate from "../../../../assets/icons/approval_rate_icon.svg";

function ProgressCard(props: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  value:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  lastPeriodValue:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  lastYearValue:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="value-cards">
      <div className="inner-div">
        <div className="progress-icon-box">
          <img src={ApprovalRate} />
        </div>
        <div className="card-text-area">
          <text className="card-text-heading">{props.title}</text>
          <text className="card-text-value">{props.value}</text>
        </div>
      </div>
      <div className="left-more-div">
        <div className="card-text-area">
          {props.lastPeriodValue != 0 && (
            <text className="card-text-heading">Last Period</text>
          )}
          {props.lastPeriodValue != 0 && (
            <text className="card-text-value">{props.lastPeriodValue}</text>
          )}
        </div>
        <div className="card-text-area">
          {props.lastYearValue != 0 && (
            <text className="card-text-heading">Last Year</text>
          )}
          {props.lastYearValue != 0 && (
            <text className="card-text-value">{props.lastYearValue}</text>
          )}
        </div>
        <li onClick={() => console.log("more clicked")} className="more-text">
          More{" >"}
        </li>
      </div>
    </div>
  );
}

export default ProgressCard;
