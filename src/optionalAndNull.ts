// OPTIONAL AND NULL
{
  const add = (a: number, b?: number) => (b ? a + b : a);
  console.log(add(10, 3));

  const addNonNull = (a: number, b?: number) => a + b!;
  console.log(addNonNull(10));
}
