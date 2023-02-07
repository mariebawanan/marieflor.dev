interface Props {
  text: string;
}

export default function SplitText({ text }: Props) {
  return (
    <div>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}}`}
          className="hover:-rotate-6 hover:scale-110 inline-block hover:delay-100 duration-200 transition hover:origin-[50%_100%]"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
