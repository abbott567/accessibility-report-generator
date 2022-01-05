function percent (part) {
  this.part = part
  return {
    of: (total) => {
      let calculation = Math.round((part / total) * 100)
      if (!isFinite(calculation) || isNaN(calculation) || calculation < 0) calculation = 0
      return calculation
    }
  }
}

module.exports = percent
