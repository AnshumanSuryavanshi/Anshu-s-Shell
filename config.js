const config = {
    "help": [
        {
            "title": "help",
            "description": "for a list of commands(add flags '-d' for commands description)",
            "info": ["help or ls command gives the list of commands","add '-d' flag for description of all commands also","write command after help to get info about that specific command like 'help typing'"]
        },
        {
            "title": "clear",
            "description": "to clear the terminal",
            "info": ["clear or cls command clears the terminal"]
        },
        {
            "title": "about",
            "description": "to learn more about me",
            "info": ["use about command to learn more about me"]
        },
        {
            "title": "social",
            "description": "to see my social links (add flags '-l' for links and '-d' for detailed results)",
            "info": ["use social command to see my social links","add '-l' flag for links and '-d' flag for detailed results"]
        },
        {
            "title": "projects",
            "description": "to see my projects",
            "info": ["use projects command to see my projects"]
        },
        {
            "title": "blogs",
            "description": "to see my recent security write-ups",
            "info": ["use blogs command to see my recent blogs"]
        },
        {
            "title": "contact",
            "description": "to enquire about my services",
            "info": ["use enquire command to enquire about my services"]
        },
        {
            "title": "cheer",
            "description": "to appreciate my work",
            "info": ["use cheer command to appreciate my work"]
        },
        {
            "title": "repos",
            "description": "to see my github repositories",
            "info": ["use repos command to see my github repositories"]
        },
        {
            "title": "ipconfig",
            "description": "to see your IP details",
            "info": ["use ipconfig command to see your IP details"]
        },
        {
            "title": "github",
            "description": "to see my github stats",
            "info": ["use github command to see my github stats"]
        },
        {
            "title": "contributors",
            "description": "to see all the contributors",
            "info": ["use contributors command to see all the contributors"]
        },
        {
            "title": "download",
            "description": "to download my pdf resume",
            "info": ["use download command to download my pdf resume"]
        },
        {
            "title": "calc",
            "description": "to evaluate an expression, for eg: (2 + 3)",
            "info": ["use calc command to evaluate an expression","for eg: write 'calc 2+6*5/3'"]
        },
        {
            "title": "experience",
            "description": "to see my research and lab experience",
            "info": ["use experience command to see my work experience"]
        },
        {
            "title": "history",
            "description": "shows the last 10 valid commands performed, use --clear flag to clear the history",
            "info": ["use history command to show your last 10 commands history","use --clear flag to clear the history","use history {id} command to run command of that id in your history"]
        },
        {
            "title": "skills",
            "description": "to see my technical skillset",
            "info": ["use skills command to see my skills"]
        },
        {
            "title": "typing",
            "description": "shows typing animation status",
            "info": ["use typing command to see typing animation status","Turn typing animation on and off by adding -on or -off flags respectively","Also u can write a number(in ms) to set typing custom animation speed"]
        },
        {
            "title": "reset",
            "description": "to reload site",
            "info": ["use reset command to to reload site"]
        }
    ],
    "terminal": {
        "user": "$anshu",
        "host": "shell",
        "path": "~/root"
    },
    "blogs": [
        {
            "site": "Medium (Security Writeups)",
            "url": "https://medium.com"
        }
    ],
    "cheer": {
        "responseArray": [
            "Payload delivered successfully. Thanks! 🚀",
            "Access Granted. Appreciate the support! 🔐",
            "Root privilege obtained. Thank you! ⚡",
            "System stabilized. Great to hear from you! 💻"
        ]
    },
    "about": "⚡ Cybersecurity Researcher & Ethical Hacker specializing in penetration testing, vulnerability research, and security automation. Dedicated to finding flaws, analyzing exploits, and engineering secure scripts. Continuous learner mapping network attack vectors and managing private lab environments while staying current with advanced theoretical frameworks in computer science.",
    "social": [
        {
            "title": "Github",
            "link": "https://github.com/AnshumanSuryavanshi"
        },
        {
            "title": "Instagram",
            "link": "https://instagram.com"
        },
        {
            "title": "YouTube",
            "link": "https://youtube.com"
        },
        {
            "title": "TryHackMe",
            "link": "https://tryhackme.com",
            "rank": "Top 5%"
        }
    ],
    "projects": [
        {
            "title": "ShadowScan - Open Source Recon Tool",
            "link": "https://github.com/AnshumanSuryavanshi/ShadowScan",
            "description": "An automated internal network reconnaissance script engineered in Python and Bash. Seamlessly scans for active hosts, maps open ports, fingerprints services, and flags common outdated exploits to maximize network asset visibility."
        },
        {
            "title": "Vulnerability Disclosure & Bug Bounty",
            "link": "https://github.com/AnshumanSuryavanshi",
            "description": "Identified, analyzed, and safely documented critical flaws (including IDOR and XSS exposures) within sandbox environments and application logic as part of continuous independent research and ethical proof-of-concept testing."
        },
        {
            "title": "Custom Terminal Framework Integration",
            "link": "https://github.com/AnshumanSuryavanshi/Anshu-s-Shell",
            "description": "A fully functional, web-accessible interactive command-line interface portfolio developed utilizing HTML, CSS, and modular JavaScript configurations to mimic native Linux Bash terminal structures."
        },
        {
            "title": "SecurePass - Local Password Audit Tool",
            "link": "https://github.com/AnshumanSuryavanshi",
            "description": "A light-weight command-line cryptography script built to evaluate local password string strength, run entropy assessments, and test database hashes locally against common dictionary registries."
        }
    ],
    "contact": {
        "email": "anshuintheshell@domain.com"
    },
    "experience": [
        {
            "title": "Independent Security Researcher",
            "description": "▪️ Conducted modular application assessments, sandbox vulnerability scanning, and local environment log analysis to map security infrastructure vulnerabilities. \n ▪️ Automated standard reconnaissance workflows by chaining multi-tool scripts, improving raw detection efficiency metrics across target instances. \n ▪️ Actively engaged in Capture The Flag (CTF) environments focusing on network pivoting, cryptography structures, and reverse engineering challenges."
        }
    ],
    "skills": [
        {
            "title": "Offensive & Tactical Tech Skills:",
            "description": "Python, Bash Scripting, Linux System Administration, Git, Nmap, Burp Suite, Wireshark, Metasploit, Cryptography Fundamentals, Web Application Security Assessment"
        },
        {
            "title": "Core Foundations:",
            "description": "Vulnerability Documentation, Network Architecture Mapping, Problem Solving, Rapid Technical Adaptability, Systems Automation"
        }
    ],
    "neofetch": {
        "name": "Anshu In The Shell",
        "title": "Security Researcher",
        "skills": "Offensive Ops, Automation, PenTesting",
        "shell": "bash",
        "languages": "Python, Bash, HTML/CSS, JavaScript"
    },
}
export default config
