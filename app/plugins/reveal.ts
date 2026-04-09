export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            el.classList.add('visible')
            observer!.unobserve(el)
          }
        })
      },
      { threshold: 0.1 },
    )
  }

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
      observer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
