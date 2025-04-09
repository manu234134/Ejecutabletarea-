document.getElementById("vocationalTest").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    if (!q1 || !q2 || !q3) {
        document.getElementById("result").innerText = "Por favor, responde todas las preguntas.";
        return;
    }
    
    let career = "";
    
    if (q1.value === "ciencia" || q2.value === "hospital" || q3.value === "matematicas") {
        career = "Ciencias de la Salud, Ingeniería o Matemáticas";
    } else if (q1.value === "arte" || q2.value === "oficina" || q3.value === "literatura") {
        career = "Diseño Gráfico, Comunicación o Administración";
    } else if (q1.value === "social" || q2.value === "aire_libre" || q3.value === "deportes") {
        career = "Trabajo Social, Turismo o Educación Física";
    } else {
        career = "una carrera diversa según tus intereses";
    }
    
    document.getElementById("result").innerText = "Según tus respuestas, podrías considerar una carrera en: " + career;
});