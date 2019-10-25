import * as React from "react";
import { Markdown } from "./Markdown";
import { Highlights } from "./Highlights";
import { Link } from "./Link";

export interface SectionProps {
  summary?: string;
  highlights?: string[];
  website?: string;
}

export const Section: React.FC<SectionProps> = function(props) {
  return (
    <section>
      {props.summary && <Markdown source={props.summary}/>}
      {props.highlights && <Highlights highlights={props.highlights} />}
      {props.website && <Link href={props.website}>{props.website}</Link>}
    </section>
  )
}
