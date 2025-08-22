// Replace with your Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

const form = document.getElementById('signup');
const msg  = document.getElementById('msg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = "Sending...";
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        msg.textContent = "Success! You are on the list.";
        form.reset();
      } else {
        msg.textContent = "Failed. Try again later.";
      }
    } catch {
      msg.textContent = "Network error. Please retry.";
    }
  });
}

// Optional: basic event tracking for Plausible when enabled
function track(name, props){ if (window.plausible) window.plausible(name, {props}); }
document.querySelectorAll('.hero-cta a').forEach(a=>{
  a.addEventListener('click', ()=> track('CTA_Click', {target: a.textContent.trim()}));
});
