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
      className="group flex flex-col items-center space-y-4 md:hover:cursor-pointer"
      onClick={handleCopy}
    >
      {children}
      {!copied && (
        <span className="text-xs opacity-0 transition group-hover:opacity-100">
          click to copy!
        </span>
      )}
      <span
        className={classNames("text-xs transition-all", {
          block: copied,
          hidden: !copied,
        })}
      >
        copied!
      </span>
    </div>
  );
}
