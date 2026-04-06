const btnEnviar = document.getElementById("btn_enviar");
const commentInput = document.getElementById("user_comment");
const commentBox = document.getElementById("comment_box");
const notifySucces = document.getElementById("notify-succes");

// Función para obtener fecha y hora actual
function obtenerFechaHora() {
    const fecha = new Date();

    const opciones = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    return fecha.toLocaleString("es-MX", opciones);
}

// Evento para publicar comentario
btnEnviar.addEventListener("click", () => {
    const comentario = commentInput.value.trim();

    if (comentario === "") {
        alert("Escribe un comentario antes de enviar.");
        return;
    }

    const fechaHora = obtenerFechaHora();

    // Crear li
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="comment_user border rounded-sm p-3 m-4">
            <div class="flex items-center gap-2 flex-wrap">
                <img 
                    class="w-[40px] bg-blue-700 hover:bg-blue-300 hover:cursor-pointer rounded-full shadow-cyan-500/50"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" 
                    alt="imagenDeUsuario"
                >
                <span class="text-lg font-semibold">@luisRamblez</span>
                <span class="text-sm text-slate-500">${fechaHora}</span>
            </div>

            <p class="mt-2">${comentario}</p>

            <div class="mt-3 flex gap-2">
                <button class="px-2 py-1 rounded-xl bg-gray-200 hover:bg-gray-300">👍</button>
                <button class="px-2 py-1 rounded-xl bg-gray-200 hover:bg-gray-300">👎</button>
                <button class="btn_eliminar px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700">
                    Eliminar
                </button>
            </div>
        </div>
    `;

    commentBox.appendChild(li);

    // Limpiar input
    commentInput.value = "";

    // Mostrar notificación
    notifySucces.style.visibility = "visible";

    setTimeout(() => {
        notifySucces.style.visibility = "hidden";
    }, 2000);
});

// Evento para eliminar comentario
commentBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_eliminar")) {
        const comentarioAEliminar = e.target.closest("li");
        comentarioAEliminar.remove();
    }
});