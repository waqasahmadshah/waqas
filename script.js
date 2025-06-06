// Simple website animations without celebration features
document.addEventListener("DOMContentLoaded", () => {
  initializeWebsite()
})

// Initialize Website
function initializeWebsite() {
  // Start background animations
  startWebsiteAnimations()

  // Add smooth scrolling
  addSmoothScrolling()

  console.log("🌙 Peaceful Eid Mubarak Website Ready! ✨")
}

// Website Animations
function startWebsiteAnimations() {
  // Animate content cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe content cards
  document.querySelectorAll(".content-card").forEach((card) => {
    observer.observe(card)
  })

  // Add hover effects to content cards
  document.querySelectorAll(".content-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Add gentle hover effect to profile image
  const profileImage = document.getElementById("profileImage")
  if (profileImage) {
    profileImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    profileImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  }
}

// Add Smooth Scrolling
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Touch support for mobile
document.addEventListener("touchstart", () => {}, { passive: true })

// Handle window resize for responsive design
window.addEventListener("resize", () => {
  // Any resize handling if needed
})
