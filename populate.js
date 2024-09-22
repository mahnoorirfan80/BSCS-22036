
function populateAboutMe() {
   console.log("I'm in");
    let aboutMeSection = document.getElementById('about-me-text');
    console.log( aboutMeSection)
    aboutMeSection.innerHTML = profileData.about.description;
    console.log( aboutMeSection.innerHTML)

    const profilePicture = document.getElementById('profile-pic');
    profilePicture.src = profileData.about.image;
}


function populateEducation() {
    const educationContainer = document.getElementById('education-container');
    profileData.education.forEach((edu) => {
        const eduItem = document.createElement('div');
        eduItem.classList.add('education-item');

        eduItem.innerHTML = `
            <h3>${edu.duration}</h3>
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.degree}</p>
            <p>${edu.details || ''}</p>
        `;

        educationContainer.appendChild(eduItem);
    });
}

// Function to populate Work Experience section
function populateExperience() {
    const experienceContainer = document.getElementById('experience-container');
    profileData.experience.forEach((exp) => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');

        expItem.innerHTML = `
            <h3>${exp.year}: ${exp.company}, ${exp.location}</h3>
            <p>${exp.description}</p>
        `;

        experienceContainer.appendChild(expItem);
    });
}

// Function to populate Projects section
function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    profileData.projects.forEach((project) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectsContainer.appendChild(projectItem);
    });
}

// Function to populate Skills section
function populateSkills() {
    const hardSkillsContainer = document.querySelector('#skills .skills-container .skills-item:nth-child(1) ul');
    const softSkillsContainer = document.querySelector('#skills .skills-container .skills-item:nth-child(2) ul');

    profileData.skills.hardSkills.forEach((skill) => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        hardSkillsContainer.appendChild(skillItem);
    });

    profileData.skills.softSkills.forEach((skill) => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        softSkillsContainer.appendChild(skillItem);
    });
}

// Function to populate Extracurricular section
function populateExtracurricular() {
    const extracurricularContainer = document.getElementById('extracurricular-container');
    profileData.extracurriculars.forEach((extra) => {
        const extraItem = document.createElement('div');
        extraItem.classList.add('extracurricular-item');

        extraItem.innerHTML = `
              <h3>${extra.title}</h3>
            
            <p>${extra.description}</p>
        `;

        extracurricularContainer.appendChild(extraItem);
    });
}


// Function to populate Awards section
function populateAwards() {
    const awardsContainer = document.getElementById('awards');
    profileData.awards.forEach((award) => {
        const awardItem = document.createElement('li');
        awardItem.textContent = award;
        awardsContainer.appendChild(awardItem);
    });
}

// Function to populate Contact section
function populateContact() {
    const contactSection = document.querySelector('#contact');
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <p>For more information or to get in touch, please contact me at:</p>
        <p>Phone: ${profileData.contact.phone}</p>
        <p>Email: <a href="mailto:${profileData.contact.email}">${profileData.contact.email}</a></p>
        <p>LinkedIn: <a href="${profileData.contact.linkedin}" target="_blank">${profileData.contact.linkedin}</a></p>
    `;
}

// Call the functions to populate the sections

populateProjects();
populateSkills();
populateContact();

document.addEventListener('DOMContentLoaded',populateAboutMe)
document.addEventListener('DOMContentLoaded',populateEducation)
document.addEventListener('DOMContentLoaded',populateExperience)
document.addEventListener('DOMContentLoaded',populateExtracurricular)
document.addEventListener('DOMContentLoaded',populateAwards)
