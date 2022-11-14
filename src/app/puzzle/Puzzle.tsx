import "./Puzzle.css";

import classNames from "classnames";
import { FC, useState } from "react";

import { loadPuzzleData } from "../../models";
import puzzleImg from "../../resources/puzzle.jpg";
import reveleadImg from "../../resources/revealed.jpg";
import PuzzleCard from "../puzzleCard";
import puzzleLiterals from "./PuzzleLiterals";

const COMPONENT_ID = "puzzle";

const Puzzle: FC = () => {
  const initialState = loadPuzzleData(true);
  const [image, setImage] = useState(puzzleImg);
  const [isAllRevealed, setIsAllRevealed] = useState(false);
  const [puzzleData, setPuzzleData] = useState(initialState);

  const onRevealed = (index: number) => {
    puzzleData[index - 1].revealed = true;
    setPuzzleData(puzzleData);
    setIsAllRevealed(puzzleData.every(({ revealed }) => revealed));
  };

  const reveal = () => isAllRevealed && setImage(reveleadImg);

  return (
    <section id={COMPONENT_ID} className={`${COMPONENT_ID} slide`}>
      <div className="slide__content">
        <div className={`${COMPONENT_ID}__container`}>
          <div className={classNames(`${COMPONENT_ID}__data`, { isAllRevealed })}>
            {puzzleData.map((data, index) => (
              <PuzzleCard key={`card__${index}`} question={data.question} index={index + 1} onRevealed={onRevealed} />
            ))}
          </div>
          <img
            className={`${COMPONENT_ID}__image`}
            src={image}
            alt={puzzleLiterals.PUZZLE_TITLE}
            title={puzzleLiterals.PUZZLE_TITLE}
            onClick={reveal}
          />
        </div>
      </div>
    </section>
  );
};

export default Puzzle;
