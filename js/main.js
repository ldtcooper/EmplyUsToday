document.addEventListener("DOMContentLoaded",() => {
  console.log("DOCUMENT READY", engineers);
  const engineersContainer = document.getElementById('engineers')
  Object.keys(engineers).forEach(key => {
    const engineer = engineers[key]
    const listItem = document.createElement('li')
    listItem.id = key
    listItem.appendChild(createHeader(engineer.fullName))
    listItem.appendChild(createGithubLink(engineer.github))
    listItem.appendChild(createLinkedinLink(engineer.linkedin))
    listItem.appendChild(createLink(engineer.portfolio, 'Portfolio'))
    listItem.appendChild(createImage(engineer.imageUrl, engineer.fullName, engineer.fullName))
    engineersContainer.appendChild(listItem)
  })
})

const engineers = {
  harsh: {
    fullName: 'Harsh Kumar',
    github: 'hkumar1993',
    linkedin: 'hkumar1993',
    portfolio: 'http://www.hkumar.me',
    imageUrl: '#',
    skills: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'jQuery',
      'React',
      'Redux',
      'C++',
      'C',
      'React Native',
      'Angular',
      'Sass',
      'Node',
      'MongoDB',
      'GraphQL',
      'Apollo',
    ]
  },
  tyler: {
    fullName: 'Tyler Wood',
    github: 'woodentyler',
    linkedin: 'woodentyler',
    portfolio: 'http://woodentyler.com',
    imageUrl: '#'
  },
  logan: {
    fullName: 'Logan Cooper',
    github: 'ldtcooper',
    linkedin: 'ldtcooper',
    portfolio: 'http://logan-cooper.com',
    imageUrl: '#',
    skills: [
      'Ruby',
      'Ruby on Rails',
      'JavaScript',
      'jQuery',
      'React',
      'Redux',
      'D3',
      'Python',
      'HTML5',
      'CSS3',
      'SCSS',
      'SQL',
      'PostgreSQL'
    ]
  }
}

// source for backwards compatible image creation:
// https://stackoverflow.com/questions/226847/what-is-the-best-javascript-code-to-create-an-img-element

const createImage = (src, alt, title) => {
    const img = document.createElement('img')
    if (src != null ) img.src = src
    if ( alt != null ) img.alt = `Image of ${alt}`
    if ( title != null ) img.title = title
    return img
}

const createLink = (link, title) => {
  const a = document.createElement('a')
  a.href = 'link'
  a.innerHTML = title
  return a
}

const createGithubLink = (link) => {
  return createLink(`https://www.github.com/${link}`, 'Github')
}

const createLinkedinLink = (link) => {
  return createLink(`https://www.linkedin.com/in/${link}`, 'LinkedIn')
}

const createHeader = (name) => {
  const heading = document.createElement('h1')
  heading.innerHTML = name
  return heading
}
