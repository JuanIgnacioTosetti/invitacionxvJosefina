document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencias a los elementos select y las mesas
    const selectMesa = document.getElementById('mesas');
    const mesas = [];

    // Llenar el array de mesas con las referencias a las divs correspondientes
    for (let i = 1; i <= 13; i++) {
        const mesa = document.getElementById(`mesa${i}`);
        if (mesa) { // Verificar si la mesa existe antes de agregarla al array
            mesas.push(mesa);
        }
    }

    // Agregar un evento de cambio al elemento select si existe
    if (selectMesa) {
        selectMesa.addEventListener('change', function () {
            // Ocultar todas las mesas
            for (const mesa of mesas) {
                mesa.style.display = 'none';
            }

            // Mostrar la mesa correspondiente a la opción seleccionada
            const mesaSeleccionada = selectMesa.value;
            const index = mesas.findIndex(mesa => mesa.id === mesaSeleccionada);
            
            if (index !== -1) {
                mesas[index].style.display = 'block';
            }
        });
    }
});
