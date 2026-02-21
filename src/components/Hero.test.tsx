import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
    it('renders the heading', () => {
        render(<Hero />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Welcome to KYRAI!',
        );
    });

    it('renders the subtitle', () => {
        render(<Hero />);
        expect(
            screen.getByText('Your showcase starts here.'),
        ).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
        render(<Hero />);
        expect(
            screen.getByRole('button', { name: 'Get Started' }),
        ).toBeInTheDocument();
    });
});
