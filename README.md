# 🏠 TenantScore Frontend

A comprehensive React + Vite + Tailwind CSS frontend application for property management, tenant scoring, and short-stay bookings.

**GitHub:** https://github.com/harishroshanY/tenant-score-frontend

---

## 🎯 Features

✅ **Role-Based Access Control** - Tenant, Landlord, Admin dashboards  
✅ **Property Management** - View, add, and manage properties  
✅ **Tenant Scoring** - Real-time tenant score tracking  
✅ **Bookings & Transactions** - Track all bookings and payments  
✅ **Wallet System** - Tenant wallet management  
✅ **Public Pages** - Home, property listings (no login required)  
✅ **Responsive Design** - Mobile-friendly UI with Tailwind CSS  

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Shavirajput/tenant-score-frontend.git
cd tenant-score-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 🔐 Test Credentials & How to Login

### **Login Instructions:**
1. Go to http://localhost:5173/login
2. Select your role from the **"Login as:"** dropdown
3. Enter any email (demo mode - no validation)
4. Enter any password (demo mode - no validation)
5. Click **"Login"**
6. You'll be redirected to your dashboard

### **Available Test Users:**

#### 👤 **TENANT**
```
Email: tenant@example.com (or any email)
Password: password123 (or any password)
Role: tenant
```
**Dashboard:** `/tenant` - See wallet, bookings, score, profile

#### 🏢 **LANDLORD**
```
Email: landlord@example.com (or any email)
Password: password123 (or any password)
Role: landlord
```
**Dashboard:** `/landlord` - Manage properties, bookings, earnings

#### 👨‍💼 **ADMIN**
```
Email: admin@example.com (or any email)
Password: password123 (or any password)
Role: admin
```
**Dashboard:** `/admin` - System-wide management, score control

---

## 📍 All Routes & Pages

### 🌐 Public Routes (NO LOGIN REQUIRED ✅)
- `/` - Home page
- `/login` - Login with role selection
- `/signup` - Sign up page
- `/properties` - Browse all properties
- `/properties/:id` - View property details
- `/short-stay` - Short-stay bookings

### 🔒 Tenant Routes (LOGIN as TENANT required)
- `/tenant` - Dashboard
- `/tenant/wallet` - Wallet & balance
- `/tenant/bookings` - My bookings
- `/tenant/score` - Tenant score
- `/tenant/profile` - Profile

### 🏢 Landlord Routes (LOGIN as LANDLORD required)
- `/landlord` - Dashboard
- `/landlord/properties` - My properties
- `/landlord/properties/add` - Add property
- `/landlord/bookings` - Property bookings
- `/landlord/earnings` - Earnings
- `/landlord/tenants` - Manage tenants

### 👨‍💼 Admin Routes (LOGIN as ADMIN required)
- `/admin` - Dashboard
- `/admin/properties` - All properties
- `/admin/transactions` - Transactions
- `/admin/users` - User management
- `/admin/score-control` - Score control

---

## 🧪 Quick Testing Guide

### Test 1: Home Page (No Login)
```
1. npm run dev
2. Open http://localhost:5173/
3. ✅ See "Welcome to TenantScore"
```

### Test 2: Login as Tenant
```
1. Click "Login" on home page
2. Select "Tenant" from dropdown
3. Click "Login" (any email/password works)
4. ✅ Land on /tenant dashboard
5. ✅ Sidebar shows: Dashboard, Wallet, Bookings, Score, Profile
```

### Test 3: Login as Landlord
```
1. Go to /login
2. Select "Landlord"
3. Click "Login"
4. ✅ Land on /landlord dashboard
5. ✅ Sidebar shows landlord menu
```

### Test 4: Login as Admin
```
1. Go to /login
2. Select "Admin"
3. Click "Login"
4. ✅ Land on /admin dashboard
5. ✅ Sidebar shows admin menu
```

### Test 5: Switch Roles (While Logged In)
```
1. Login as any role
2. See role dropdown in header (next to "Welcome, [Role]")
3. Select different role
4. ✅ Dashboard updates instantly
```

### Test 6: Logout & Re-login
```
1. Login as tenant
2. Click "Logout" (red button in header)
3. ✅ Redirected to /login
4. Select different role and login
5. ✅ New dashboard loads
```

### Test 7: Role-Based Access Control
```
1. Login as tenant
2. Try /admin URL
3. ✅ Redirected to home (access denied)
4. Login as admin instead
5. ✅ /admin loads successfully
```

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **JavaScript (ES6+)** - Language
- **localStorage** - Authentication

---

## 📂 Project Structure

```
src/
├── components/        # Reusable components
├── data/             # Mock data
├── layouts/          # Layout components
├── pages/            # Page components
├── utils/            # Auth & utilities
├── App.jsx           # Main routing
└── index.css         # Tailwind CSS
```

---

## ⚙️ Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

---

## 🐛 Troubleshooting

### Blank white screen?
```javascript
// Clear localStorage
localStorage.clear()
// Refresh page
```

### Styles not loading?
- Make sure `import "./index.css"` is in main.jsx

### Routes not working?
- Verify BrowserRouter wraps App in main.jsx

---

## 📊 Features Explained

- **Role-Based Auth:** Different dashboards for tenant/landlord/admin
- **Protected Routes:** Can't access admin as tenant
- **Public Pages:** Home & properties work without login
- **Role Switching:** Change roles with header dropdown
- **localStorage:** All auth data stored locally (demo mode)

---

## 🎓 Perfect For Learning

- React hooks & components
- React Router (routing, protected routes)
- Tailwind CSS
- Client-side authentication
- Component composition

---

## 👨‍💻 Author

**Harishroshan Y** - harishbooja@gmail.com

---

## 📄 License

MIT License

---

## 📞 Support

- Check troubleshooting above
- Open an issue on GitHub
- Review code in `/src/utils/auth.js`
