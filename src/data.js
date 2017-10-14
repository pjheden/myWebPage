const introduce = {
  name: 'PER JULIAN HEDÉN',
  image: 'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUMAAAAJDZiNjJjN2I0LTM1N2QtNGQxNS04NTdjLTkzNGMwMzAyMzg0OA.jpg',
  jobTitle: 'Computer Science student, Full-Stack Developer',
  workPlace: 'Royale Institute of Technology, KTH',
  location: 'Stockholm, SE',
  summary: 'This is a summary of my personal strengths followed by what I am seeking, 1-2 lines.'
}

// TMP Unusued

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

// TMP Unusued

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
    duration: 'Exchange Semester'
  }
]

const projects = [
  {
    title: 'Last Ship Standing',
    meta: 'Propulsion Engineer',
    description: 'A js game',
    url: 'https://people.kth.se/~pjheden/LastShipStanding/index.html',
    image: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
  },
  {
    title: 'Engineer Your Future',
    description: 'A education tool for deciding your future',
    url: 'https://people.kth.se/~pjheden/engineer-your-future/index.html',
    image: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'

  },
  {
    title: 'White Men Came',
    description: 'Mobile Android Game',
    url: 'https://play.google.com/store/apps/details?id=com.JuliansCompany.JuliansGame',
    image: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'

  },
  {
    title: 'Kiwi swiper',
    meta: 'Propulsion Engineer',
    description: 'A Nerual Network based classifier',
    image: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'

  },
  {
    title: 'Checkers AI',
    meta: 'Propulsion Engineer',
    description: 'An AI that is an expert in checkers',
    image: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'

  }
]

const contactData = {
  github: 'https://github.com/pjheden',
  linkedin: 'https://www.linkedin.com/in/julian-hed%C3%A9n-b7b2ba110/',
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
  projects: projects,
  skills: skills,
  contactData: contactData
}
