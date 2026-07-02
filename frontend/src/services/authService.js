/**
 * Auth Service
 * Handles authentication-related API calls (login, register, profile)
 */

import api from './api';

export const authService = {
  /**
   * Register a new user
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {string} name - User name
   */
  async register(email, password, name) {
    const response = await api.post('/auth/register', {
      email,
      password,
      name,
    });
    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response;
  },

  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   */
  async login(email, password) {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response;
  },

  /**
   * Google OAuth login — sends the ID token credential to the backend
   * @param {string} credential - Google ID token from @react-oauth/google
   */
  async googleLogin(credential) {
    const response = await api.post('/auth/google', { credential });
    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response;
  },

  /**
   * Get user profile
   */
  async getProfile() {
    return api.get('/auth/profile');
  },

  /**
   * Logout user
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Get stored user
   */
  getStoredUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  /**
   * Get stored token
   */
  getToken() {
    return localStorage.getItem('token');
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!localStorage.getItem('token');
  },
};

export default authService;
