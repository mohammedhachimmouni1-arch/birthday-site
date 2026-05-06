body {
  margin: 0;
  font-family: 'Playfair Display', serif;
  background: #000;
  overflow: hidden;
}

h1, p {
  margin: 0;
}

.screen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: opacity 1s;
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

.title {
  font-size: 3rem;
  color: transparent;
  background-image: linear-gradient(45deg, #ff78f7, #ff0077);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background: linear-gradient(45deg, #ff78f7, #ff0077);
  color: white;
  cursor: pointer;
}

#balloons, #hearts {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
}