function gerarTreino() {

    
    const grupoMuscular = document.getElementById('grupoMuscular').value;
    const nivel = document.getElementById('nivel').value;
    const objetivo = document.getElementById('objetivo').value;
    const equipamento = document.getElementById('equipamento').value;

    const url = new URL('ficha.html', window.location.origin);
    url.searchParams.append('grupoMuscular', grupoMuscular);
    url.searchParams.append('nivel', nivel);
    url.searchParams.append('objetivo', objetivo);
    url.searchParams.append('equipamento', equipamento);
    window.location.href = url.toString();
}


