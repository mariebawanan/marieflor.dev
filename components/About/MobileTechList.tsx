import { tech } from "./config";

export default function MobileTechList() {
  return (
    <div className="contents md:hidden">
      {tech.map((t, i) => (
        <span key={`${t.name}-${i}`}>{`${t.name}${
          i === tech.length - 2 ? " and " : ", "
        }`}</span>
      ))}
    </div>
  );
}
