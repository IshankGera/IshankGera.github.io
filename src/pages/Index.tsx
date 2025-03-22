
import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, User, BookOpen, BriefcaseBusiness, Code, Award, Send, ExternalLink, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import TimelineItem from '@/components/TimelineItem';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import AchievementItem from '@/components/AchievementItem';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('ishankgera.work@gmail.com');
    toast({
      title: "Email copied to clipboard",
      description: "ishankgera.work@gmail.com",
    });
  };

  const skills = {
    languages: ['Python', 'C++','FastAPI', 'TypeScript', 'SQL', 'Node.js', '.NET', 'React.js'],
    tools: ['AWS', 'GitHub', 'Firebase', 'VS Code', 'Jupyter', 'Docker', 'PyAdmin', 'Linux', 'SSMS', 'Jenkins', 'Swagger']
  };

  const projects = [
    {
      title: 'AI Agent for Automated Social Media Posting',
      technologies: ['FastAPI', 'MySQL', 'LLMs', 'Beautiful Soup', 'Azure VM'],
      description: [
        'Developed an AI agent to automate social media posting about cloud service tech releases from GCP, AWS, and Azure.',
        'Integrated web scraping, RSS/Atom feed parsing, and LLMs like Azure OpenAI, GPT and DeepMind for content generation.',
        'Implemented OAuth/PKCE flow for enabling seamless social media integration using FastAPI, building a multi-platform posting workflow with user-selectable LLMs and post-types.',
        'Deployed the web app on Azure VM'
      ]
    },
    {
      title: 'TeamTrack (FastAPI, AWS, Docker, PostgreSQL, NextJS)',
      technologies: ['FastAPI', 'AWS', 'Docker', 'PostgreSQL', 'NextJS'],
      description: [
        'Designs and optimizes database schemas, ensuring efficient indexing, normalization, and query performance for scalable applications.',
        'Develops and secures backend APIs, implementing authentication, authorization, and encryption to safeguard sensitive data and user access.',
        'Multiple dashboards tailored for different roles such as admin, lead, and member, offering customised views and functionalities to enhance productivity and collaboration.'
      ]
    }
  ];

  const achievements = [
    'GATE 2024 (DATA SCIENCE AND ARTIFICIAL INTELLIGENCE) QUALIFIED.',
    'University Ranker from 3rd to 8th semester (Top 10).',
    'Techgig Code Gladiators 2023 finalist (Top 3k/300k).',
    '1st Position in inter college abstract writing (for research paper on Deep Learning) competition.',
    'State level Cricketer (Rewari).'
  ];

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-8 pt-24">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute inset-0 gradient-hero"></div>
          <div className="absolute top-1/3 -left-24 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-pink-900/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-radial from-purple-900/10 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-3xl mt-20">
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
            <div className="flex flex-col items-end">
              <div className="flex items-center">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-1 mr-3">Ishank Gera</h1>
                <div className="tag neo-morphism ml-1">Full Stack Engineer</div>
              </div>
              <div className="w-full flex justify-end">
                {/* <div className="tag text-xs mt-2">Full Stack Engineer</div> */}
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-in animate-delay-300 max-w-xl mx-auto">
            Full Stack Engineer at YEN Digital, passionate about Scalable Systems, Backend Development, Large Language Models (LLMs), and developing AI agents.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in animate-delay-500">
            <a 
              href="https://www.linkedin.com/in/ishank-gera-74a78a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-morphism p-3 rounded-full text-primary hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button 
              onClick={copyEmail}
              className="neo-morphism p-3 rounded-full text-primary hover:bg-white/10 transition-colors"
              aria-label="Copy Email"
            >
              <Mail className="h-5 w-5" />
            </button>
            <a 
              href="https://github.com/IshankGera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-morphism p-3 rounded-full text-primary hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in animate-delay-700">
            <a 
              href="https://www.geeksforgeeks.org/user/geraishank27/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full neo-morphism text-green-400 text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Code className="h-4 w-4" />
              <span>GeeksforGeeks</span>
            </a>
            <a 
              href="https://leetcode.com/u/Ishank_Gera27/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full neo-morphism text-amber-400 text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              <span>LeetCode</span>
            </a>
          </div>
          
          <button 
            onClick={() => scrollToNext('about')}
            className="neo-morphism p-3 rounded-full hover:bg-white/5 transition-colors animate-bounce mt-8"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Section 
        id="about" 
        title="About Me" 
        subtitle="Full Stack Engineer | Passionate about AI, LLMs, and Scalable Systems."
        className="gradient-hero"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="prose max-w-none">
              <p className="mb-4 text-lg">
                I am a Full Stack Engineer at YEN Digital Pvt. Ltd., passionate about Backend Development, AI, Large Language Models (LLMs), and developing AI agents. I specialize in building scalable, high-performance applications using FastAPI (Python), React, AWS, .NET and multiple Frameworks.
              </p>
              <p className="mb-4 text-lg">
                With hands-on experience in leading backend development for a customer project, I have worked on direct client handling, ensuring smooth communication and delivering tailored solutions. My expertise spans backend optimization, database designing, query optimization, and deploying robust applications using Docker and AWS EC2. On the frontend, I build dynamic and intuitive React-based user interfaces, ensuring seamless user experiences.
              </p>
              <p className="mb-4 text-lg">
                I have a strong foundation in SQL, SQLAlchemy, PostgreSQL, and NoSQL databases, enabling me to design efficient data models and optimize queries for maximum performance. Additionally, I focus on containerized deployments with Docker, ensuring scalability and reliability across cloud environments.
              </p>
              <p className="mb-4 text-lg">
                Beyond my professional role, I thrive on challenges and continuous learning. I qualified GATE 2024 (Data Science & AI), ranked in the Top 10 at my university, and was a finalist in Techgig Code Gladiators 2023 (Top 3K out of 300K participants). I also secured 1st place in an inter-college abstract writing competition for my research on Deep Learning. Outside of tech, my dedication extends to sports—I am a state-level cricketer (Rewari).
              </p>
              <p className="text-lg">
                I take pride in being a responsible, hardworking, and solution-oriented engineer, always striving to push boundaries and create impactful technology solutions. Whether it's building AI-powered applications, designing efficient databases, optimizing backend performance, handling clients, or refining architectures, I am always eager to take on new challenges and deliver excellence.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="neo-morphism rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Contact</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>Gurugram, Haryana, India</p>
                <p>+91 9416890160</p>
                <p className="break-all">ishankgera.work@gmail.com</p>
              </div>
            </div>
            
            <div className="neo-morphism rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Education</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>B.Tech in CSE (AI & ML)</p>
                <p>83% Aggregate</p>
              </div>
            </div>
            
            <div className="neo-morphism rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Experience</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Full Stack Engineer</p>
                <p>Data Science Intern</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section 
        id="education" 
        title="Education"
        subtitle="My academic journey and qualifications."
      >
        <div className="space-y-2">
          <TimelineItem
            title="DRONACHARYA COLLEGE OF ENGINEERING"
            subtitle="Bachelor of Technology, Computer Science & Engineering (AI & ML)"
            date="Percentage: 83%"
            location="Gurugram, Hr."
          >
            <p>University Ranker from 3rd to 8th Sem.</p>
          </TimelineItem>
          
          <TimelineItem
            title="JAIN PUBLIC SCHOOL"
            subtitle="Senior Secondary Education (XIIth)"
            date="Percentage: 92%"
            location="Rewari, Hr."
            isLast={true}
          />
        </div>
      </Section>
      
      <Section 
        id="experience" 
        title="Work Experience" 
        subtitle="My professional journey and roles."
        className="gradient-hero"
      >
        <div className="space-y-2">
          <TimelineItem
            title="YEN Digital Pvt. Ltd."
            subtitle="Full Stack Engineer"
            date="Jan, 2024 - Present"
            location="Gurugram, Hr."
          >
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Developed robust backend APIs using <span className="text-primary font-medium">FastAPI</span> framework of Python and ensured seamless integration between React frontend and backend.</li>
              <li>Used <span className="text-primary font-medium">Firebase Admin SDK</span> for secure user authentication. <span className="text-primary font-medium">Reduced cyclomatic complexity by up to ~200%</span>, lowered the code nodes, and wrote unit tests for better code coverage.</li>
              <li>Successfully deployed applications on <span className="text-primary font-medium">AWS EC2</span>, managed data storage on S3 using <span className="text-primary font-medium">AWS CLI</span>, and configured <span className="text-primary font-medium">Nginx</span> for efficient traffic management.</li>
              <li>Designed and implemented database schemas and ER diagrams, implemented <span className="text-primary font-medium">PostgreSQL</span> using <span className="text-primary font-medium">SQLAlchemy</span> for ORM and <span className="text-primary font-medium">Alembic</span> for migrations, and conducted static code analysis with <span className="text-primary font-medium">SonarQube</span> to maintain high code quality.</li>
              <li>Collaborated closely with the QA/QC team and a team of experienced developers on a joint project to upgrade the application from <span className="text-primary font-medium">.NET 3.0 to 6.0</span>. My responsibilities included developing features with compatible packages, optimizing time-consuming database queries by analyzing execution plans and query traces, tuning them for efficiency, and thoroughly testing improvements in the production environment.</li>
              <li>Currently working on deploying the project to <span className="text-primary font-medium">AWS EC2 using Docker and Jenkins CI/CD</span> pipeline.</li>
            </ul>
          </TimelineItem>
          
          <TimelineItem
            title="INNOMATICS RESEARCH LABS"
            subtitle="Data Science Intern"
            date="Feb, 2023 - May, 2023"
            location="Remote"
            isLast={true}
          >
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Developed and implemented machine learning models to solve real-world problems, performed in-depth <span className="text-primary font-medium">statistical analysis</span> to derive actionable insights, and utilized <span className="text-primary font-medium">data preprocessing</span> techniques to ensure high-quality datasets.</li>
              <li>Demonstrated proficiency in <span className="text-primary font-medium">data visualization</span> and <span className="text-primary font-medium">feature engineering</span> to enhance model performance.</li>
              <li>Built and deployed web applications using <span className="text-primary font-medium">Django</span>, integrating SQLAlchemy for database management and Jinja2 for templating. Designed responsive and user-friendly interfaces with <span className="text-primary font-medium">HTML and CSS</span>, showcasing a strong understanding of front-end development principles.</li>
            </ul>
          </TimelineItem>
        </div>
      </Section>
      
      <Section 
        id="skills" 
        title="Skills & Interests"
        subtitle="Technologies and tools I work with."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard 
            title="Languages & Frameworks" 
            skills={skills.languages} 
            className="neo-morphism hover-scale"
          />
          
          <SkillCard 
            title="Tools & Technologies" 
            skills={skills.tools} 
            className="neo-morphism hover-scale"
          />
        </div>
      </Section>
      
      <Section 
        id="projects" 
        title="Projects" 
        subtitle="A showcase of my work and technical expertise."
        className="gradient-hero"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              className="neo-morphism"
            />
          ))}
        </div>
      </Section>
      
      <Section 
        id="achievements" 
        title="Achievements" 
        subtitle="Recognition and accomplishments throughout my career."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} achievement={achievement} className="neo-morphism" />
          ))}
        </div>
      </Section>
      
      <Section 
        id="contact" 
        title="Get In Touch" 
        subtitle="Interested in working together? Feel free to contact me."
        className="gradient-hero"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-8 text-lg">
            I'm currently open to new opportunities. If you'd like to discuss a project or have any questions, don't hesitate to reach out.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/ishank-gera-74a78a244" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-morphism rounded-lg px-6 py-4 flex items-center justify-center gap-3 hover:shadow-lg transition-all hover-scale"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span>LinkedIn</span>
            </a>
            
            <button 
              onClick={copyEmail}
              className="neo-morphism rounded-lg px-6 py-4 flex items-center justify-center gap-3 hover:shadow-lg transition-all hover-scale overflow-hidden"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="truncate">ishankgera.work@gmail.com</span>
            </button>
            
            <a 
              href="https://github.com/IshankGera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-morphism rounded-lg px-6 py-4 flex items-center justify-center gap-3 hover:shadow-lg transition-all hover-scale"
            >
              <Github className="h-5 w-5 text-primary" />
              <span>GitHub</span>
            </a>
          </div>
          
          <Button
            onClick={copyEmail}
            size="lg"
            className="group gradient-button"
          >
            Contact Me 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Section>
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Ishank Gera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
