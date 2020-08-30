const introduce = {
  name: 'PER JULIAN HEDÉN',
  image: 'me',
  jobTitle: 'Associate Developer, M.Sc',
  workPlace: 'Digital Edge',
  location: 'Stockholm, SE',
  summary: `I am a driven developer, who is curious about most IT
  related things, loves new technology and currently focused on AI.`
}

const experiences = [
  {
    workAt: 'Eduro',
    position: 'Programmer',
    duration: 'date_start – date_end',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.'
  },
  {
    workAt: 'Ericsson',
    position: 'Researcher',
    duration: 'date_start – date_end',
    description: 'Responsibilities included: performing a variety of engineering work in designing, constructing, and testing aircraft, missiles, and spacecraft.'
  }
]

const educations = [
  {
    educatedAt: 'Royale Institue of Technology',
    title: 'Computer Science - Master',
    duration: 'date_start – date_end',
    description: 'CS description'
  },
  {
    educatedAt: 'Royale Institue of Technology',
    title: 'Simulation Technique and Virtual Design - Bachelor',
    duration: 'date_start – date_end',
    description: 'SIMTEK description'
  },
  {
    educatedAt: 'National Taiwan University',
    title: 'Computer Science',
    duration: 'Exchange Semester',
    description: 'CS description'
  }
]

const contactData = {
  github: 'https://github.com/pjheden',
  linkedin: 'https://www.linkedin.com/in/julian-heden',
  email: 'julianheden@gmail.com',
  mailto: 'mailto:julianheden@gmail.com'
}

// TMP Unusued
const skills = [
  { name: 'Javascript' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Vue.js' },
  { name: 'Angular' },
  { name: 'Deep Learning' },
  { name: 'git' }
]

export default {
  introduce: introduce,
  experiences: experiences,
  educations: educations,
  skills: skills,
  contactData: contactData
}
