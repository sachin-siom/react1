import React, { useEffect, useState } from "react";
import AuthenticationService from "./AuthenticationService";
import { openController } from "./Constant";
import LoginComponent from "./LoginComponent.jsx";
import withNavigation from './WithNavigation.jsx';


const Results = () => {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    AuthenticationService.executeopenController(`${openController}`)
      .then((response) => { formatData(response) })
      .catch((error) => { console.log('problem in retiving winners list'); });
  }


  const formatData = (response) => {
    fetchUsers(response.data);
  }

  function toMatrix(arr, width) {
    return arr.reduce(function (rows, key, index) {
      return (index % width == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows;
    }, []);
  }

  function splitArray(array, part) {
    var tmp = [];
    for (var i = 0; i < array.length; i += part) {
      tmp.push(array.slice(i, i + part));
    }
    return tmp;
  }

  useEffect(() => {
    getData()
  }, [])

  const LoginComponentWithNavigation = withNavigation(LoginComponent);

  function rainbow(numOfSteps, step) {
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}

function pad(n) {
  var s = "000" + n;
  return s.substr(s.length-4);
}

  return (
    <>
    <center>                 
      {Users.map((item) => (
        <div>
          <h2>{item.drawTime}</h2>
          <table style={{width: "90%", height:"70px",border:"30px", textAlign:"center", backgroundColor: rainbow(Math.random() * 4 ,Math.random() * 5),}}>
            {splitArray(Object.values(item.winnerNumber), 10).map((val) => (
              <tr>
                {Object.values(val).map((val) => <td style={{
                width: "10%",                
                border: "2px solid black", textAlign:"center"}}>{pad(val)}</td>)
                }</tr>)
            )}
          </table>&nbsp;
        </div>
      ))}
      </center>
    </>
  );
};

export default Results;
