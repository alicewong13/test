const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alice Wong',
  role: '',
  description:
    "I'm an aspiring UX designer currently studying cognitive science at UCLA.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    number: 1,
    name: 'Spotify Desktop Redesign',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  },
  {
    number: 2,
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  },
  {
    number: 3,
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, contact }
