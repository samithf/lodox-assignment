import { useEffect, useState } from "react";

export const useKeyPress: (
  targetKey: "ArrowUp" | "ArrowDown" | "Enter", ref: any
) => boolean = (targetKey, ref) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    ref.current.addEventListener("keydown", downHandler);
    ref.current.addEventListener("keyup", upHandler);

    return () => {
      if(ref.current) {
         ref.current.removeEventListener("keydown", downHandler);
          ref.current.removeEventListener("keyup", upHandler);
      }
    };
  }, []);

  return keyPressed;
};
