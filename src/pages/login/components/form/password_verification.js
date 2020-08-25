export function passwordVerification(password, setIsPasswordCorrect) {
  let mistake = [];
  if (password.length < 8) {
    mistake.push('- Пароль должен состоять не менее чем из 8 символов');
  }
  if (!/(?=.*[0-9])/.test(password)) {
    mistake.push('- Пароль должен содержать хотя бы одну цифру');
  }
  if (!/(?=.*[a-z])/.test(password)) {
    mistake.push(
      '- Пароль должен содержать хотя бы одну латинскую букву в нижнем регистре'
    );
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    mistake.push(
      '- Пароль должен содержать хотя бы одну латинскую букву в верхнем регистре'
    );
  }
  if (!mistake.length) {
    setIsPasswordCorrect(true);
  }
  return mistake;
}
