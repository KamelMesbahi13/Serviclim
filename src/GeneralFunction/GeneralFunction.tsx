import React from "react";

const Title: React.FC<string> = (newTitle) => {
  document.title = newTitle;

  return null;
};

export default Title;
