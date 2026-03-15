import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import data from './data.jsx';
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
              <Link
              to="/company/manpower"
              class="nav-link active"
              aria-current="page"
              >
                Manpower
              </Link>
              <Link
              to="/company/map"
              class="nav-link active"
              aria-current="page">
                Map
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
          <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>
          <Route path="/company" element={<Company />}>
            <Route path="manpower" element={<Manpower />}/>
            <Route path="map"  element={<Map />}/>
          </Route> 
          <Route path="*" element={<Nopage />}
        />
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

function Company() {
  return (
    <div>
      <h4>company</h4>
      <p>It's a company</p>
      <Outlet></Outlet>
    </div>
  );
}

function Manpower() {
  return (
    <div>
    {' '}    
    <img
     src="https://plus.unsplash.com/premium_photo-1688821131205-52f5c633ce69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     width="80%"
   />
   </div>    
  );
}

function Map() {
  return (
    <div>
    <img
      src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      width="80%"
    />
  </div>
  );
}

function Nopage() {
  return (
    <div>
    <h4>No page</h4>
    <p>hmmm....</p>
    <img
      src="https://cdn.maily.so/ixmvzk5qh83mee5kcjw8pp55fihe"
      width="80%"
    />
  </div>
  );
}