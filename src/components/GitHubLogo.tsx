/// <reference path="../styled.d.ts" />
import * as React from "react";
import { withTheme, DefaultTheme } from "styled-components"

export const GitHubLogo: React.FC<{}> = withTheme(function(props: { theme: DefaultTheme }) {
  return (
    <svg viewBox="0 0 22.58 22.03" width="25px" height="25px">
      <path 
        fill={props.theme.palette.highlightColor} 
        d="M11.29,0A11.29,11.29,0,0,0,7.72,22c.56.1.77-.25.77-.54s0-1,0-1.92C5.34,20.22,4.67,18,4.67,18a3,3,0,0,0-1.25-1.65c-1-.7.08-.69.08-.69a2.37,2.37,0,0,1,1.73,1.16,2.4,2.4,0,0,0,3.29.94,2.41,2.41,0,0,1,.72-1.51C6.72,16,4.09,15,4.09,10.7a4.36,4.36,0,0,1,1.16-3,4.06,4.06,0,0,1,.11-3s.95-.3,3.11,1.16a10.7,10.7,0,0,1,5.65,0c2.16-1.46,3.1-1.16,3.1-1.16a4.06,4.06,0,0,1,.11,3,4.36,4.36,0,0,1,1.16,3c0,4.34-2.64,5.29-5.16,5.57a2.7,2.7,0,0,1,.77,2.09c0,1.51,0,2.73,0,3.1s.2.65.78.54A11.29,11.29,0,0,0,11.29,0Z"
      />
    </svg>
  )
});
