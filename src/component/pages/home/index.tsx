import { type ReactElement } from "react";
import { Auth } from "@/component/auth";
import { Counter } from "@/component/counter";

export const Home = (): ReactElement => {
  

  return (
    <>
        <Auth />
        <Counter />
    </>
  );
};
