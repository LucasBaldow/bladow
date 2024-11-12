import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ECGLifeLanding from "./pages/ecglanding";
import ECGLifeLanding2 from "./pages/ecglanding2";
import SolutionsPage from "./pages/solucoes1";
import SolutionsPage2 from "./pages/solucoes2";
import ExecutiveTeam from "./pages/team";
import AwardsPage from "./pages/awards";
import ContactPage from "./pages/contact";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ECGLifeLanding />} />
          <Route path="/ecglanding2" element={<ECGLifeLanding2 />} />
          <Route path="/solucoes1" element={<SolutionsPage />} />
          <Route path="/solucoes2" element={<SolutionsPage2 />} />
          <Route path="/team" element={<ExecutiveTeam />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
