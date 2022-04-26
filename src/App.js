import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Characters/Character";
import Episodes from "./pages/Episodes/Episodes";
import Episode from "./pages/Episodes/Episode";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          {/**   <Route path="episodes" element={<Episodes />}>
            <Route path=":episodeId" element={<Episode />} />
          </Route>
*/}

          <Route path="characters" element={<Characters />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <Typography variant="h4">Select a character</Typography>
                </main>
              }
            />
            <Route path=":id" element={<Character />} />
          </Route>
          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
