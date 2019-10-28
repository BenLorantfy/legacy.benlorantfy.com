/// <reference path="../styled.d.ts" />
import * as React from "react";
import { withTheme, DefaultTheme } from "styled-components"

export const EmailIcon: React.FC<{}> = withTheme(function(props: { theme: DefaultTheme }) {
  return (
    <svg viewBox="0 0 485.411 485.411" width="30px" height="30px">
        <path
          fill={props.theme.palette.highlightColor}
          d="M0,81.824v321.763h485.411V81.824H0z M242.708,280.526L43.612,105.691h398.187L242.708,280.526z M163.397,242.649L23.867,365.178V120.119L163.397,242.649z M181.482,258.533l61.22,53.762l61.22-53.762L441.924,379.72H43.487 L181.482,258.533z M322.008,242.655l139.535-122.536v245.059L322.008,242.655z"
        />
    </svg>
  )
});
