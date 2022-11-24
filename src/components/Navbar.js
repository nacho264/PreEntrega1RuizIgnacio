import './Navbar.css';
export default function Navbar() {
  
  return (
    <div>
        <div class="topnav" id="myTopnav">

            <a href="#home" class="active">Inicio</a>
            <a href="#carrito">Carrito</a>

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            <div id="container">
                <div id="element">
                    <div class="sample_container badge-list">

                        <div id="lists"></div>
                        <p class="crossline"></p>
                        <span class="incr_button">
                            <button class="e-btn e-primary" id="button">Cantidad de carrito</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
  );
}