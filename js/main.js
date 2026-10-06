(() => {

  const root =
    document.documentElement;

  const toggle =
    document.getElementById(
      "theme-toggle"
    );

  const year =
    document.getElementById(
      "year"
    );


  /* Current year */

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }


  /* Theme */

  const savedTheme =
    localStorage.getItem(
      "theme"
    );

  const prefersDark =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  if (
    savedTheme === "dark" ||
    (
      !savedTheme &&
      prefersDark
    )
  ) {
    root.dataset.theme =
      "dark";
  }

  if (toggle) {

    toggle.addEventListener(
      "click",
      () => {

        const isDark =
          root.dataset.theme ===
          "dark";

        if (isDark) {

          delete root.dataset.theme;

          localStorage.setItem(
            "theme",
            "light"
          );

        } else {

          root.dataset.theme =
            "dark";

          localStorage.setItem(
            "theme",
            "dark"
          );

        }

      }
    );

  }


  /* PRS hover video */

  const prsLink =
    document.querySelector(
      ".prs-link"
    );

  const prsPreview =
    document.getElementById(
      "prs-video-preview"
    );

  const prsVideo =
    document.getElementById(
      "prs-video"
    );


  if (
    prsLink &&
    prsPreview &&
    prsVideo
  ) {

    const showPreview = () => {

      prsPreview.classList.add(
        "active"
      );

      prsPreview.setAttribute(
        "aria-hidden",
        "false"
      );

      const playPromise =
        prsVideo.play();

      if (
        playPromise &&
        typeof playPromise.catch ===
        "function"
      ) {
        playPromise.catch(() => {});
      }

    };


    const hidePreview = () => {

      prsPreview.classList.remove(
        "active"
      );

      prsPreview.setAttribute(
        "aria-hidden",
        "true"
      );

      prsVideo.pause();

    };


    prsLink.addEventListener(
      "mouseenter",
      showPreview
    );

    prsLink.addEventListener(
      "mouseleave",
      hidePreview
    );

    prsLink.addEventListener(
      "focus",
      showPreview
    );

    prsLink.addEventListener(
      "blur",
      hidePreview
    );

  }

})();
