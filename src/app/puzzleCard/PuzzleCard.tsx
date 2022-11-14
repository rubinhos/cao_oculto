import "./PuzzleCard.css";

import classNames from "classnames";
import { FC, useState } from "react";

export type PuzzleCardProps = {
  question: string;
  index: number;
  onRevealed: (index: number) => void;
};

export const COMPONENT_ID = "puzzle-card";

const PuzzleCard: FC<PuzzleCardProps> = ({ question, index, onRevealed }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const revealOrOpenCard = () => {
    let opened = isOpened;
    let revealed = isRevealed;

    if (isOpened) {
      revealed = true;
    } else {
      opened = true;
    }

    setIsOpened(opened);
    setIsRevealed(revealed);

    revealed && onRevealed(index);
  };

  return (
    <div className={classNames(COMPONENT_ID, { isOpened, isRevealed })} onClick={revealOrOpenCard}>
      {isOpened ? question : index}
    </div>
  );
};

export default PuzzleCard;
