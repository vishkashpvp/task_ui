let usermail = document.getElementById("usermail");
let password = document.getElementById("password");
const minusOne = -1;

usermail.value = "2@RIL.Com";
password.value = "123456";

/**
 * send to home route if successful
 */
login = () => {
  user = getUserDetails(usermail.value, password.value);
  if (!user) return;
  localStorageSetItem("currentUser", JSON.stringify(user));
  localStorageSetItem("isSignedIn", true);
  window.location.href = "home.html";
};

/**
 * @param mail
 * @param password
 * @returns user object or else undefined
 */
getUserDetails = (mail, password) => {
  users = localStorageGetItem("users");

  if (!users) {
    console.log("No data available");
    window.alert("No data available");
    return;
  }

  users = JSON.parse(users);

  user = users.find((user) => {
    return user.mail == mail && user.password == password;
  });

  if (!user) {
    console.log("User doesn't exists");
    window.alert("User doesn't exists");
    return;
  }
  return user;
};

/**
 * @param key
 * @param value
 * sets value in local storage with provided key
 */
localStorageSetItem = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * @param key
 * @returns value of local storage item with the key
 */
localStorageGetItem = (key) => {
  return localStorage.getItem(key);
};
