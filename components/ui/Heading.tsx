import React from "react";

type Props = {
  title: string
}
export function Heading({ title } : Props) {
  return <h1 className="text-center text-3xl p-8">
        {title}
      </h1>;
}
  