import {
  About,
  Contact,
  Footer,
  Intro,
  Navbar,
  Services,
  Skills,
  Works,
} from "./components";

function App() {
  return (
    <div className="dark:bg-gray-900 bg-slate-100 w-full overflow-hidden">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
