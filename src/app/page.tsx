"use client";
import { ConfiguredDndProvider } from "configured-dnd-context";
import Dnd1 from "./components/dnd1";

export default function Home() {
  return (
    <ConfiguredDndProvider>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Dnd1 />
      </div>
    </ConfiguredDndProvider>
  );
}
