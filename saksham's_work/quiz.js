// Questions, diagnosis, and doctor suggestions
const questions = {
    1: {
        text: "What is your main health concern?",
        options: {
            a: { text: "Pain or discomfort", next: 2 },
            b: { text: "Breathing issues", next: 3 },
            c: { text: "Digestive problems", next: 4 },
            d: { text: "Skin-related concerns", next: 5 }
        }
    },
    2: {
        text: "Where is the pain located?",
        options: {
            a: { text: "Head", next: 6 },
            b: { text: "Chest", next: 7 },
            c: { text: "Stomach", next: 8 },
            d: { text: "Limbs", next: 9 }
        }
    },
    3: {
        text: "Are you experiencing breathing difficulty?",
        options: {
            a: { text: "Yes, it's severe", next: 10 },
            b: { text: "Mild, but noticeable", next: 11 },
            c: { text: "Only during physical activity", next: 12 },
            d: { text: "Not at all", next: 13 }
        }
    },
    4: {
        text: "Do you have frequent digestive discomfort?",
        options: {
            a: { text: "Yes, severe pain", next: 14 },
            b: { text: "Occasional bloating", next: 15 },
            c: { text: "Mild, but persistent", next: 16 },
            d: { text: "Rarely", next: 17 }
        }
    },
    5: {
        text: "Do you have rashes or skin issues?",
        options: {
            a: { text: "Yes, frequent rashes", next: 18 },
            b: { text: "Yes, occasional irritation", next: 19 },
            c: { text: "Mild itching", next: 20 },
            d: { text: "None", next: 21 }
        }
    },
    6: {
        text: "Do you have vision issues along with the head pain?",
        options: {
            a: { text: "Yes", next: 'migraine' },
            b: { text: "No", next: 'tension_headache' }
        }
    },
    7: {
        text: "Is the chest pain sudden and sharp?",
        options: {
            a: { text: "Yes", next: 'heart_attack' },
            b: { text: "No, it's dull", next: 'chest_muscle_strain' }
        }
    },
    8: {
        text: "Do you feel nauseous along with stomach pain?",
        options: {
            a: { text: "Yes", next: 'gastritis' },
            b: { text: "No", next: 'ulcer' }
        }
    },
    9: {
        text: "Is the limb pain persistent and worsens with movement?",
        options: {
            a: { text: "Yes", next: 'arthritis' },
            b: { text: "No", next: 'muscle_strain' }
        }
    },
    10: {
        text: "Are you experiencing shortness of breath while at rest?",
        options: {
            a: { text: "Yes", next: 'asthma' },
            b: { text: "No", next: 'anxiety' }
        }
    },
    11: {
        text: "Is the breathing difficulty accompanied by a cough?",
        options: {
            a: { text: "Yes, it's persistent", next: 'bronchitis' },
            b: { text: "No", next: 'allergy' }
        }
    },
    12: {
        text: "Does physical activity worsen your breathing?",
        options: {
            a: { text: "Yes", next: 'exercise_induced_asthma' },
            b: { text: "No", next: 'general_breathing_issue' }
        }
    },
    13: {
        text: "Do you feel any tightness in your chest?",
        options: {
            a: { text: "Yes", next: 'heart_condition' },
            b: { text: "No", next: 'general_checkup' }
        }
    },
    14: {
        text: "Do you experience cramping in addition to the pain?",
        options: {
            a: { text: "Yes", next: 'intestinal_cramps' },
            b: { text: "No", next: 'gastroenteritis' }
        }
    },
    15: {
        text: "Do you experience heartburn frequently?",
        options: {
            a: { text: "Yes", next: 'GERD' },
            b: { text: "No", next: 'diet_related_issue' }
        }
    },
    16: {
        text: "Is there a change in bowel habits?",
        options: {
            a: { text: "Yes, frequent diarrhea", next: 'IBS' },
            b: { text: "No", next: 'checkup_needed' }
        }
    },
    17: {
        text: "Is your appetite affected?",
        options: {
            a: { text: "Yes", next: 'weight_loss_issue' },
            b: { text: "No", next: 'no_issue' }
        }
    },
    18: {
        text: "Are the rashes itchy?",
        options: {
            a: { text: "Yes", next: 'eczema' },
            b: { text: "No", next: 'dermatitis' }
        }
    },
    19: {
        text: "Is the irritation persistent?",
        options: {
            a: { text: "Yes", next: 'chronic_allergy' },
            b: { text: "No", next: 'seasonal_allergy' }
        }
    },
    20: {
        text: "Do you notice any swelling along with the itching?",
        options: {
            a: { text: "Yes", next: 'hives' },
            b: { text: "No", next: 'dry_skin' }
        }
    },
    21: {
        text: "Have you had any recent exposure to irritants?",
        options: {
            a: { text: "Yes", next: 'irritant_contact_dermatitis' },
            b: { text: "No", next: 'no_skin_issue' }
        }
    },
    22: {
        text: "Are you experiencing fatigue?",
        options: {
            a: { text: "Yes", next: 'chronic_fatigue' },
            b: { text: "No", next: 23 }
        }
    },
    23: {
        text: "Do you have any sleep issues?",
        options: {
            a: { text: "Yes", next: 'insomnia' },
            b: { text: "No", next: 24 }
        }
    },
    24: {
        text: "Is there any recent weight gain or loss?",
        options: {
            a: { text: "Weight gain", next: 'hypothyroidism' },
            b: { text: "Weight loss", next: 'hyperthyroidism' }
        }
    },
    25: {
        text: "Have you experienced mood swings?",
        options: {
            a: { text: "Yes", next: 'mood_disorder' },
            b: { text: "No", next: 26 }
        }
    },
    26: {
        text: "Do you feel anxious or worried frequently?",
        options: {
            a: { text: "Yes", next: 'anxiety_disorder' },
            b: { text: "No", next: 27 }
        }
    },
    27: {
        text: "Do you have memory issues?",
        options: {
            a: { text: "Yes", next: 'memory_disorder' },
            b: { text: "No", next: 'no_issues' }
        }
    },
    28: {
        text: "Is your heart racing or pounding?",
        options: {
            a: { text: "Yes", next: 'arrhythmia' },
            b: { text: "No", next: 29 }
        }
    },
    29: {
        text: "Do you feel dizzy or faint?",
        options: {
            a: { text: "Yes", next: 'orthostatic_hypotension' },
            b: { text: "No", next: 'general_checkup' }
        }
    },
    30: {
        text: "Do you have swollen joints?",
        options: {
            a: { text: "Yes", next: 'arthritis' },
            b: { text: "No", next: 31 }
        }
    },
    31: {
        text: "Have you had any recent injuries?",
        options: {
            a: { text: "Yes", next: 'injury_related' },
            b: { text: "No", next: 'no_injuries' }
        }
    },
    32: {
        text: "Do you have a history of high blood pressure?",
        options: {
            a: { text: "Yes", next: 'hypertension' },
            b: { text: "No", next: 33 }
        }
    },
    33: {
        text: "Is there any history of diabetes in your family?",
        options: {
            a: { text: "Yes", next: 'diabetes' },
            b: { text: "No", next: 34 }
        }
    },
    34: {
        text: "Are you experiencing frequent headaches?",
        options: {
            a: { text: "Yes", next: 'chronic_headache' },
            b: { text: "No", next: 35 }
        }
    },
    35: {
        text: "Do you have a history of seizures?",
        options: {
            a: { text: "Yes", next: 'seizure_disorder' },
            b: { text: "No", next: 36 }
        }
    },
    36: {
        text: "Have you experienced any recent falls?",
        options: {
            a: { text: "Yes", next: 'injury_checkup' },
            b: { text: "No", next: 37 }
        }
    },
    37: {
        text: "Is your skin pale or jaundiced?",
        options: {
            a: { text: "Yes", next: 'liver_issue' },
            b: { text: "No", next: 38 }
        }
    },
    38: {
        text: "Are you experiencing any numbness or tingling?",
        options: {
            a: { text: "Yes", next: 'nerve_issue' },
            b: { text: "No", next: 39 }
        }
    },
    39: {
        text: "Is there any recent infection or illness?",
        options: {
            a: { text: "Yes", next: 'infection_checkup' },
            b: { text: "No", next: 'general_checkup' }
        }
    },

    // Final diagnoses with doctor suggestions
    'migraine': {
        diagnosis: "You may be experiencing migraines.",
        doctor: "Consult a Neurologist."
    },
    'tension_headache': {
        diagnosis: "You might have tension headaches.",
        doctor: "Consult a General Practitioner."
    },
    'heart_attack': {
        diagnosis: "This could be a heart-related issue. Immediate attention needed.",
        doctor: "Consult a Cardiologist or visit the ER immediately."
    },
    'chest_muscle_strain': {
        diagnosis: "This could be a muscle strain in the chest.",
        doctor: "Consult a Physiotherapist."
    },
    'gastritis': {
        diagnosis: "You might have gastritis.",
        doctor: "Consult a Gastroenterologist."
    },
    'ulcer': {
        diagnosis: "You may be experiencing a stomach ulcer.",
        doctor: "Consult a Gastroenterologist."
    },
    'arthritis': {
        diagnosis: "You may have arthritis.",
        doctor: "Consult an Orthopedic Doctor."
    },
    'muscle_strain': {
        diagnosis: "This might be a muscle strain.",
        doctor: "Consult a Physiotherapist."
    },
    'asthma': {
        diagnosis: "You may be experiencing asthma.",
        doctor: "Consult a Pulmonologist."
    },
    'anxiety': {
        diagnosis: "You might be experiencing anxiety.",
        doctor: "Consult a Psychiatrist."
    },
    'bronchitis': {
        diagnosis: "You may have bronchitis.",
        doctor: "Consult a Pulmonologist."
    },
    'exercise_induced_asthma': {
        diagnosis: "This may indicate exercise-induced asthma.",
        doctor: "Consult a Pulmonologist."
    },
    'general_breathing_issue': {
        diagnosis: "You may need a general checkup for your breathing issue.",
        doctor: "Consult a General Practitioner."
    },
    'intestinal_cramps': {
        diagnosis: "You might have intestinal cramps.",
        doctor: "Consult a Gastroenterologist."
    },
    'gastroenteritis': {
        diagnosis: "This may indicate gastroenteritis.",
        doctor: "Consult a Gastroenterologist."
    },
    'GERD': {
        diagnosis: "You may have Gastroesophageal Reflux Disease (GERD).",
        doctor: "Consult a Gastroenterologist."
    },
    'diet_related_issue': {
        diagnosis: "Your issue might be diet-related.",
        doctor: "Consult a Nutritionist."
    },
    'IBS': {
        diagnosis: "You may have Irritable Bowel Syndrome (IBS).",
        doctor: "Consult a Gastroenterologist."
    },
    'weight_loss_issue': {
        diagnosis: "This may indicate a weight loss issue.",
        doctor: "Consult a General Practitioner."
    },
    'eczema': {
        diagnosis: "You might be experiencing eczema.",
        doctor: "Consult a Dermatologist."
    },
    'dermatitis': {
        diagnosis: "This may indicate dermatitis.",
        doctor: "Consult a Dermatologist."
    },
    'chronic_allergy': {
        diagnosis: "You may have a chronic allergy.",
        doctor: "Consult an Allergist."
    },
    'seasonal_allergy': {
        diagnosis: "This may indicate seasonal allergies.",
        doctor: "Consult an Allergist."
    },
    'hives': {
        diagnosis: "You may be experiencing hives.",
        doctor: "Consult a Dermatologist."
    },
    'dry_skin': {
        diagnosis: "This may indicate dry skin issues.",
        doctor: "Consult a Dermatologist."
    },
    'irritant_contact_dermatitis': {
        diagnosis: "You may have irritant contact dermatitis.",
        doctor: "Consult a Dermatologist."
    },
    'no_skin_issue': {
        diagnosis: "No significant skin issue detected.",
        doctor: "Consult a General Practitioner if concerned."
    },
    'chronic_fatigue': {
        diagnosis: "You may be experiencing chronic fatigue.",
        doctor: "Consult a General Practitioner."
    },
    'insomnia': {
        diagnosis: "This may indicate insomnia.",
        doctor: "Consult a Sleep Specialist."
    },
    'hypothyroidism': {
        diagnosis: "You might have hypothyroidism.",
        doctor: "Consult an Endocrinologist."
    },
    'hyperthyroidism': {
        diagnosis: "You may be experiencing hyperthyroidism.",
        doctor: "Consult an Endocrinologist."
    },
    'mood_disorder': {
        diagnosis: "You may be experiencing a mood disorder.",
        doctor: "Consult a Psychiatrist."
    },
    'anxiety_disorder': {
        diagnosis: "You may have an anxiety disorder.",
        doctor: "Consult a Psychiatrist."
    },
    'memory_disorder': {
        diagnosis: "You may be experiencing a memory disorder.",
        doctor: "Consult a Neurologist."
    },
    'arrhythmia': {
        diagnosis: "You may have an arrhythmia.",
        doctor: "Consult a Cardiologist."
    },
    'orthostatic_hypotension': {
        diagnosis: "You may be experiencing orthostatic hypotension.",
        doctor: "Consult a General Practitioner."
    },
    'injury_related': {
        diagnosis: "You may need to check for any injuries.",
        doctor: "Consult an Orthopedic Doctor."
    },
    'no_injuries': {
        diagnosis: "No injuries detected.",
        doctor: "Consult a General Practitioner if concerned."
    },
    'hypertension': {
        diagnosis: "You may have hypertension.",
        doctor: "Consult a Cardiologist."
    },
    'diabetes': {
        diagnosis: "You may be experiencing diabetes.",
        doctor: "Consult an Endocrinologist."
    },
    'chronic_headache': {
        diagnosis: "You may be experiencing chronic headaches.",
        doctor: "Consult a Neurologist."
    },
    'seizure_disorder': {
        diagnosis: "You may have a seizure disorder.",
        doctor: "Consult a Neurologist."
    },
    'injury_checkup': {
        diagnosis: "You may need a checkup for injuries.",
        doctor: "Consult a General Practitioner."
    },
    'liver_issue': {
        diagnosis: "You may have a liver issue.",
        doctor: "Consult a Hepatologist."
    },
    'nerve_issue': {
        diagnosis: "You may be experiencing a nerve issue.",
        doctor: "Consult a Neurologist."
    },
    'infection_checkup': {
        diagnosis: "You may need a checkup for any infections.",
        doctor: "Consult a General Practitioner."
    },
    'general_checkup': {
        diagnosis: "A general checkup is recommended.",
        doctor: "Consult a General Practitioner."
    }
};


const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const resultBox = document.getElementById('result');
const retakeButton = document.getElementById('retake-button');
const homeButton = document.getElementById('home-button');
let currentQuestion = 1;

// Function to display a question
function showQuestion(questionId) {
    const question = questions[questionId];
    document.getElementById('question').textContent = question.text;
    optionsContainer.innerHTML = ''; // Clear previous options

    // Loop through options and create buttons for each
    Object.keys(question.options).forEach(key => {
        const button = document.createElement('button');
        button.textContent = question.options[key].text;

        // Check if the next step is a diagnosis or another question
        if (typeof question.options[key].next === 'string') {
            button.addEventListener('click', () => showResult(question.options[key].next));
        } else {
            button.addEventListener('click', () => showQuestion(question.options[key].next));
        }

        optionsContainer.appendChild(button);
    });
}

// Function to show the result (diagnosis and doctor suggestion)
function showResult(diagnosisId) {
    const result = questions[diagnosisId]; // Access the diagnosis object within questions
    resultBox.innerHTML = `<h3>${result.diagnosis}</h3><p>Consult a: ${result.doctor}</p>`;

    // Hide the question container and show the result container
    questionContainer.style.display = 'none'; // Hide question container
    resultContainer.style.display = 'block'; // Show result container
    resultContainer.classList.add('show');    // Add the show class for visibility and animation
}

// Retake quiz functionality
retakeButton.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    currentQuestion = 1; 
    showQuestion(currentQuestion);
});

homeButton.addEventListener('click', () => {
    window.location.href= '../home.html';
});

// Start quiz by showing the first question when the page loads
window.onload = () => showQuestion(currentQuestion);
