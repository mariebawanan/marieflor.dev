import classNames from "classnames";
import { useState } from "react";

interface Props {
  text: string;
  children?: React.ReactNode;
}

export default function Clipboard({ text, children }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="md:hover:cursor-pointer group flex flex-col space-y-4 items-center"
      onClick={handleCopy}
    >
      {children}
      {!copied && (
        <span className="opacity-0 group-hover:opacity-100 transition text-xs">
          click to copy!
        </span>
      )}
      <span
        className={classNames("transition-all text-xs", {
          block: copied,
          hidden: !copied,
        })}
      >
        copied!
      </span>
    </div>
  );
}
