const fnStats = (rest) => {
    const stats = {
      'Total': rest.length,
      'Unique': new Set(rest.map((element) => element.href)).size,
    }
    return stats
  }
  
  const fnBroken = (rest) => {
    const broken = rest.filter((link) => link.ok === 'Fail').length;
    const total = {
      'Total': rest.length,
      'Unique': new Set(rest.map((element) => element.href)).size,
      'Broken': broken
    }
    return total
  }
  
  module.exports = {
    fnBroken, fnStats
  }
  