document.addEventListener("DOMContentLoaded", function () {
    const commandInput = document.getElementById("command");
    const output = document.getElementById("output");
    const intro = document.getElementById("intro");
  
    commandInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const command = commandInput.value;
        processCommand(command);
        commandInput.value = "";
      }
    });
  
    function processCommand(command) {
      const outputText = document.createElement("p");
      outputText.textContent = `GitHub:/TerminatorSS24/PortFolio> ${command}`;
      output.appendChild(outputText);
  
      switch (command.toLowerCase()) {
        case "command":
        case "commands":
          printOutput(
            "Available commands: about, skills, academics, certifications, projects, contact, social"
          );
          break;
        case "about":
          printOutput(
            "I'm Subhraneel Saha, a web developer passionate about creating awesome websites. I'm currently pursuing a B.Tech in CSE from Narula Institute of Technology, Agarpara, West Bengal. Participated in some hackathons."
          );
          break;
        case "academics":
          printOutput(
            "Madhyamik: 92.14% :: Higher Secondary: 86.4%[PCBM] :: 1st Year GPA:8.26 :: 2nd Year GPA:8.66"
          );
          break;
        case "certifications":
          const certificates = [
            {
              title: "Developer and Technology Job Simulation | Forage",
              link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_WHHS7JGsBEMjH5epC_1734239994089_completion_certificate.pdf",
            },
            {
              title: "Explore Emerging Tech | IBM",
              link: "https://www.credly.com/badges/e7dc05d6-b9e3-4c56-9364-d88e12820bad/linked_in_profile",
            },
            {
              title: "Getting Started with Artificial Intelligence | IBM",
              link: "https://www.credly.com/badges/48cf06f3-f8f8-4155-bab5-310dcae5b2dd/linked_in_profile",
            },
            {
              title: "Object Oriented Programming in Java Course Online | Scaler",
              link: "https://moonshot.scaler.com/s/sl/J99VnFDKx1?_gl=1*v4cluy*_gcl_au*MTEyNDk0NTQwMC4xNzIyMTQwMjMx*FPAU*MTUyMjA0NTk4MC4xNzIyMTQwMTE0*_ga*MTcyODU1ODkwNi4xNzIyMTQwMTE1*_ga_53S71ZZG1X*MTcyMjE0MDExNS4xLjEuMTcyMjE0MTI0Mi4wLjAuMTQ0NzQ3MDczNg..",
            },
            {
              title: "Mastering Data Structures & Algorithms using  C and C++ | Udemy",
              link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1b4bad3d-5a84-4cc7-988b-e2687241803f.pdf",
            },
            {
              title: "SQL Introduction Course 2023 | Udemy",
              link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c72ad18f-f723-4f22-a465-3cef82e1956f.pdf",
            },
          ];
          certificates.forEach((cert) => {
            printOutput(cert.title, cert.link);
          });
          break;
        case "projects" || "project":
          const projectLinks = [
            {
              title: "Instagram Clone",
              link: "https://n6p1vo.csb.app/",
            },
            {
              title: "EzShopping",
              link: "https://ezshopping-beta.vercel.app/",
            },
            {
              title: "Galactico Theme",
              link: "https://marketplace.visualstudio.com/items?itemName=SubhraneelSaha.galactico-theme",
            },
          ];
          projectLinks.forEach((prj) => {
            printOutput(prj.title, prj.link);
          });
          break;
        case "skills":
          printOutput(
            "Skills: HTML, CSS, JavaScript, C, C++, Python, Java, React etc."
          );
          break;
        case "contact":
          printOutput("Contact me at");
          printOutput(
            "subhraneelsaha799@gmail.com",
            "mailto:subhraneelsaha799@gmail.com"
          );
          break;
        case "social":
          printOutput("Here is my social media links");
  
          const socialMediaLinks = [
            {
              platform: "GitHub",
              icon: "github.png",
              link: "https://github.com/TerminatorSS24",
            },
            {
              platform: "LinkedIn",
              icon: "linkedin.png",
              link: "https://www.linkedin.com/in/subhraneel-saha-9499ab253/",
            },
            {
              platform: "Facebook",
              icon: "facebook.png",
              link: "https://www.facebook.com/subhraneel.saharup",
            },
            {
              platform: "Twitter",
              icon: "twitter.png",
              link: "https://x.com/Subhraneel40939",
            },
            {
              platform: "Instagram",
              icon: "instagram.png",
              link: "https://www.instagram.com/mr.saha_24/",
            },
          ];
  
          socialMediaLinks.forEach((social) => {
            const socialIcon = document.createElement("img");
            socialIcon.src = social.icon;
            socialIcon.alt = social.platform;
            socialIcon.title = social.platform;
            socialIcon.classList.add("social-icon");
            socialIcon.addEventListener("click", function () {
              window.open(social.link, "_blank");
            });
            output.appendChild(socialIcon);
          });
          break;
        default:
          printOutput(
            "Command not recognized. Type 'commands' for a list of commands."
          );
      }
    }
  
    function typeText(text) {
      intro.textContent = "";
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
      const outputElement = document.createElement("p");
  
      if (linkURL) {
        const link = document.createElement("a");
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
  