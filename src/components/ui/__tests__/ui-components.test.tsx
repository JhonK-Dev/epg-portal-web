import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';
import { Badge } from '../badge';
import { Card, CardHeader, CardTitle, CardContent } from '../card';

describe('Button', () => {
  it('renders without crashing', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toBeDefined();
  });

  it('renders button with text', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeDefined();
  });

  it('renders with variant prop', () => {
    const { container } = render(<Button variant="default">Default</Button>);
    expect(container.firstChild).toBeDefined();
  });

  it('renders with size prop', () => {
    const { container } = render(<Button size="sm">Small</Button>);
    expect(container.firstChild).toBeDefined();
  });
});

describe('Badge', () => {
  it('renders without crashing', () => {
    const { container } = render(<Badge>Badge</Badge>);
    expect(container).toBeDefined();
  });

  it('renders badge with text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeDefined();
  });

  it('renders with variant prop', () => {
    const { container } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(container.firstChild).toBeDefined();
  });
});

describe('Card', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>
    );
    expect(container).toBeDefined();
  });

  it('renders CardTitle', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
        </CardHeader>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeDefined();
  });

  it('renders CardContent', () => {
    render(
      <Card>
        <CardContent>Test Content</CardContent>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeDefined();
  });

  it('renders Card component', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toBeDefined();
  });
});
