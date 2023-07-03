import Header from "./components/Header";
import Landing from "./components/landing";
import Footer from "./pages/footer";

function App() {
  return (
    <div>
      <Header />
      <main className="mt-2">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
