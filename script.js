(function () {
    
    let app = document.getElementById('app');
    
    let inputCaracteres = document.getElementById('numero-caracteres');
    
    let configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    let caracteres = {
        numeros: '0 1 2 3 4 5 6 7 8 9',
        simbolos: '! # $ % & / ( ) = ? ¿ . , ; - _ ° | { } + * ~ ^ ',
        minusculas: 'q w e r t y u i o p a s d f g h j k l ñ z x c v b n m',
        mayusculas: 'Q W E R T Y U I O P A S D F G H J K L Ñ Z X C V B N M'
    }

    app.addEventListener('submit', (e) => {
        e.preventDefault() // se evita el comportamiento por defecto y evita que se envie el submit.
    })

    app.elements.namedItem('btn-mas-uno').addEventListener('click', () => {
        configuracion.caracteres++;
        inputCaracteres.value = configuracion.caracteres;
    })

    app.elements.namedItem('btn-menos-uno').addEventListener('click', () => {
        if (configuracion.caracteres > 1) {
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }
    })

    // Mejorar eficiencia de estas lineas de codigo.

    const btnSimbolos = document.getElementById('btn-simbolos');

    btnSimbolos.addEventListener('click', () => {
        btnSimbolos.classList.toggle('false');
        btnSimbolos.childNodes[0].classList.toggle('fa-check');
        btnSimbolos.childNodes[0].classList.toggle('fa-times');
        configuracion.simbolos =! configuracion.simbolos;
    })

    const btnNumeros = document.getElementById('btn-numeros');

    btnNumeros.addEventListener('click', () => {
        btnNumeros.classList.toggle('false');
        btnNumeros.childNodes[0].classList.toggle('fa-check');
        btnNumeros.childNodes[0].classList.toggle('fa-times');
        configuracion.numeros =! configuracion.numeros;
    })

    const btnMayusculas = document.getElementById('btn-mayusculas');

    btnMayusculas.addEventListener('click', () => {
        btnMayusculas.classList.toggle('false');
        btnMayusculas.childNodes[0].classList.toggle('fa-check');
        btnMayusculas.childNodes[0].classList.toggle('fa-times');
        configuracion.mayusculas =! configuracion.mayusculas;
    })

    // Mejorar eficiencia de estas lineas de codigo.

    const btnGenerar = document.getElementById('btn-generar');

    btnGenerar.addEventListener('click', () => {
        generarPass()
    })

    const generarPass = () => {
        let caracteresFinales = '';
        let pass = '';

        for (propiedad in configuracion) {
            if (configuracion[propiedad]) {
                caracteresFinales += caracteres[propiedad] + ' ';
            }
        }

        caracteresFinales = caracteresFinales.trim();
        caracteresFinales = caracteresFinales.split(' ');
        console.log(caracteresFinales)

        for (let i=0; i < configuracion.caracteres; i++) {
            pass += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]
        }


        app.elements.namedItem('input-password').value = pass;

    }

    app.elements.namedItem('input-password').addEventListener('click', () => {
        app.elements.namedItem('input-password').select();
        document.execCommand('copy');
        document.getElementById('alerta-copiado').classList.add('active');

        setTimeout(function () {
            document.getElementById('alerta-copiado').classList.remove('active');
        }, 1500)
    })

}())