import { Navbar, Home, SocialMedia, Contact, Faq, About, Footer } from './components/index'
import "./App.css";

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Home/>
      </header>
        <About/>
        <SocialMedia/>
        <Faq/>
        <Contact/>
        <Footer/>
    </main>
  );
}

export default App;
