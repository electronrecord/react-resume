import {WorkExperience} from "./WorkExperience"

export const LeftSide = function () {
  const jobs = [
    {
      title: 'Backend Developer',
      period: '10/2021 to Present, MGE Software, Pitesti, Arges, Romania',
      details: 'Backend for various projects using Django, Rest-Framework, MySQL, PostgresSQL, Nginx, Ansible , Celery, Git, Postman and Docker. I’m used to an agile type of work.',
      keywords: 'Python, Django, Rest-Framework, MySQL, PostgresSQL, Nginx , Ansible, Celery, Docker, GraphQL'
    },
    {
      title: 'PHP DEVELOPER',
      period: '04/2021-07.2021, RoWeb Development, Pitesti, Arges, Romania',
      details: 'I had to create a management system with Laravel and a RESTful API with React for frontend and Lumen for backend.',
      keywords: 'PHP, Laravel, React, HTML, CSS'
    }
  ]

  return (
    <section id="left-side">
      <p>
        Call <a href="tel:0753100656">0777777777</a> or
        <br/>
        Email <a href="mailto:nicolaevlad7@gmail.com">demo@demo.ro</a>
      </p>

      <article>
        <h2>ABOUT ME</h2>
        <p>
          I’m a final year student with a passion for IT , and I consider myself as being a “fast learner”. I have experience with backend development and I’m ready for new challenges.
        </p>
      </article>

      <article>
        <h2>WORK EXPERIENCE</h2>
        {
          jobs.map(job => (
            <WorkExperience key={job.title} data={job} />
          ))
        }
      </article>

      <article>
        <h2>PERSONAL PROJECTS</h2>
        <p>
          07/2021 to Present
          <br/><br/>
          I built an e-commerce website using React and Firebase, I used features like Redux for state management, context API and hooks. Other projects I worked on are an e-commerce, a blog, a social site with Django and one little project with Rest-Framework.
        </p>
      </article>

      <span>* * *</span>
    </section>
  )
}
