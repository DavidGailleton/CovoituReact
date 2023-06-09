export type logIn = {
  username: string;
  password: string;
};

export const logins: logIn[] = await fetch('http://localhost:3000/users').then(function (response) {
  return response.json;
});

export const users: logIn[] = [
  { username: 'testuser', password: 'azerty' },
  { username: 'testuser2', password: 'qwerty' },
];

export const checkLogin(username, password): boolean  => {
  if (logins === users) {
    return true;
  }
}
