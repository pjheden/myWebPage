const introduce = {
  name: 'PER JULIAN HEDÉN',
  image: 'me',
  jobTitle: 'Developer, CS student',
  workPlace: 'Royale Institute of Technology, KTH',
  location: 'Stockholm, SE',
  summary: `I am a driven developer in the making, who is curious about most IT
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

const projects = [
  {
    title: 'Last Ship Standing',
    description: `Challenge your friends and declare the captain of the
    blue seas!`,
    url: 'https://people.kth.se/~pjheden/LastShipStanding/index.html',
    image: 'lastshipstanding'
  },
  {
    title: 'Engineer Your Future',
    description: `Engineer Your Future enables students at
                  KTH to explore educations and their opportunities.`,
    url: 'https://people.kth.se/~pjheden/engineer-your-future/index.html',
    image: 'engineer'
  },
  {
    title: 'White Men Came',
    description: `They came with guns and horses to take the holy lands
                  from the indians. Big Eagle was their last hope.`,
    url: 'https://play.google.com/store/apps/details?id=com.JuliansCompany.JuliansGame',
    image: 'whitemencame'
  },
  {
    title: 'Twitch Fixer',
    description: `Chrome extension that alters the twitch
     experience to your preference.`,
    url: 'https://chrome.google.com/webstore/detail/twitch-fixer/ankgggjggmhohjheacjljklghjiafcab',
    image: 'twitchfixer'
  },
  {
    title: 'Automatic Watering System 2.0',
    description: `Connecting a humidity sensor and a submerged pump to a
    Raspberry Pi to automatically water my plants upon need.`,
    url: 'https://www.julianheden.se/automatic_watering',
    image: 'plant'
  },
  {
    title: 'Dark Chess',
    description: 'Play chess in the dark, with imperfect information',
    url: '',
    image: 'todo'
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
  projects: projects,
  skills: skills,
  contactData: contactData
}
