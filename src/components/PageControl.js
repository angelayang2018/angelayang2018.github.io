import React from "react";
import { Link } from "react-router-dom";

export default function PageControl({from, to}) {
  return (
    <div className="pageControl">
      <Link className="buttonS" to={"/project/" + from}>
        PREV
      </Link>{" "}
      <Link className="buttonS" to={"/project/" + to}>
        NEXT
      </Link>
    </div>
  );
}
