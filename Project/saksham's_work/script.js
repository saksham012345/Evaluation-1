const specialisations = [
    {
        id : 0,
        name : "Cardiology",
        descrip : "Cardiology is the medical speciality focussed on diagnosing and treating heart and blood vessel disorders",
        img : "cardio.webp"
    },
    {
        id : 1,
        name : "Otolaryngology",
        descrip : "ENT (Ear , Nose and Throat) focuses on diagnosing and treating disorders of the ear, nose, throat and related structures",
        img : "entlogy.webp"
    },
    {
        id : 2,
        name : "Dentistry",
        descrip : "Dentistry is the medical speciality focussed on diagnosing and treating dental issues including teeth gums and mouth health",
        img : "dentistry1.webp"
    },
    {
        id : 3,
        name : "Ophthalmology",
        descrip : "An eye doctor (ophthalmologist) specializes in diagnosing, treating, and managing eye disorders and vision problems",
        img : "ophtha.webp"
    },
    {
        id : 4,
        name : "Neurology",
        descrip : "Neurology is the medical speciality that deals with the diagnosis and treating disorders of brain, spinal, cord and nervous system",
        img : "neurolog.webp"
    },
    {
        id : 5,
        name : "Pulmonology",
        descrip : "A pulmonologist specializes in diagnosing and treating diseases of the lungs and respiratory system",
        img : "pulmono.webp"
    },
    {
        id : 6,
        name : "Gynecology",
        descrip : "Gynecology specializes in the health, diagnosis and treatment of the female reproductive system and related dusorders",
        img : "gynecology.webp"
    }
]
let screen = document.querySelector('.side-container');

function function1(index){
    const selected = specialisations[index]; 
    screen.innerHTML =
    `<h1> ${selected.name} </h1>
    <p> ${selected.descrip} </p>    
    `;
    screen.style.background = `url('${selected.img}')`;
    screen.style.backgroundSize = "648px auto";
    screen.style.backgroundPosition = "left";
    screen.style.backgroundRepeat = "no-repeat";
}