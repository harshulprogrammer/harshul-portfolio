import { Menubar } from "./components/Menubar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <>
      <Menubar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
