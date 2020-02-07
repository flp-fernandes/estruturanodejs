module.exports = validateCPF = CPF => {
  if (!CPF) {
    return false;
  } else {
    let calc;
    let rest;
    let i;
    let CPF = CPF.replace(/[^\d]+/g, "");
    calc = 0;
    if (CPF === "00000000000") {
      return false;
    }
    for (i = 1; i <= 9; i++)
      calc = calc + parseInt(CPF.substring(i - 1, i)) * (11 - i);
    rest = (calc * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(CPF.substring(9, 10))) {
      return false;
    }
    calc = 0;
    for (i = 1; i <= 10; i++)
      calc = calc + parseInt(CPF.substring(i - 1, i)) * (12 - i);
    rest = (calc * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(CPF.substring(10, 11))) {
      return false;
    }
    return true;
  }
};
