document.addEventListener("DOMContentLoaded",() => {
  console.log("DOCUMENT READY", engineers);
  const engineersContainer = document.getElementById('engineers')

  totalEngineers = Object.keys(engineers).length
  const engineersCounter = document.getElementById('counter')
  engineersCounter.innerHTML = totalEngineers

  Object.keys(engineers).forEach(key => {
    const engineer = engineers[key]
    const listItem = document.createElement('li')
    listItem.id = key
    listItem.className = 'engineer'
    listItem.appendChild(createImage(engineer.github, engineer.fullName, engineer.fullName))
    listItem.appendChild(createHeader(engineer.fullName))
    listItem.appendChild(createGithubLink(engineer.github))
    listItem.appendChild(createLinkedinLink(engineer.linkedin))
    listItem.appendChild(createLink(engineer.portfolio, 'Portfolio'))
    listItem.addEventListener('click', e => toggleFull(e))
    engineersContainer.appendChild(listItem)
  })


})

const engineers = {
  harsh: {
    fullName: 'Harsh Kumar',
    github: 'hkumar1993',
    linkedin: 'hkumar1993',
    portfolio: 'http://www.hkumar.me',
    imageUrl: 'images/harsh.jpg',
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
    const imgContainer = document.createElement('div')
    imgContainer.className = 'profilePicture'
    const img = document.createElement('img')
    if (src != null ) img.src = `https://avatars.githubusercontent.com/${src}`
    if ( alt != null ) img.alt = `Image of ${alt}`
    if ( title != null ) img.title = title
    imgContainer.appendChild(img)
    return imgContainer
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

const toggleFull = (e) => {
  const engineers = Array.from(document.getElementsByClassName('engineer full'))
  console.log(engineers);
  engineers.forEach(engineer => engineer.className = 'engineer')
  if(e.target.localName === 'img'){
    e.target.parentElement.parentElement.className = 'engineer full'
  } else if (e.target.localName === 'li'){
    e.target.className = 'engineer full'
  }
}
