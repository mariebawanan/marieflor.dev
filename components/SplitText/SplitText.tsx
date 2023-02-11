interface Props {
  text: string;
}

export default function SplitText({ text }: Props) {
  return (
    <div>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}}`}
          className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
