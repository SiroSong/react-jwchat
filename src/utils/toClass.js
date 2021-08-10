export function cns(classes = []) {
  return classes.reduce((finalClasses, cls) => {
    if (cls) {
      return finalClasses + ' ' + cls
    } else {
      return finalClasses
    }
  }, '')
}
