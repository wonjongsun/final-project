import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link, Outlet } from 'react-router-dom';
import data from "./data.jsx";
import Detail from './routes/Detail';

export default function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" class="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/detail" class="nav-link active" aria-current="page">
                Detail
              </Link>
              <Link to="/" class="nav-link active" aria-current="page">
                about
              </Link>
            </div>
          </div>
        </div>
      </nav>
     
      <Routes>
        <Route
        path = "/"
        element={
          <>
          <div className="main-bg"></div>
          
          <h1 className="my-5">Nike shop</h1>

          <div className="d-flex flex-column mb-3">
            {shoes.map((shoe,i) => {
              return <Goods shoes={shoe} i={i}></Goods>
            })}
          </div>
          </>
          }
          />          
          <Route path="/detail" element={<Detail/>}/>
      </Routes>

      <div class="card m-5">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

    </div>
  );
}

function Goods(props) {
  return (
    <div className="p-2">
      <img
        src={
          'https://raw.githubusercontent.com/wonjongsun/final-project-resource/refs/heads/main/image/s' +
          (props.i + 1) +
          '.PNG'
        }
        width="80%"
      />
      <h4 className="my-3">{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
