<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function isActive(path: string): boolean {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav :class="{ scrolled }">
    <NuxtLink to="/" class="nav-logo"><span>DISTRI</span>SKIN</NuxtLink>
    <div class="nav-links" :class="{ show: mobileMenuOpen }">
      <NuxtLink to="/approche" :class="{ active: isActive('/approche') }" @click="closeMobileMenu">Notre Approche</NuxtLink>
      <div class="nav-dropdown">
        <a href="#">Nos Marques &#9662;</a>
        <div class="nav-dropdown-menu">
          <NuxtLink to="/marques/teslamed" :class="{ active: isActive('/marques/teslamed') }" @click="closeMobileMenu">TESLAMED</NuxtLink>
          <NuxtLink to="/marques/niance" :class="{ active: isActive('/marques/niance') }" @click="closeMobileMenu">NIANCE</NuxtLink>
          <NuxtLink to="/marques/joadams" :class="{ active: isActive('/marques/joadams') }" @click="closeMobileMenu">JO ADAMS</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/equipe" :class="{ active: isActive('/equipe') }" @click="closeMobileMenu">L'&Eacute;quipe</NuxtLink>
      <NuxtLink to="/contact" :class="{ active: isActive('/contact') }" @click="closeMobileMenu">Contact</NuxtLink>
      <a href="https://www.distriskin-shop.com" target="_blank" rel="noopener" class="nav-cta nav-shop" @click="closeMobileMenu">Boutique en ligne ↗</a>
    </div>
    <div class="menu-toggle" @click="toggleMobileMenu">
      <span></span><span></span><span></span>
    </div>
  </nav>
</template>
