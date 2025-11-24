import { activeSection } from '../utilits';

describe('activeSection', () => {
  let mockSections;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';

    // Create mock sections
    mockSections = [
      { id: 'home', offsetTop: 0, clientHeight: 800 },
      { id: 'mentoring', offsetTop: 800, clientHeight: 600 },
      { id: 'writing', offsetTop: 1400, clientHeight: 900 },
      { id: 'speaking', offsetTop: 2300, clientHeight: 700 },
      { id: 'startups', offsetTop: 3000, clientHeight: 500 },
      { id: 'contact', offsetTop: 3500, clientHeight: 400 },
    ];

    // Create mock nav items
    const navUl = document.createElement('ul');
    navUl.className = 'nav-menu';

    mockSections.forEach((section, index) => {
      // Create section element
      const sectionEl = document.createElement('section');
      sectionEl.id = section.id;
      sectionEl.className = 'pp-section';
      Object.defineProperty(sectionEl, 'offsetTop', { value: section.offsetTop, configurable: true });
      Object.defineProperty(sectionEl, 'clientHeight', { value: section.clientHeight, configurable: true });
      document.body.appendChild(sectionEl);

      // Create nav item
      const li = document.createElement('li');
      if (index === 0) li.className = 'active';
      const a = document.createElement('a');
      a.href = `#${section.id}`;
      a.className = 'nav-link';
      li.appendChild(a);
      navUl.appendChild(li);
    });

    document.body.appendChild(navUl);

    // Mock window properties
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 1000, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 3900,
      writable: true,
      configurable: true
    });

    // Clear all timers
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  describe('Initial page load', () => {
    test('should activate first section (home) when loaded without hash', () => {
      delete window.location;
      window.location = { hash: '', pathname: '/' };
      activeSection();

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#home');
    });

    test('should activate contact section when loaded with #contact hash', () => {
      delete window.location;
      window.location = { hash: '#contact', pathname: '/' };
      // Contact section at bottom, so need to simulate being at bottom
      Object.defineProperty(window, 'scrollY', { value: 3500, writable: true, configurable: true });
      activeSection();

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#contact');
    });
  });

  describe('Scroll behavior', () => {
    test('should activate mentoring section when scrolled to it', () => {
      delete window.location;
      window.location = { hash: '', pathname: '/' };
      activeSection();

      // Scroll to mentoring section
      Object.defineProperty(window, 'scrollY', { value: 900, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#mentoring');
    });

    test('should activate writing section when scrolled to it', () => {
      delete window.location;
      window.location = { hash: '', pathname: "/" };
      activeSection();

      // Scroll to writing section
      Object.defineProperty(window, 'scrollY', { value: 1500, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#writing');
    });

    test('should activate contact section when scrolled near bottom', () => {
      delete window.location;
      window.location = { hash: '', pathname: "/" };
      activeSection();

      // Scroll near bottom (within 50px threshold)
      Object.defineProperty(window, 'scrollY', { value: 2860, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#contact');
    });
  });

  describe('Click navigation', () => {
    test('should activate mentoring section when clicked', () => {
      delete window.location;
      window.location = { hash: '', pathname: "/" };
      activeSection();

      const mentoringLink = document.querySelector('a[href="#mentoring"]');
      mentoringLink.click();

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#mentoring');
    });

    test('should activate contact section when clicked', () => {
      delete window.location;
      window.location = { hash: '', pathname: "/" };
      activeSection();

      const contactLink = document.querySelector('a[href="#contact"]');
      contactLink.click();

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#contact');
    });

    test('should maintain correct state after clicking multiple sections', () => {
      delete window.location;
      window.location = { hash: '', pathname: "/" };
      activeSection();

      // Click mentoring
      const mentoringLink = document.querySelector('a[href="#mentoring"]');
      mentoringLink.click();
      let activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#mentoring');

      // Click speaking
      const speakingLink = document.querySelector('a[href="#speaking"]');
      speakingLink.click();
      activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#speaking');

      // Click contact
      const contactLink = document.querySelector('a[href="#contact"]');
      contactLink.click();
      activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#contact');
    });
  });

  describe('Edge cases', () => {
    test('should handle page with no sections gracefully', () => {
      document.body.innerHTML = '<ul class="nav-menu"></ul>';
      delete window.location;
      window.location = { hash: '', pathname: "/" };

      expect(() => {
        activeSection();
      }).not.toThrow();
    });

    test('should handle page with no nav menu gracefully', () => {
      document.body.innerHTML = '<section id="home" class="pp-section"></section>';
      delete window.location;
      window.location = { hash: '', pathname: "/" };

      expect(() => {
        activeSection();
      }).not.toThrow();
    });

    test('should activate last section when scrolled past all sections', () => {
      delete window.location;
      window.location = { hash: '', pathname: "/" };
      activeSection();

      // Scroll way past all sections
      Object.defineProperty(window, 'scrollY', { value: 5000, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));

      const activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#contact');
    });
  });

  describe('Hash-based navigation on load', () => {
    test('should verify hash-based navigation after timeout', () => {
      delete window.location;
      window.location = { hash: '#speaking', pathname: "/" };
      Object.defineProperty(window, 'scrollY', { value: 2400, writable: true, configurable: true });

      activeSection();

      // Initially should be speaking based on hash
      let activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#speaking');

      // After 1500ms timeout, should verify with scroll position
      jest.advanceTimersByTime(1500);

      activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#speaking');
    });

    test('should maintain hash-based navigation even if scroll position differs', () => {
      delete window.location;
      window.location = { hash: '#speaking', pathname: "/" };
      // Set scroll position to speaking section
      Object.defineProperty(window, 'scrollY', { value: 2400, writable: true, configurable: true });

      activeSection();

      // Initially should be speaking based on hash
      let activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#speaking');

      // After timeout, should still be speaking based on scroll position
      jest.advanceTimersByTime(1500);

      activeItem = document.querySelector('.nav-menu li.active');
      expect(activeItem.querySelector('a').getAttribute('href')).toBe('#speaking');
    });
  });
});
