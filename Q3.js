document.getElementById('addJob').addEventListener('click', function() {
    const jobEntry = document.querySelector('.job-entry'); 
    const newJobEntry = jobEntry.cloneNode(true); 
    jobEntry.parentNode.appendChild(newJobEntry); 
});

document.getElementById('addReference').addEventListener('click', function() {
    const refEntry = document.querySelector('.reference-entry'); 
    const newrefEntry = refEntry.cloneNode(true); 
    refEntry.parentNode.appendChild(newrefEntry); 
});

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const zip = document.getElementById('zip').value;
    const form = document.getElementById('jobApplicationForm');

    if (!textformat(firstName)){
        alert('Please enter only alphabets for name');
    }

    if (!textformat(lastName)){
        alert('Please enter only alphabets for name');
    }

    if (!phoneformat(phoneNumber)){
        alert('Please enter phone number in valid format');
    }
    
    if (!emailformat(email)){
        alert('Please enter email in valid format abc123@abc.com');
    }

    if (!zipformat(zip)){
        alert('Please enter only 5 digits for zipcode');
    }

    const formData = new FormData(form);

    const data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    console.log(data);

    console.log('Form submitted successfully.');
});

function textformat(name) {
    const regex = /\d/;
    return !regex.test(name);
}

function phoneformat(number){
    const regex = /^(\d{0,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{4}$/;
    return regex.test(number);
}

function emailformat(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function zipformat(zipCode) {
    const regex = /^\d{5}$/;
    return regex.test(zipCode);
}

document.getElementById('viewtablebtn').addEventListener('click', function() {
    const form = document.getElementById('jobApplicationForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    const tableDiv = document.getElementById('table');
    tableDiv.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Resume</th>
                    <th>Cover Letter</th>
                    <th>Highest Education</th>
                    <th>Univeristy Name</th>
                    <th>Major</th>
                    <th>Graduation Year</th>
                    <th>Employement History</th>
                    <th>Previous Job Title</th>
                    <th>Skills</th>
                    <th>Certificates</th>
                    <th>Start Date</th>
                    <th>Preferref Work Schedule</th>
                    <th>Willing to Relocate</th>
                    <th>Reference</th>
                    <th>Why Do You Want To Work For Us?</th>
                    <th>Why Should We Hire You?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${data.firstName} ${data.lastName}</td>
                    <td>${data.email}</td>
                    <td>${data.number}</td>
                    <td>${data.street} ${data.city} ${data.state} ${data.zip}</td>
                    <td>${data.resume ? 'Uploaded' : 'Not provided'}</td>
                    <td>${data.coverLetter ? 'Provided' : 'Not provided'}</td>
                    <td>${data.highedu}</td>
                    <td>${data.uniname}</td>
                    <td>${data.major}</td>
                    <td>${data.grad}</td>
                    <td>${data.emp}</td>
                    <td>${data.company} ${data.date} ${data.resp}</td>
                    <td>${data.skill}</td>
                    <td>${data.certificate}</td>
                    <td>${data.startDate}</td>
                    <td>${data.schedule}</td>
                    <td>${data.relocate}</td>
                    <td>${data.refName} ${data.refContact} ${data.refRelationship}</td>
                    <td>${data.why}</td>
                    <td>${data.why1}</td>
                </tr>
            </tbody>
        </table>
    `;
});
