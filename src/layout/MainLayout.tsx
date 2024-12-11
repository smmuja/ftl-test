import { HTMLAttributes, PropsWithChildren } from "react";
import { Navbar } from "./components/Navbar";
import { LeftSideBar } from "./components/LeftSideBar";

type MainLayoutProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <LeftSideBar />
        {children}
      </div>
    </>
  );
}
