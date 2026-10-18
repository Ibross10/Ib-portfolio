
const testimonials = {
    first: {
        name: "Alex Johnson",
        message: "Ibrahim is a dedicated learner who enjoys solving problems and building useful applications."
    },
    second: {
        name: "Sarah Ahmed",
        message: "Working with Ibrahim is a great experience. He is curious, creative, and eager to improve."
    },
    third: {
        name: "David Kimani",
        message: "Ibrahim shows commitment to learning web development and turning ideas into working projects."
    }
};

const projects = [
    {
        title: "Wordly Dictionary App",
        description: "A dictionary application that allows users to search for word meanings, explore definitions, and save favorite words.",
        technologies: "HTML, CSS, JavaScript, Dictionary API"
    },
    {
        title: "Trivia CLI Game",
        description: "An interactive command-line quiz game with multiple-choice questions, a timer, answer feedback, and a quit option.",
        technologies: "JavaScript, Node.js"
    }
];

// Display testimonials on the page
const testimonialsList = document.getElementById("testimonials-list");

for (const key in testimonials) {
    const testimonial = testimonials[key];

    const card = document.createElement("article");
    card.className = "testimonial-card";

    const message = document.createElement("p");
    message.textContent = `"${testimonial.message}"`;

    const name = document.createElement("h3");
    name.textContent = `— ${testimonial.name}`;

    card.appendChild(message);
    card.appendChild(name);

    testimonialsList.appendChild(card);
}

// Display projects on the page
const projectsList = document.getElementById("projects-list");

for (const project of projects) {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const technologies = document.createElement("p");
    technologies.className = "tech";
    technologies.textContent = `Technologies: ${project.technologies}`;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(technologies);

    projectsList.appendChild(card);
}
