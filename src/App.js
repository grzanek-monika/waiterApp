import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import Header from "./components/views/Header/Header";
import Home from "./components/pages/Home";
import Table from "./components/pages/Table";
import NotFound from "./components/views/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<Table />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
