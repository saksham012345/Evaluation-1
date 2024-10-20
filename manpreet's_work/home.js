
     //  sidebar 
     function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active'); }
  
      // slideshow
      let isPaused = false;
  
      function pauseSlideshow() {
        const figure = document.querySelector('.slider figure');
        figure.style.animationPlayState = 'paused';
        isPaused = true;
      }
  
      function resumeSlideshow() {
        if (isPaused) {
          const figure = document.querySelector('.slider figure');
          figure.style.animationPlayState = 'running';
          isPaused = false;
        }
      }
  
    
      // modal-box
      function showModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10); 
  }
  
  // Close the modal
  function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300); 
  }
  
  document.querySelectorAll('.appointment-btn').forEach(button => {
    button.addEventListener('click', showModal);
  });
  
  window.onclick = function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
      closeModal();
    }
  }
  
  
   
    document.getElementById("appointmentForm").onsubmit = function(event) {
      event.preventDefault(); 
  
     
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const age = document.getElementById("age").value;
      const gender = document.getElementById("gender").value;
      const date = document.getElementById("date").value;
  
      
      const appointmentDetails = {
        name: name,
        phone: phone,
        age: age,
        gender: gender,
        date: date,
      };
  
   
      localStorage.setItem("appointmentDetails", JSON.stringify(appointmentDetails)); 
  
      console.log("Appointment saved to local storage:", appointmentDetails);
  
      alert("Appointment made successfully!");
  
      document.getElementById("appointmentForm").reset();
    };