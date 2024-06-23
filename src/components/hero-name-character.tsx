interface Props {
  character: string[];
  characterElement: HTMLDivElement[][];
  characterContainerElement: HTMLDivElement[];
  containerClassName?: string;
  subContainerClassName?: string;
  characterContainerClassName?: string;
  characterClassName?: string;
  spanClassName?: string;
}

const HeroNameCharacter = ({
  character,
  characterContainerElement,
  characterElement,
  containerClassName,
  subContainerClassName,
  characterClassName,
  characterContainerClassName,
  spanClassName,
}: Props) => {
  return (
    <div className={`flex flex-row items-center  ${containerClassName}`}>
      {character?.map((text: string, index) => (
        <div
          ref={(element: HTMLDivElement) =>
            characterContainerElement.push(element)
          }
          className={`${subContainerClassName}`}
        >
          <div
            className={`min-h-max min-w-fit flex flex-row leading-tight overflow-hidden ${characterContainerClassName}`}
          >
            {text?.split(" ")?.map((text: string) => (
              <div
                ref={(element: HTMLDivElement) => {
                  if (!characterElement[index]) {
                    characterElement[index] = [];
                  }

                  characterElement[index]?.push(element);
                }}
                className={`${characterClassName}`}
              >
                {text === " " || text === "-" || text === "" ? (
                  <span className={`mx-1 ${spanClassName}`}></span>
                ) : (
                  text
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroNameCharacter;
