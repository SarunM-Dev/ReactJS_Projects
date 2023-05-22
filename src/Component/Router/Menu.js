import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <strong>  <Link to="/task1" className="nav-link">Print Hello World..</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task2" className="nav-link">CongratsCard</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task3" className="nav-link">SuperLeague</Link></strong>
              </li>
              <li className="nav-item">
                <strong>   <Link to="/task4" className="nav-link">SocialMedia</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task5" className="nav-link">Notifications</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task6" className="nav-link">LoginPage</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task7" className="nav-link">Tech Card</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task8" className="nav-link">UseState</Link></strong>
              </li>
              <li className="nav-item">
                <strong>  <Link to="/task9" className="nav-link">FruitCounter</Link></strong>
              </li>
             
              <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                 More
                </button>
                <div class="dropdown-menu">
                <li className="nav-item">
                <strong>  <Link to="/task10" className="nav-link">FeedBack</Link></strong>
              </li>
              <li className="nav-item">
              <strong > <Link to="/api" className="nav-link">Fetch Json.file</Link></strong>
              </li>
              <li className="nav-item">
              <strong > <Link to="/fakeapi" className="nav-link">Fetch Fake.Json</Link></strong>
              </li>
              <li className="nav-item">
              <strong ><Link to="/databaseapi" className="nav-link">Fetch Database.Json</Link></strong>
              </li>
              <li className="nav-item">
              <strong ><Link to="/springboot" className="nav-link">Spring Boot Api Calling</Link></strong>
              </li>
              <li className="nav-item">
              <strong ><Link to="/springbootinsert" className="nav-link">Spring Boot Table Insert</Link></strong>
              </li>
               <br/>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu;

