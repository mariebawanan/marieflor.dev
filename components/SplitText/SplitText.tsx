interface Props {
  text: string;
}

export default function SplitText({ text }: Props) {
  return (
    <div>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}}`}
          className="hover:-rotate-3 hover:scale-110 inline-block duration-200 transition-all ease-in-out hover:origin-[50%_100%] translate-x-0 translate-y-0 dark:text-blue"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
