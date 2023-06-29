class Formatter {
  //add static methods here
  static capitalize(string) {
    const result = string.charAt(0).toUpperCase() + string.slice(1);
    return result;
  }
  static sanitize(string) {
    const result = string.replace(/[^a-zA-Z0-9-' ]/g, '');
    return result;
  }
  static titleize (string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const words = string.split(" ");
    const capitalizedWords = words.map(function(word) {
      
      if (!exceptions.includes(word.toLowerCase()) || word === words[0]) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word.toLowerCase();
      }
    });
    return capitalizedWords.join(" ");
  }
}
console.log(Formatter.titleize("a tale of two cities"));