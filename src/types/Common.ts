import React, { ReactChild, ReactChildren, } from "react";

export interface ChildProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}
