import React from "react";

type Props = {
  index: number;
  character: string[] | undefined;
  containerClass?: string | undefined;
  linkContainers: HTMLSpanElement[][];
  subContainerClass?: string | undefined;
};

const NavigationCharacter = ({
  character,
  index,
  linkContainers,
  containerClass,
  subContainerClass,
}: Props) => {
  return (
    <div>
      {character?.map((text) => (
        <span
          className={`${containerClass}`}
          ref={(element) => {
            if (!linkContainers[index]) {
              linkContainers[index] = [];
            }
            linkContainers[index].push(element!);
          }}
        >
          {text === " " || text === "-" || text === "" ? (
            <span className={`${subContainerClass} mx-1`}></span>
          ) : (
            text
          )}
        </span>
      ))}
    </div>
  );
};

export default NavigationCharacter;
