import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders Hero and Features sections', () => {
        render(<App />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Welcome to KYRAI!',
        );
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            'Features',
        );
    });
});
