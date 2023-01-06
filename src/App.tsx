import {Route, Routes} from "react-router-dom";
import "./App.scss";

import Login from "./pages/auth/Login";


import Dashboard from "./pages/dashboard/Home/index";

import Projects from "./pages/dashboard/Projects";
import EachProject from "./pages/dashboard/Projects/EachProject";

import TimeLogger from "./pages/dashboard/TimeLogger";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Colors from "./pages/dashboard/ColorSwatch";
import DyeingTechnique from "./pages/dashboard/DyeingTechnique";
import Plant from "./pages/dashboard/Plant";
import Fruit from "./pages/dashboard/Fruit";
import Vegetable from "./pages/dashboard/Vegetable";
import TechDetails from "./pages/dashboard/DyeingTechnique/TechDetails";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0D9E63",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/source" element={<TimeLogger />} />
        <Route path="/profile" element={<Projects />} />
        <Route path="/color" element={<Colors />} />
        <Route path="/techniques" element={<DyeingTechnique />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/vegetable" element={<Vegetable />} />
        <Route path="/dye" element={<TechDetails />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
