export function formatDecimalString(value: string) {
  const [integer, decimal] = value.split('.');

  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (!decimal) {
    return formattedInteger;
  }

  const trimmedDecimal = decimal.replace(/0+$/, '');
  if (!trimmedDecimal) {
    return formattedInteger;
  }

  return `${formattedInteger}.${trimmedDecimal}`;
}
