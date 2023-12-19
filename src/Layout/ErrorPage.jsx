import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <p>허억 여기 들어오시면 안되세요!</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
