function welcome(name: string) {
  console.log('hello')
  console.log('welcome')

  const user = {
    name: 'Jayesh',
  }
  const fname = user.name
  return name + fname
}
welcome('Jayesh')
