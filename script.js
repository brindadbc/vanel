

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imcForm');
    const poidsInput = document.getElementById('poids');
    const tailleInput = document.getElementById('taille');
    const calcBtn = document.getElementById('calcBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultBox = document.getElementById('resultBox');
    const imcValue = document.getElementById('imcValue');
    const imcCategory = document.getElementById('imcCategory');
    const imcRecommendation = document.getElementById('imcRecommendation');
    const poidsError = document.getElementById('poidsError');
    const tailleError = document.getElementById('tailleError');
   
    // Fonction pour valider les entrées
    function validateInputs() {
        let isValid = true;
       
        // Validation du poids
        if (!poidsInput.value || poidsInput.value <= 0) {
            poidsError.style.display = 'block';
            isValid = false;
        } else {
            poidsError.style.display = 'none';
        }
       
        // Validation de la taille
        if (!tailleInput.value || tailleInput.value < 0.5 || tailleInput.value > 3) {
            tailleError.style.display = 'block';
            isValid = false;
        } else {
            tailleError.style.display = 'none';
        }
       
        return isValid;
    }
   
    // Fonction pour calculer l'IMC
    function calculerIMC() {
        if (!validateInputs()) {
            return;
        }
       
        const poids = parseFloat(poidsInput.value);
        const taille = parseFloat(tailleInput.value);
        const imc = poids / (taille * taille);
        const imcArrondi = Math.round(imc * 10) / 10;
       
        imcValue.textContent = imcArrondi;
       
        // Déterminer la catégorie d'IMC
        let categorie = '';
        let recommendation = '';
       
        if (imc < 18.5) {
            categorie = 'Insuffisance pondérale';
            resultBox.className = 'result insuffisance';
            recommendation = 'Consultez un professionnel de santé pour des conseils sur une prise de poids saine.';
        } else if (imc >= 18.5 && imc <= 24.9) {
            categorie = 'Poids normal';
            resultBox.className = 'result normal';
            recommendation = 'Continuez à maintenir une alimentation équilibrée et une activité physique régulière.';
        } else if (imc >= 25.0 && imc <= 29.9) {
            categorie = 'Surpoids';
            resultBox.className = 'result surpoids';
            recommendation = 'Envisagez d\'améliorer votre alimentation et d\'augmenter votre activité physique.';
        } else {
            categorie = 'Obésité';
            resultBox.className = 'result obesite';
            recommendation = 'Il est recommandé de consulter un professionnel de santé pour élaborer un plan adapté.';
        }
       
        imcCategory.textContent = categorie;
        imcRecommendation.textContent = recommendation;
       
        resultBox.style.display = 'block';
    }
   
    // Fonction pour réinitialiser le formulaire
    function resetForm() {
        form.reset();
        resultBox.style.display = 'none';
        poidsError.style.display = 'none';
        tailleError.style.display = 'none';
    }
   
    // Gestionnaires d'événements
    calcBtn.addEventListener('click', calculerIMC);
    resetBtn.addEventListener('click', resetForm);
   
    // Validation à la saisie
    poidsInput.addEventListener('input', function() {
        if (this.value && this.value > 0) {
            poidsError.style.display = 'none';
        }
    });
   
    tailleInput.addEventListener('input', function() {
        if (this.value && this.value >= 0.5 && this.value <= 3) {
            tailleError.style.display = 'none';
        }
    });
});




