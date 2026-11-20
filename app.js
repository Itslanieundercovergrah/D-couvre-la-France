const statusEl = document.getElementById("items-status");
const listEl = document.getElementById("items-list");
const searchEl = document.getElementById("region-search");

let allRegions = [];

// Lowercase and remove accents so "ile" matches "Île"
function clean(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function addDetail(parent, label, text) {
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = label + " ";
  p.append(strong, text);
  parent.append(p);
}

function showRegions(regions) {
  listEl.replaceChildren();
  for (const region of regions) {
    const li = document.createElement("li");
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = region.name;
    details.append(summary);

    addDetail(details, "Famous for:", region.dish);
    addDetail(details, "Don’t miss:", region.landmark);
    addDetail(details, "Useful phrase:", region.phrase + " (" + region.meaning + ")");

    li.append(details);
    listEl.append(li);
  }
}

function applyFilter() {
  if (allRegions.length === 0) return;

  const term = clean(searchEl.value.trim());
  const matches = allRegions.filter(function (region) {
    const text = [region.name, region.dish, region.landmark, region.phrase, region.meaning].join(" ");
    return clean(text).includes(term);
  });

  showRegions(matches);
  statusEl.textContent = matches.length === 0 ? "No regions match your search." : "";
}

async function loadRegions() {
  statusEl.textContent = "Loading regions…";
  try {
    const response = await fetch("regions.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    allRegions = await response.json();
    applyFilter();
  } catch (error) {
    console.error(error);
    statusEl.textContent = "Sorry, we couldn’t load the regions. Please try again.";
  }
}

searchEl.addEventListener("input", applyFilter);
loadRegions();
