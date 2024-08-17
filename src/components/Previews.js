import React from "react";

import Preview from "/src/components/Preview";

const Previews = ({ tetrominoes }) => {
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  return (
    <>
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </>
  );
};

export default React.memo(Previews);
