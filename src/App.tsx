import { BrowserRouter as Router } from "react-router-dom";
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
        <section id="home" className="h-screen">
          <ECGLifeLanding />
        </section>
        <section id="ecglanding2" className="h-screen">
          <ECGLifeLanding2 />
        </section>
        <section id="solucoes1" className="h-screen">
          <SolutionsPage />
        </section>
        <section id="solucoes2" className="h-screen">
          <SolutionsPage2 />
        </section>
        <section id="team" className="h-screen">
          <ExecutiveTeam />
        </section>
        <section id="awards" className="h-screen">
          <AwardsPage />
        </section>
        <section id="contact" className="h-screen">
          <ContactPage />
        </section>
      </main>
    </Router>
  );
}

export default App;
