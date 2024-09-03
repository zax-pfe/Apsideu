import "../../styles/works/verticaltext.css";

interface VerticalTextProps {
  children: React.ReactNode;
}

export default function VerticalText(props: VerticalTextProps) {
  const words =
    typeof props.children === "string" ? props.children.split(" ") : [""];

  return (
    <p className="word-container">
      {words.map((word, i) => {
        const characters = word.split("");
        return (
          <span key={i}>
            {characters.map((char, j) => (
              <span key={j} className="char-container">
                {char}
              </span>
            ))}
          </span>
        );
      })}
    </p>
  );
}
