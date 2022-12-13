const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado}
    - ${skills[index]}`; // reatribui e adiciona a skill atual à variável resultado
  }
  return resultado;
};
console.log(minhasSkills(substituaX('Bebeto')));