import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Home, Services, AboutUs, HowItWorks } from "./sections";
function App() {
  return (
    <div className="container mx-auto h-full w-full space-y-6">
      <Navbar />
      <Home />
      <Services />
      <HowItWorks />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
