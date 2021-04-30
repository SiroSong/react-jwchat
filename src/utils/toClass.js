export function toClasses(classes = []) {
  return classes.reduce((finalClasses, cls) => {
    return finalClasses + ' ' + cls
  }, '')
}
