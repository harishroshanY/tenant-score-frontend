import defaultUsers from "../data/users";

const USERS_KEY = "ts_users";
const AUTH_KEY = "ts_auth"; // stores { userId }

function seedUsersIfNeeded() {
  if (!localStorage.getItem(USERS_KEY)) {
    const seeded = defaultUsers.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: (u.role || "tenant").toLowerCase(),
      status: u.status || "Active",
      // default password for seeded users (CHANGE in prod)
      password: "password",
    }));
    localStorage.setItem(USERS_KEY, JSON.stringify(seeded));
  }
}

export function getAllUsers() {
  seedUsersIfNeeded();
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register({ name, email, password, role = "tenant" }) {
  seedUsersIfNeeded();
  const users = getAllUsers();
  const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    throw new Error("Email already in use");
  }
  const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = {
    id,
    name,
    email,
    password,
    role: (role || "tenant").toLowerCase(),
    status: "Active",
  };
  users.push(newUser);
  saveUsers(users);
  // auto-login after register
  localStorage.setItem(AUTH_KEY, JSON.stringify({ userId: id }));
  localStorage.setItem("role", newUser.role);
  return newUser;
}

export function login(email, password) {
  seedUsersIfNeeded();
  const users = getAllUsers();
  const user = users.find((u) => u.email.toLowerCase() === (email || "").toLowerCase());
  if (!user) {
    throw new Error("User not found");
  }
  if (user.password !== password) {
    throw new Error("Invalid credentials");
  }
  localStorage.setItem(AUTH_KEY, JSON.stringify({ userId: user.id }));
  localStorage.setItem("role", user.role);
  return user;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem("role");
}

export function isAuth() {
  return !!localStorage.getItem(AUTH_KEY);
}

export function getCurrentUser() {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try {
    const { userId } = JSON.parse(raw);
    const users = getAllUsers();
    return users.find((u) => u.id === userId) || null;
  } catch (e) {
    return null;
  }
}

export function getRole() {
  const user = getCurrentUser();
  if (user) return user.role || null;
  return localStorage.getItem("role") || null;
}

const VALID_ROLES = ["tenant", "landlord", "admin"];
export function switchRole(newRole) {
  if (isAuth() && VALID_ROLES.includes(newRole)) {
    localStorage.setItem("role", newRole);
    return true;
  }
  return false;
}

export function updateUser(updated) {
  const users = getAllUsers();
  const idx = users.findIndex((u) => u.id === updated.id);
  if (idx === -1) throw new Error("User not found");
  users[idx] = { ...users[idx], ...updated };
  saveUsers(users);
  return users[idx];
}
