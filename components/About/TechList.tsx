import { Fragment } from "react";
import { Badge } from "../Badge";
import { tech } from "./config";

export default function TechList() {
  return (
    <div className="hidden md:contents">
      {tech.map((t, i) => (
        <Fragment key={t.name}>
          <Badge icon={t.icon}>{t.name}</Badge>
          {i === tech.length - 2 ? " and " : ", "}
        </Fragment>
      ))}
    </div>
  );
}
