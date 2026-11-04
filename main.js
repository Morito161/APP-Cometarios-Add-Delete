const btnEnviar = document.getElementById("btn_enviar");
const commentInput = document.getElementById("user_comment");
const commentBox = document.getElementById("comment_box");
const notifySucces = document.getElementById("notify-succes");

// Función para obtener fecha y hora actual
function obtenerFechaHora() {
    const fecha = new Date();

    const datos = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    return fecha.toLocaleString("es-MX", datos);
}

// Evento para publicar comentario
btnEnviar.addEventListener("click", () => {
    const comentario = commentInput.value.trim();

    if (comentario === "") {
        alert("Escribe un comentario antes de enviar.");
        return;
    }

    if (comentario.length > 1000) {
        alert("El comentario no puede superar los 1000 caracteres.");
        return;
    }

    const fechaHora = obtenerFechaHora();

    // Crear li
    // Crear NODO li
    const li = document.createElement("li");

    const card = document.createElement("div");
    card.className = "comment_user border rounded-sm p-3 m-4";
    const heading = document.createElement("div");
    heading.className = "flex items-center gap-2 flex-wrap";
    const avatar = document.createElement("img");
    avatar.className = "w-[40px] bg-blue-700 hover:bg-blue-300 hover:cursor-pointer rounded-full shadow-cyan-500/50";
    avatar.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
    avatar.alt = "imagenDeUsuario";
    const author = document.createElement("span");
    author.className = "text-lg font-semibold";
    author.textContent = "@luisRamblez";
    const timestamp = document.createElement("span");
    timestamp.className = "text-sm text-slate-500";
    timestamp.textContent = fechaHora;
    heading.append(avatar, author, timestamp);
    const message = document.createElement("p");
    message.className = "mt-2";
    message.textContent = comentario;
    const actions = document.createElement("div");
    actions.className = "mt-3 flex gap-2";
    for (const label of ["👍", "👎"]) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "px-2 py-1 rounded-xl bg-gray-200 hover:bg-gray-300";
        button.textContent = label;
        actions.appendChild(button);
    }
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "btn_eliminar px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700";
    remove.textContent = "Delete";
    actions.appendChild(remove);
    card.append(heading, message, actions);
    li.appendChild(card);

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