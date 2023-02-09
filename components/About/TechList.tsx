import { Fragment } from "react";
import { Badge } from "../Badge";
import { tech } from "./config";

export default function TechList() {
  return (
    <>
      {tech.map((t, i) => (
        <Fragment key={t.name}>
          <Badge key={t.name} icon={t.icon}>
            {t.name}
          </Badge>
          {i === tech.length - 2 ? "and " : ", "}
        </Fragment>
      ))}
    </>
  );
}
