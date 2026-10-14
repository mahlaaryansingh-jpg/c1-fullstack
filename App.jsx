
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Subscribe from "./components/Subscribe";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";

import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
