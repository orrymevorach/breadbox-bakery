import React, { Component } from 'react'

class ComingSoon extends Component {
  render() {
    
    // Set the date we're counting down to
    var countDownDate = new Date("Mar 8, 2019 20:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    return (
      <section className="coming-soon">
        <h1>Breadbox Bakery Website Launch In:</h1>
        <h2 id="demo"></h2>
        <img src="../img/logo.png" alt="Logo"/>
        <div className="pink-box top"></div>
        <div className="pink-box left"></div>
        <div className="pink-box right"></div>
        <div className="pink-box bottom"></div>
      </section>
    )
  }
}

export default ComingSoon ;
