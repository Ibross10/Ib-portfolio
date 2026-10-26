
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
        technologies: "HTML, CSS, JavaScript, Dictionary API",
        github: "https://github.com/Ibross10/wordly",
        category: "web"
    },
    {
        title: "Trivia CLI Game",
        description: "An interactive command-line quiz game with multiple-choice questions, a timer, answer feedback, and a quit option.",
        technologies: "JavaScript, Node.js",
        github: "https://github.com/Ibross10/trivia-cli",
        category: "cli"
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


const projectsList = document.getElementById("projects-list");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayProjects(category = "all") {
    projectsList.innerHTML = "";

    const filteredProjects = projects.filter((project) => {
        return category === "all" || project.category === category;
    });

    for (const project of filteredProjects) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const technologies = document.createElement("p");
        technologies.className = "tech";
        technologies.textContent = `Technologies: ${project.technologies}`;

        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.textContent = "View Project on GitHub";
        githubLink.target = "_blank";
        githubLink.rel = "noopener noreferrer";

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(technologies);
        card.appendChild(githubLink);

        projectsList.appendChild(card);
    }
}

filterButtons.forEach((button) => {
    button.setAttribute(
        "aria-pressed",
        String(button.classList.contains("active"))
    );

    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        displayProjects(selectedCategory);

        filterButtons.forEach((filterButton) => {
            const isActive = filterButton === button;

            filterButton.classList.toggle("active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
        });
    });
});

displayProjects();


const copyEmailButton = document.getElementById("copy-email");

copyEmailButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("ibrahimabdi3760@gmail.com");
        copyEmailButton.textContent = "Email Copied!";
    } catch (error) {
        copyEmailButton.textContent = "Copy failed — select the email above";
    }
});

