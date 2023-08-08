const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.get('/submit', (req, res) => {
    const employeeData = {
        name: req.query.name,
        age: req.query.age,
        department: req.query.department,
        experience:req.query.experience,
        skills:req.query.skills,
        location:req.query.location,
        salary:req.query.salary
    };

    // Save data to a JSON file
    const filePath = path.join(__dirname, 'public', 'employee_data.json');
    fs.readFile(filePath, (err, data) => {
        let employees = [];
        if (!err) {
            employees = JSON.parse(data);
        }
        employees.push(employeeData);

        fs.writeFile(filePath, JSON.stringify(employees, null, 2), (err) => {
            if (err) throw err;
            console.log('Employee data saved successfully.');
            alert('Employee data saved successfully.');
        });
    });

    res.send('Employee data saved successfully.');
    
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




