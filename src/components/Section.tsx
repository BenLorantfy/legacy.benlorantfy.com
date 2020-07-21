import * as React from "react";
import { Markdown } from "./Markdown";
import { Highlights } from "./Highlights";
import { Header4 } from "./Header4";
import { Link } from "./Link";

export interface SectionProps {
  summary?: string;
  highlights?: string[];
  website?: string;
}

export const Section: React.FC<SectionProps> = function(props) {
  const highlights = props.highlights || [];
  const hasProjects = (typeof highlights !== "undefined" && highlights.length) > 0 ? (highlights[0].indexOf("//") > -1) : false;
  return (
    <section>
      {props.summary && <Markdown source={props.summary}/>}
      {props.highlights && <Header4 margin={{ top: "sm", bottom: "sm", left: "xxs" }}>{hasProjects ? "Projects" : "Key Achievements"}</Header4>}
      {highlights.length > 0 && <Highlights highlightsType={hasProjects ? "projects" : "achievements"} highlights={highlights} />}
      {props.website && <Link href={props.website}>{props.website}</Link>}
    </section>
  )
}
