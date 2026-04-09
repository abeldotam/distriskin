export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      if (!el.classList.contains('reveal')) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
              ;(entry.target as HTMLElement).classList.add('visible')
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(el)
      ;(el as any)._revealObserver = observer
    },
    unmounted(el: HTMLElement) {
      const observer = (el as any)._revealObserver
      if (observer) {
        observer.disconnect()
      }
    },
  })
})
