function overrideDirectorates (directorates) {
  directorates.forEach(directorate => {
    if (directorate.slug === 'cheetahs-and-leopards') {
      directorate.name = 'Cheetahs & Leopards'
    }
  })
  return directorates
}

module.exports = overrideDirectorates
