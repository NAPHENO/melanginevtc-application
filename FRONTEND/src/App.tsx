import {Home} from "./pages/Home"
import {Navbar} from "@/components/common/Navbar.tsx";
import {TopBar} from "@/components/common/Topbar.tsx";
import {Footer} from "@/components/common/Footer.tsx";

const App= () =>{
  return (
      <div className="min-h-screen">
          <TopBar />
          <Navbar />
          <main>
              <Home />

          </main>

          <Footer />
      </div>
  );
}
export default App
