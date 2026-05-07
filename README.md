# Multi-Tenant Feature Flag Management System

## Project Overview

This project is a SaaS-style Multi-Tenant Feature Flag Management System developed as part of the technical assignment.

The system allows:
- Super Admin to create organizations
- Organization Admins to manage feature flags
- End Users to check whether a feature is enabled for their organization

The project demonstrates:
- REST API development
- Authentication using JWT
- Role-based access
- Multi-tenant architecture
- CRUD operations
- Frontend and backend integration

---

# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Frontend
- HTML
- CSS
- JavaScript

---

# Features

## 1. Super Admin
- Static login authentication
- Create organizations
- View organizations

## 2. Organization Admin
- Signup
- Login
- Create feature flags
- Enable/Disable features
- Delete feature flags

## 3. End User
- Check whether a feature is enabled for a specific organization

---

# Project Structure

```text
feature-flag-system/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── super-admin/
│   └── index.html
│
├── admin/
│   └── index.html
│
└── user/
    └── index.html
