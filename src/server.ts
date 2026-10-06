function welcome(name: string) {
  console.log('hello')
  console.log('welcome to the coding world')

  const user = {
    name: 'Jayesh',
  }
  const fname = user.name
  return name + fname
}
welcome('Jayesh')
