document.addEventListener('DOMContentLoaded', function () {
    const commandInput = document.getElementById('command');
    const output = document.getElementById('output');
    const intro = document.getElementById('intro');

    commandInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const command = commandInput.value;
            processCommand(command);
            commandInput.value = '';
        }
    });

    function processCommand(command) {
        const outputText = document.createElement('p');
        outputText.textContent = `GitHub:/TerminatorSS24/PortFolio> ${command}`;
        output.appendChild(outputText);

        switch (command.toLowerCase()) {
            case 'command':
            case 'commands':
                printOutput("Available commands: about, skills, academics, certifications, projects, contact, social");
                break;
            case 'about':
                printOutput("I'm Subhraneel Saha, a web developer passionate about creating awesome websites. I'm currently pursuing a B.Tech in CSE from Narula Institute of Technology, Agarpara, West Bengal. I'm a 2 ⭐ programmer at CodeChef, my max rating at LeetCode is 1552");
                break;
            case 'academics':
                printOutput("Madhyamik: 92.14% :: Higher Secondary: 86.4%[PCBM] :: 1st Year GPA:8.26");
                break;
            case 'certifications':
                const certificates = [
                    {
                        title: "SQL Introduction Course 2023",
                        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c72ad18f-f723-4f22-a465-3cef82e1956f.pdf"
                    },
                    {
                        title: "PHP for beginners: PHP Crash Course 2023 | Udemy",
                        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-853b68be-558f-450a-b96b-1957494d21c2.pdf"
                    },
                    {
                        title: "CodeFest JIS University - 2023",
                        link: "https://drive.google.com/file/d/1P-Guo6nfVWY1CJJvL6biIczTdjJsl32f/view",
                    },
                    {
                        title: "Front End Development Bootcamp",
                        link: "https://drive.google.com/drive/folders/181PPKCZxHVaPXDzqbpcjEKSJ1p7bjQ1x?usp=sharing",
                    },
                    {
                        title: "Back End  Development Bootcamp",
                        link: "https://drive.google.com/drive/folders/1TMeO0UAu4DuavZ4zCi-vcUKUfuskAzn7?usp=drive_link",
                    },
                    {
                        title: "Mastering Data Structures & Algorithms using  C and C++",
                        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1b4bad3d-5a84-4cc7-988b-e2687241803f.pdf",
                    },
                ];
                certificates.forEach(cert => {
                    printOutput(cert.title, cert.link);
                });
                break;
            case 'projects' || 'project':
                const projectLinks = [
                    {
                        title: "Instagram Clone",
                        link: "https://n6p1vo.csb.app/"
                    },
                    {
                        title: "Coders Dashboard",
                        link: "https://coders-dashboard.vercel.app/"
                    },
                    {
                        title: "Galactico Theme",
                        link: "https://marketplace.visualstudio.com/items?itemName=SubhraneelSaha.galactico-theme"
                    }
                ];
                projectLinks.forEach(prj => {
                    printOutput(prj.title, prj.link);
                });
                break;
            case 'skills':
                printOutput("Skills: HTML, CSS, JavaScript, C, C++, Python, Rust etc.");
                break;
            case 'contact':
                printOutput('Contact me at');
                printOutput('subhraneelsaha799@gmail.com', 'mailto:subhraneelsaha799@gmail.com')
                break;
            case 'social':
                printOutput("Here is my social media links");

                const socialMediaLinks = [
                    { platform: "GitHub", icon: "github.png", link: "https://github.com/TerminatorSS24" },
                    { platform: "LinkedIn", icon: "linkedin.png", link: "https://www.linkedin.com/in/subhraneel-saha-9499ab253/" },
                    { platform: "Facebook", icon: "facebook.png", link: "https://www.facebook.com/subhraneel.saharup" },
                    { platform: "Twitter", icon: "twitter.png", link: "https://x.com/Subhraneel40939" },
                    { platform: "Instagram", icon: "instagram.png", link: "https://www.instagram.com/mr.saha_24/" }
                ];

                socialMediaLinks.forEach(social => {
                    const socialIcon = document.createElement('img');
                    socialIcon.src = social.icon;
                    socialIcon.alt = social.platform;
                    socialIcon.title = social.platform;
                    socialIcon.classList.add('social-icon');
                    socialIcon.addEventListener('click', function () {
                        window.open(social.link, '_blank');
                    });
                    output.appendChild(socialIcon);
                });
                break;
            default:
                printOutput("Command not recognized. Type 'commands' for a list of commands.");
        }
    }

    function typeText(text) {
        intro.textContent = '';
        let index = 0;

        function type() {
            intro.textContent += text[index];
            index++;

            if (index < text.length) {
                setTimeout(type, 50);
            }
        }

        type();
    }

    function printOutput(text, linkURL = "") {
        const outputElement = document.createElement('p');

        if (linkURL) {
            const link = document.createElement('a');
            link.href = linkURL;
            link.textContent = text;
            link.target = "_blank";
            outputElement.appendChild(link);
        } else {
            outputElement.textContent = text;
        }

        output.appendChild(outputElement);
    }
});
