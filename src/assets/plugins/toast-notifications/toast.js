const contenedorToast = document.getElementById("toast-container");


const closeToast = (id) => {
	document.getElementById(id)?.classList.add("closing");
};

const addToast = ({ type, title, description }) => {

const newToast = document.createElement("div");

newToast.classList.add("show");
if(type === "alert-success") newToast.classList.add("alert-success");
if(type === "alert-danger") newToast.classList.add("alert-danger");
if(type === "alert-warning") newToast.classList.add("alert-warning");
if(type === "alert-info") newToast.classList.add("alert-info");

  // Agregar id del toast
const randomNumber = Math.floor(Math.random() * 100);
const fecha = Date.now();
const toastId = fecha + randomNumber;
newToast.id = toastId;

const day = new Date()

// Plantilla del toast
const toast = `
        <div class="toast-header ${type} light-alert" role="alert">
            <strong class="me-auto">${title}</strong>
            <small class="text-muted">${day.getHours()}:${day.getMinutes()}</small>
        </div>
    	<div class="toast-body text-white">
        	<strong>${description}</strong>
    	</div>
	`;

  // Agregar la plantilla al nuevo toast
  newToast.innerHTML = toast;

  // Agregamos el nuevo toast al contenedor
  contenedorToast.appendChild(newToast);

  // Función para menajera el cierre del toast
  const handleAnimacionCierre = (e) => {
    if (e.animationName === "close") {
      newToast.removeEventListener("animationend", handleAnimacionCierre);
	console.log("cerrando")
	  newToast.remove();
    }
  };


	setTimeout(() => {
		closeToast(toastId)
	 }, 650);

  // Agregamos event listener para detectar cuando termine la animación
  newToast.addEventListener("animationend", handleAnimacionCierre);
};
