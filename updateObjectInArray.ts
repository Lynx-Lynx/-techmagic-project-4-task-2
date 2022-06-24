interface ICat {
  name: string;
  breed: string;
  color: string;
}

const cats:ICat[] = [
  {
    name: 'Fluffy',
    breed: 'Persian',
    color: 'white'
  },
  {
    name: 'Gatito',
    breed: 'long-haired cat',
    color: 'tabby'
  },
  {
    name: 'Max',
    breed: 'Maine Coon',
    color: 'black'
  }
]

function updateObjectInArray(initialArray:ICat[], key: keyof ICat, value: string, patch:Partial<ICat>): ICat[] {
  const newArray = [...initialArray];
  const index = newArray.findIndex(obj => obj[key] === value);

  if (index !== -1) {
    newArray[index] = {...newArray[index], ...patch};
  } else {
    console.log("object with such key-value pair doesn't exist");
    return newArray;
  }

  console.log(newArray);
  return newArray;
}

updateObjectInArray(cats, 'name', 'Gatito', { color: 'grey' })