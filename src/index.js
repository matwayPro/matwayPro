import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./example";
import ColorModeSwitch from "./components/color-mode-switch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <App />
      <ColorModeSwitch />
    </ChakraProvider>
  </StrictMode>
);
