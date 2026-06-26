/* ============================================================
   RENDERING ENGINE
   You shouldn't need to edit this file. All content changes
   belong in data.js.
   ============================================================ */

(function () {
  const data = PORTFOLIO_DATA;

  // ---------- helpers ----------
  function el(tag, opts = {}) {
    const node = document.createElement(tag);
    if (opts.className) node.className = opts.className;
    if (opts.text !== undefined) node.textContent = opts.text;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    return node;
  }

  function statusClass(status) {
    const s = (status || "").toLowerCase();
    if (s.includes("progress")) return "status--progress";
    if (s.includes("complete")) return "status--completed";
    if (s.includes("pause")) return "status--paused";
    return "status--progress";
  }

  // ---------- ABOUT ----------
  function renderAbout() {
    const a = data.about || {};

    document.getElementById("js-name").textContent = a.name || "Your Name";
    document.getElementById("js-role").textContent = a.role || "";
    document.getElementById("js-tagline").textContent = a.tagline || "";

    const bioWrap = document.getElementById("js-bio");
    (a.bio || []).forEach((paragraph) => {
      bioWrap.appendChild(el("p", { text: paragraph }));
    });

    const metaWrap = document.getElementById("js-meta");
    const metaItems = [a.affiliation, a.location].filter(Boolean);
    metaItems.forEach((item) => {
      metaWrap.appendChild(el("span", { text: item }));
    });
    if (metaItems.length === 0) metaWrap.style.display = "none";

    const linksWrap = document.getElementById("js-links");
    (a.links || []).forEach((link) => {
      if (!link.url) return; // hide links with no URL set
      const anchor = el("a", { text: link.label });
      anchor.href = link.url;
      if (link.url.startsWith("http")) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      linksWrap.appendChild(anchor);
    });
  }

  // ---------- PROJECTS ----------
  function renderProjects() {
    const wrap = document.getElementById("js-projects");
    const projects = data.projects || [];

    if (projects.length === 0) {
      wrap.appendChild(
        el("p", {
          className: "empty-state",
          text: "No projects added yet — add one in data.js.",
        })
      );
      return;
    }

    projects.forEach((p, i) => {
      const row = el("div", { className: "project" });

      const index = el("div", {
        className: "project-index",
        text: String(i + 1).padStart(2, "0"),
      });

      const body = el("div", { className: "project-body" });

      const heading = el("h3");
      if (p.link) {
        const a = el("a", { text: p.title || "Untitled project" });
        a.href = p.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        heading.appendChild(a);
      } else {
        heading.textContent = p.title || "Untitled project";
      }

      const metaLine = el("div", { className: "project-meta-line" });
      if (p.status) {
        metaLine.appendChild(
          el("span", {
            className: `status ${statusClass(p.status)}`,
            text: p.status,
          })
        );
      }
      if (p.period) {
        metaLine.appendChild(el("span", { className: "period", text: p.period }));
      }

      const desc = el("p", {
        className: "project-desc",
        text: p.description || "",
      });

      const tagRow = el("div", { className: "tag-row" });
      (p.tags || []).forEach((tag) => {
        tagRow.appendChild(el("span", { className: "tag", text: tag }));
      });

      body.appendChild(heading);
      body.appendChild(metaLine);
      if (p.description) body.appendChild(desc);
      if ((p.tags || []).length) body.appendChild(tagRow);

      row.appendChild(index);
      row.appendChild(body);
      wrap.appendChild(row);
    });
  }

  // ---------- AWARDS ----------
  function renderAwards() {
    const section = document.getElementById("awards-section");
    const wrap = document.getElementById("js-awards");
    const awards = data.awards || [];

    if (!data.showAwards || awards.length === 0) {
      section.hidden = true;
      return;
    }

    section.hidden = false;

    awards.forEach((award) => {
      const row = el("div", { className: "award" });

      const top = el("div", { className: "award-top" });
      top.appendChild(el("h3", { text: award.title || "Untitled award" }));
      if (award.year) {
        top.appendChild(el("span", { className: "award-year", text: award.year }));
      }

      row.appendChild(top);
      if (award.issuer) {
        row.appendChild(el("p", { className: "award-issuer", text: award.issuer }));
      }
      if (award.description) {
        row.appendChild(el("p", { className: "award-desc", text: award.description }));
      }

      wrap.appendChild(row);
    });
  }

  // ---------- FOOTER ----------
  function renderFooter() {
    document.getElementById("js-year").textContent = new Date().getFullYear();
  }

  // ---------- PAGE TITLE ----------
  function renderTitle() {
    const a = data.about || {};
    if (a.name) {
      document.title = `${a.name} — Portfolio`;
    }
  }

  // ---------- run ----------
  renderTitle();
  renderAbout();
  renderProjects();
  renderAwards();
  renderFooter();
})();
