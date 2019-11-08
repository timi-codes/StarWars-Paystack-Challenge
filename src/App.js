import React from 'react';
import logo from './assets/starwars-logo.png';
import sticker from './assets/sticker.png';
import './App.css';

import MovieDropDown from './components/MovieDropDown'

function App() {
  return (
    
    <div className="wrapper">
      <div className="main">
        <img src={sticker} alt="Star WArs logo" />
        <MovieDropDown placeholder="Select a Movie"/>
        <MovieDropDown placeholder="Filter Gender"/>
        <table>
          <thead>
            <tr>
              <th><div>Name</div></th>
              <th><div>Gender</div></th>
              <th><div>Height(cm)</div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timi Tejumola</td>
              <td>Male</td>
              <td>8.3cm</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
            <tr>
              <td>Beru Whitesun lars</td>
              <td>Female</td>
              <td>8.167</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div>
                  <p>Total Character</p>
                  23
                </div>
              </td>
              <td></td>
              <td>
                <div>
                  <p>Total Height</p>
                  170cm (5ft/6.93in)
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
