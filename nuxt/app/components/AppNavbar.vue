<template>
  <nav id="navbar" ref="navRef">
    <NuxtLink to="/" class="nav-logo">DISTRISKIN</NuxtLink>
    <ul class="nav-links" :class="{ show: menuOpen }">
      <li><NuxtLink to="/approche" :class="{ active: route.path === '/approche' }">Notre Approche</NuxtLink></li>
      <li class="nav-dropdown">
        <a href="#" :class="{ active: route.path.startsWith('/marques/') }">Nos Marques &#9662;</a>
        <div class="nav-dropdown-menu">
          <NuxtLink to="/marques/teslamed" :class="{ active: route.path === '/marques/teslamed' }">TESLAMED</NuxtLink>
          <NuxtLink to="/marques/niance" :class="{ active: route.path === '/marques/niance' }">NIANCE</NuxtLink>
          <NuxtLink to="/marques/joadams" :class="{ active: route.path === '/marques/joadams' }">JO ADAMS</NuxtLink>
        </div>
      </li>
      <li><NuxtLink to="/equipe" :class="{ active: route.path === '/equipe' }">L'&Eacute;quipe</NuxtLink></li>
      <li><NuxtLink to="/blog" :class="{ active: route.path === '/blog' }">Journal</NuxtLink></li>
      <li><NuxtLink to="/contact" class="nav-cta" :class="{ active: route.path === '/contact' }">Contact</NuxtLink></li>
    </ul>
    <div class="menu-toggle" @click="menuOpen = !menuOpen">
      <span></span><span></span><span></span>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const navRef = ref<HTMLElement | null>(null)
const menuOpen = ref(false)

// Close mobile menu on route change
watch(() => route.path, () => {
  menuOpen.value = false
})

onMounted(() => {
  const onScroll = () => {
    if (navRef.value) {
      navRef.value.classList.toggle('scrolled', window.scrollY > 80)
    }
  }
  window.addEventListener('scroll', onScroll)
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>
