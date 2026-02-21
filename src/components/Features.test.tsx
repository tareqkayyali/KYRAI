import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Features from './Features';

describe('Features', () => {
    it('renders the section heading', () => {
        render(<Features />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            'Features',
        );
    });

    it('renders all four features', () => {
        render(<Features />);
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    });
});
