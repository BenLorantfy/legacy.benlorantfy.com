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
  return (
    <section>
      {props.summary && <Markdown source={props.summary}/>}
      {props.highlights && <Header4 margin={{ top: "sm", bottom: "sm", left: "xxs" }}>Key Achievements</Header4>}
      {props.highlights && <Highlights highlights={props.highlights} />}
      {props.website && <Link href={props.website}>{props.website}</Link>}
    </section>
  )
}
