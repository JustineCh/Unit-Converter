import React, { Fragment} from "react";

function ValueWithLabel({val, onChange, label}) {
   return (
      <Fragment>
        <label className="btn-unit btn-primary-color">{label}</label>
        <input value={val} onChange={onChange} />
      </Fragment>
    );
}

export default ValueWithLabel;