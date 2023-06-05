type logIn = {
  name: string;
  password: string;
};

export const logins: logIn[] = await fetch('http://localhost:3000/users').then(function (response) {
  return response.json;
});
