export const activeSection = () => {
  const path = window.location.pathname;
  let isNavigating = false;

  const updateActiveSection = () => {
    if (isNavigating) return; // Skip updates during navigation

    const sections = document.querySelectorAll(".pp-section");
    const navLi = document.querySelectorAll(".nav-menu li");
    let current = "";

    // Check if we're near the bottom of the page first (for Contact section)
    const bottomThreshold = document.documentElement.scrollHeight - window.innerHeight - 50;
    if (window.scrollY >= bottomThreshold && sections.length > 0) {
      // Near bottom of page, activate last section
      current = sections[sections.length - 1].getAttribute("id");
    } else {
      // Find the section that's currently most visible in the viewport
      const scrollPosition = window.scrollY + 100; // Use a small offset from top

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          current = section.getAttribute("id");
        }
      });

      // If still no section found, use first section
      if (!current && sections.length > 0) {
        current = sections[0].getAttribute("id");
      }
    }

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (
        li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
      ) {
        li.classList.add("active");
      }
    });
  };

  const setActiveByHref = (href) => {
    const navLi = document.querySelectorAll(".nav-menu li");
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.getElementsByTagName("a")[0].getAttribute("href") === href) {
        li.classList.add("active");
      }
    });
  };

  // Update on scroll
  window.addEventListener("scroll", updateActiveSection);

  // Update on click
  const navLinks = document.querySelectorAll(".nav-menu li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        // Block scroll listener updates during navigation
        isNavigating = true;

        // Immediately set active state
        setActiveByHref(targetId);

        // Re-enable scroll listener after scroll completes, but don't force update
        setTimeout(() => {
          isNavigating = false;
        }, 1000);
      }
    });
  });

  // Initial update - check if there's a hash in the URL
  const hash = window.location.hash;
  if (hash && hash.startsWith("#")) {
    // If page loaded with a hash, block scroll listener temporarily
    isNavigating = true;

    // Set active based on hash
    setActiveByHref(hash);

    // Re-enable scroll listener and verify position after scroll completes
    setTimeout(() => {
      isNavigating = false;
      updateActiveSection();
    }, 1500);
  } else {
    // Otherwise do normal update
    updateActiveSection();
  }
};
