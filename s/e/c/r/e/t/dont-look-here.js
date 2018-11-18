// Don't just check what the password is! It's not fun that way!
// There IS another way to discover what the password is.














































function login() {
  password = prompt ("אנא הזן סיסמה.");
  if (password == ".") {
    alert (".סיסמה נכונה. ברוך הבא, אילון");
  } else {
    alert (".סיסמה שגויה. אנא מחק את הזיכרון שלך כדי שתשכח שהאתר הזה קיים. תודה");
    window.location = "../../../../../../treasure-hunt.html";
  }
}
