// Get form element reference
const form = document.getElementById('employeeForm');

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;

    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const salary = document.getElementById('salary').value;
    const location = document.getElementById('location').value;
   

    // Create URL for form submission
    const url = `/submit?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&department=${encodeURIComponent(department)}&experience=${encodeURIComponent(experience)}&skills=${encodeURIComponent(skills)}&salary=${encodeURIComponent(salary)}&location=${encodeURIComponent(location)}`;

    // Send HTTP GET request to submit form data
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            console.log(data); // Log server response
            form.reset(); // Clear form inputs
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});


