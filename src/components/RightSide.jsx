import avatar from "../assets/avatar.png"
import './css/right-side.scss'
import {Education} from "./Education"
import {CustomList} from "./CustomList"
import {SectionCounter} from "./SectionCounter"

export const RightSide = function () {
  const skills = [
    {
      name: 'HTML',
      level: 8
    },
    {
      name: 'CSS',
      level: 7
    },
    {
      name: 'Django/Python',
      level: 9
    },
    {
      name: 'Rust',
      level: 6
    }
  ]
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const additional = [
    'Agile',
    'English B2',
    'Linux',
    'Analytical Thinking',
    'Ansible',
    'Rest-Framework',
    'Postman',
    'Unit-testing',
  ]
  const education = [
    `Bacalaureat diploma: Mathematics and Informatics, Zinca Golescu, 2018, Pitesti`,
    `Bachelor degree: Microelectronics, Faculty of Electronics, Telecommunications and Information Technology, Present, Bucharest`,
    `Certifications: Python Fundamentals, Python Professional, Telecom Academy, Bucharest`,
  ]
  const hobbies = [
    'Programming',
    'Football',
    'Gym',
    'Mountain trips',
    'Cycling',
  ]

  return (
    <section id="right-side">
      <figure id='avatar'>
        <img src={avatar} alt=""/>
      </figure>
      <h1>
        Nicolae
        <br/>
        <b>Vlad</b>
      </h1>
      <span>
            Backend Developer
          </span>

      <article id="skills">
        <div className='skills text-block'>
          <SectionCounter count='01' />
          <h2>SKILLS</h2>
          <h3>Programming languages</h3>
          <ul id="programming-languages">
            {
              skills.map(function (obj) {
                return (
                  <li key={obj.name}>
                    <span>{obj.name}</span>
                    <ul className="dots-wrapper">
                      {
                        levels.map(value => (
                          <li key={value} className={value < obj.level ? 'selected-dot-skill' : ''}/>
                        ))
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ul>

          <h3>Additional Skills</h3>
          <CustomList data={additional} />
        </div>

        <div className='education text-block'>
          <SectionCounter count='02' />
          <h2>EDUCATION</h2>
          {
            education.map(text => (
              <Education key={text} text={text} />
            ))
          }
        </div>

        <div className='text-block'>
          <SectionCounter count='03' />
          <h2>HOBBIES</h2>
          <CustomList data={hobbies} />
        </div>
      </article>
    </section>
  )
}
