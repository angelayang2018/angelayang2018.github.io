import React from "react";
import { Link } from "react-router-dom";

export default function PageControl() {
  return (
    <div className="pageControl">
      <Link className="buttonS" to="">
        PREV
      </Link>{" "}
      <Link className="buttonS" to="">
        NEXT
      </Link>
    </div>
  );
}
