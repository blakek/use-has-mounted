import React from 'react';
import { render } from 'react-testing-library';
import { renderToStaticMarkup } from 'react-dom/server';

import useHasMounted from './';

function Example() {
  const hasMounted = useHasMounted();
  return <div>{hasMounted ? 'mounted' : 'not mounted'}</div>;
}

describe('useHasMounted', () => {
  it('exports a function', () => {
    expect(useHasMounted).toBeInstanceOf(Function);
  });

  it('returns false before mount (default)', () => {
    const text = renderToStaticMarkup(<Example />);
    expect(text).toBe('<div>not mounted</div>');
  });

  it('returns true after mount (default)', () => {
    const { container } = render(<Example />);
    const textContent = container.textContent;
    expect(textContent).toBe('mounted');
  });

  it('returns false before mount (beforePaint)', () => {
    const text = renderToStaticMarkup(<Example />);
    expect(text).toBe('<div>not mounted</div>');
  });

  it('returns true after mount (beforePaint)', () => {
    const { container } = render(<Example />);
    const textContent = container.textContent;
    expect(textContent).toBe('mounted');
  });
});
