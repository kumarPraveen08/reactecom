import "./list.scss";
import Card from "components/card/Card";
import { Products } from "_data";

import React from "react";

export default function List() {
  return (
    <div className="list">
      {Products?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
