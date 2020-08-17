import React, { Fragment} from "react";

function ValueWithLabel({val, onChange, label, colorClassName}) {
   return (
      <Fragment>
        <label className={"btn-label " + colorClassName}>{label}</label>
        <input value={val} onChange={onChange} />
      </Fragment>
    );
}

export default ValueWithLabel;