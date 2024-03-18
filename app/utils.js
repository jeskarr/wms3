export function checkTextValidity(txt) {
  return txt && /[a-zA-Z0-9]+$/.test(txt);
}

export function checkNumberValidity(n) {
  return n && /^\d*\.?\d{0,2}$/.test(n);
}