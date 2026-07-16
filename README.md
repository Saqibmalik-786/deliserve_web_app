# Deliserve Backend

## Overview

Deliserve is a food ordering platform designed to help local restaurants establish an online presence without building their own website or mobile application. Restaurant owners can register their business, manage menus, and receive customer orders directly through WhatsApp.

This repository contains the backend API for Deliserve, built with **Node.js**, **Express.js**, **Prisma ORM**, and **MySQL**. Authentication is handled by **Supabase**, while the backend manages application data such as users, restaurants, menus, orders, and other business-related operations.

The backend follows a layered architecture (**Controller → Service → Repository**) to keep the code modular, maintainable, and scalable as the project grows.

### Core Features

- User synchronization with Supabase Authentication
- Restaurant registration and management
- Menu and food item management
- Nearby restaurant discovery using location data
- WhatsApp-based order system
- Secure RESTful APIs
- Prisma ORM with MySQL database
- Scalable backend architecture for future expansion

Deliserve aims to provide an affordable and simple digital solution for local restaurants while making food discovery and ordering more convenient for customers.
