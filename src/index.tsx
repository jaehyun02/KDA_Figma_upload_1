import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainInter } from "./screens/MainInter";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainInter />
  </StrictMode>,
);
