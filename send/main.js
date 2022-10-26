const pag = document.getElementById("objetos");
const objetos = [
  {
    id: 1,
    producto: "Martillo",
    costo: 170,
  },
  {
    id: 2,
    producto: "Carretilla 4.5ft3",
    costo: 2350,
  },
  {
    id: 3,
    producto: 'Rotomartillo 1/2" 650w',
    costo: 755,
  },
  {
    id: 4,
    producto: "Podadora motor gasolina 6PH",
    costo: 9350,
  },
  {
    id: 5,
    producto: "Flexómetro 5m 19mm",
    costo: 50,
  },
  {
    id: 6,
    producto: "Bomba manual 100PSI",
    costo: 175,
  },
  {
    id: 7,
    producto: 'Sierra circular 7-1/4" 1500w',
    costo: 1750,
  },
  {
    id: 8,
    producto: "Pico",
    costo: 325,
  },
  {
    id: 9,
    producto: "Cepillo alambre 64 pinceles",
    costo: 50,
  },
  {
    id: 10,
    producto: "Trapeador",
    costo: 55,
  },
  {
    id: 11,
    producto: "Pala",
    costo: 300,
  },
  {
    id: 12,
    producto: "Rastrillo",
    costo: 165,
  },
  {
    id: 13,
    producto: "Llave de paso",
    costo: 58,
  },
  {
    id: 14,
    producto: "Cerradura",
    costo: 300,
  },
  {
    id: 15,
    producto: "Candado antipalanca",
    costo: 82,
  },
  {
    id: 16,
    producto: "Candado acero máxima seguridad",
    costo: 295,
  },
  {
    id: 17,
    producto: "Candado laton solido",
    costo: 66,
  },
  {
    id: 18,
    producto: "Desarmador de precisión 30 puntas",
    costo: 145,
  },
  {
    id: 19,
    producto: "Juego de llaves Allen",
    costo: 109,
  },
];
const sel_objetos = [];
onload(add());

function add() {
  const contador = pag.children.length;
  objetos.sort((a, b) => a.producto.localeCompare(b.producto));
  sel_objetos.sort((a, b) => a.producto.localeCompare(b.producto));

  if (contador >= objetos.length + sel_objetos.length) {
    return;
  }
  if (contador !== 0) {
    const ultimo = pag.children[contador - 1].children[0];
    const busqueda = objetos.findIndex((objeto) => objeto.id == ultimo.value);
    sel_objetos.push(objetos.splice(busqueda, 1)[0]);
    ultimo.setAttribute("disabled", true);
  }

  let html = `<div id="${contador}" class="disabled:bg-slate-600 disabled:text-white grid grid-cols-4 gap-1 "><select class="col-span-3 bg-white border h-13 px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" id="" required>`;

  objetos.forEach((objeto) => {
    html += `<option value="${objeto.id}">${objeto.producto}</option>`;
  });

  html +=
    '</select> <input type="number" min="1" class="col-span-1 bg-white border h-13 px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required/></div>';

  pag.appendChild(document.createRange().createContextualFragment(html));
}

function rem() {
  const contador = pag.children.length;

  if (contador <= 1) {
    return;
  }

  const ultimo = pag.children[contador - 1].children[0];
  const pre_ultimo = pag.children[contador - 2].children[0];

  const busqueda = sel_objetos.findIndex(
    (sel_objeto) => sel_objeto.id == ultimo.value
  );
  objetos.push(sel_objetos.splice(busqueda, 1)[0]);
  pre_ultimo.removeAttribute("disabled");

  pag.children[contador - 1].remove();
}

function validar() {
  let js = document.getElementById("js");
  if (js.checked) {
    let inputs = document.getElementsByName("input");
    if (
      !inputs[0].value ||
      !inputs[1].value ||
      !inputs[2].value ||
      !inputs[3].value
    ) {
      return alert("Introduzca todos los valores");
    }

    if (inputs[0].value.match(/\d+/g)) {
      alert("Introduzca solo texto");
    }

    if (inputs[0].value.length > 50) {
      return alert("No puede introducir mas de 50 caracteres");
    }

    if (inputs[1].value.length > 10) {
      return alert("No puede introducir mas de 10 valores");
    }

    if (!/^[0-9]+$/.test(inputs[1].value)) {
      alert("Introduzca solo numeros");
    }

    if (inputs[2].value.split("@").length < 2) {
      return alert("Introduzca un correo valido");
    } else if (inputs[2].value.split("@").length > 2) {
      return alert("Introduzca un correo valido");
    }
  }
  // const inputs = document.getElementsByName("input");

  // const texto = `Gracias por comprar en nuestra ferreteria estimado ${inputs[0].value}\nTu numero es: ${inputs[1].value}\nTu correo es: ${inputs[3].value}\nY la direccion dada es: ${inputs[3].value}\n\nTus productos comprados son:\n\n`;
  // pag.childNodes.forEach((objeto) => {});

  // const ticket = document.createElement("a");
  // ticket.setAttribute(
  //   "href",
  //   "data:text/plain;charset=utf-8," + encodeURIComponent()
  // );
  // ticket.setAttribute("download", "ticket.txt");
  // ticket.style.display = "none";

  // document.body.appendChild(ticket);

  // ticket.click();

  // document.body.removeChild(ticket);
}
