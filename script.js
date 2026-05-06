body {
  margin: 0;
  font-family: serif;
  background: #000;
  color: white;
  overflow: hidden;
}

/* Lights */
.lights {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.lights span {
  width: 10px;
  height: 20px;
  background: #333;
  border-radius: 50%;
}

.lights span.on {
  background: #ffd966;
  box-shadow: 0 0 10px #ffd966, 0 0 20px #ffae00;
}

/* Screens */
.screen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}

.hidden {
  display: none;
}

/* Title */
.title {
  font-size: 3rem;
  color: #ff4da6;
}

/* Buttons */
.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: #ff4da6;
  border: none;
  border-radius: 20px;
  color: white;
}

/* Balloons */
.balloon {
  position: absolute;
  bottom: -100px;
  width: 40px;
  height: 60px;
  border-radius: 50%;
  animation: rise 6s linear forwards;
}

@keyframes rise {
  to { transform: translateY(-120vh); }
}

/* Hearts */
.heart {
  position: absolute;
  bottom: 0;
  animation: float 5s linear forwards;
}

@keyframes float {
  to { transform: translateY(-100vh); }
}

/* Cake */
.cake {
  font-size: 80px;
}

.flame {
  width: 10px;
  height: 20px;
  background: orange;
  margin: auto;
  border-radius: 50%;
}

.smoke {
  width: 10px;
  height: 10px;
  background: gray;
  opacity: 0;
  margin: auto;
}

.smoke.show {
  opacity: 1;
  animation: smoke 2s forwards;
}

@keyframes smoke {
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}

/* Final black */
#blackScreen {
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}