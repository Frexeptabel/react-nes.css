import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Container = ({ dark, title, rounded, ...props }) => {
  const className = classNames("nes-container", {
    "is-dark": dark,
    "with-title": !!title,
    "is-rounded": rounded
  });
  return (
    <div className={className} {...props}>
      {title && <p className="title">{title}</p>}
      {props.children}
    </div>
  );
};

Container.propTypes = {
  dark: PropTypes.bool,
  title: PropTypes.string,
  rounded: PropTypes.bool
};

export default Container;
