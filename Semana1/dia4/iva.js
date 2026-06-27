const pre_iva = (precio) => (precio+(precio*.16));

    let precio_sin_iva=768;

    console.log(`sub total ${precio_sin_iva}\n total ${pre_iva(precio_sin_iva)}`);