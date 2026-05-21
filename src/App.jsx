import profileImg from "./assets/fotor_1765118951470.jpg";
export default function StudentPortfolio() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Tensor",
    "Git & GitHub",
    "PyTorch",
  ];

  const projects = [
    {
      title: "Archaeological site mapping system",
      description:
        "A smart archaeological site mapping system for digitally managing and analyzing historical sites.",
      tech: "Python, Streamlit, YOLOv8/YOLOv11, PyTorch, OpenCV, NumPy, Pandas, Plotly, and Deep Learning.",
      image: "/projects/Screenshot 2026-05-21 192622.png",
      github:
    "https://github.com/raghuvarun2005-cloud/AI-Driven-Archaeological-Site-Mapping",

  demo:
    "https://drive.google.com/file/d/1n0x8-8zcFhoHXQdFFRZwsWvf_T1qKvdS/view?usp=sharing"
    },
    {
      title: "Student Management System",
      description:
        "A system to manage student records with login authentication.",
      tech: "Python, MySQL",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application using live weather APIs.",
      tech: "JavaScript, API",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Jinka Raghu Varun</h1>

          <div className="space-x-6 hidden md:flex text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div>
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Student Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="text-cyan-400">Jinka Raghu Varun</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Computer Science student passionate about Frontend Development, AI/ML, and building modern web applications.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
  href="/Raghu_Varun_Jinka_Resume.pdf"
  download
  className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition inline-block"
>
  Download Resume
</a>

            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
  src={profileImg}
  alt="fotor_1765118951470"
  className="rounded-3xl shadow-2xl border border-gray-800"
/>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">
              About Me
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              I am a passionate and self-motivated student with strong knowledge of HTML, CSS, JavaScript, and Python. I enjoy building modern, responsive, and user-friendly web applications while continuously improving my technical and problem-solving skills.
            </p>
            <p className="text-gray-400 leading-8 text-lg">
              I have a strong interest in frontend development, software engineering, and emerging technologies like Artificial Intelligence and Machine Learning. Along with programming, I enjoy solving logical reasoning and quantitative aptitude problems, which help strengthen my analytical thinking.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                <h3 className="text-cyan-400 text-2xl font-bold">4</h3>
                <p className="text-gray-400 mt-2">Projects Completed</p>
              </div>

              <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                <h3 className="text-cyan-400 text-2xl font-bold">5+</h3>
                <p className="text-gray-400 mt-2">Technologies Learned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            Projects
          </h2>
          <p className="text-gray-400">
            Some of my featured projects and works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden hover:border-cyan-400 transition duration-300 shadow-xl"
            >
              <img
  src={project.image}
  alt={project.title}
  className="w-full h-52 object-cover"
/>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 leading-7 mb-4">
                  {project.description}
                </p>

                <span className="text-cyan-400 text-sm">
                  {project.tech}
                </span>

                <div className="mt-6 flex gap-4">
                  <a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition inline-block"
>
  Live Demo
</a>

                  <a
  href="https://github.com/raghuvarun2005-cloud/AI-Driven-Archaeological-Site-Mapping"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition inline-block"
>
  GitHub
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
            Education
          </h2>

          <div className="bg-black border border-gray-800 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold">
              Bachelor of Technology - Computer Science
            </h3>

            <p className="text-gray-400 mt-3 text-lg">
              Gitam Deemed to be University
            </p>

            <p className="text-gray-500 mt-2">2023 - 2027</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400">
            Feel free to connect with me for opportunities or collaborations.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 shadow-xl">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Raghu Varun. All Rights Reserved.
      </footer>
    </div>
  );
}
