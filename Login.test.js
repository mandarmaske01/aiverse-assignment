import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders login form with required elements', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const rememberMeCheckbox = screen.getByLabelText('Remember Me');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(rememberMeCheckbox).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('allows user to input email and password', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  test('renders forgot password link', () => {
    render(<Login />);
    const forgotPasswordLink = screen.getByText('Forgot Password?');
    expect(forgotPasswordLink).toBeInTheDocument();
  });
  
  test('renders social login buttons', () => {
    render(<Login />);
    const googleLoginButton = screen.getByRole('button', { name: 'Sign in with Google' });
    const facebookLoginButton = screen.getByRole('button', { name: 'Sign in with Facebook' });
  
    expect(googleLoginButton).toBeInTheDocument();
    expect(facebookLoginButton).toBeInTheDocument();
  });
  
  test('toggles password visibility', () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText('Password');
    const showButton = screen.getByText('Show');
  
    fireEvent.click(showButton);
  
    expect(passwordInput).toHaveAttribute('type', 'text');
  
    fireEvent.click(showButton);
  
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
  });
