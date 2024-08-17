import { useState, useEffect } from "react";
import { buildBoard, nextBoard } from "../business/Board";
export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((perviousBoard) =>
      nextBoard({
        board: perviousBoard,
        player,
        resetPlayer,
        addLinesCleared,
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
