function welcome(name: string) {
  console.log('hello')

  const user = {
    name: 'Jayesh',
  }
  const fname = user.name
  return name + fname
}
welcome('Jayesh')
