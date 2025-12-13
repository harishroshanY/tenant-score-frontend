// Valid roles in the system
const VALID_ROLES = ["tenant", "landlord", "admin"];

// Login with a specific role
export const login = (role) => {
  if (!VALID_ROLES.includes(role)) {
    console.warn(`Invalid role: ${role}. Using 'tenant' as default.`);
    role = "tenant";
  }
  localStorage.setItem("auth", "true");
  localStorage.setItem("role", role);
};

// Logout and clear auth state
export const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("role");
};

// Check if user is authenticated
export const isAuth = () => {
  return localStorage.getItem("auth") === "true";
};

// Get the current user's role
export const getRole = () => {
  return localStorage.getItem("role") || null;
};

// Switch role (for testing)
export const switchRole = (newRole) => {
  if (isAuth() && VALID_ROLES.includes(newRole)) {
    localStorage.setItem("role", newRole);
    return true;
  }
  return false;
};
