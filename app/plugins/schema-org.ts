export default defineNuxtPlugin(() => {
  useSchemaOrg([
    defineOrganization({
      name: 'DISTRISKIN',
      url: 'https://distriskin.com',
      logo: 'https://distriskin.com/images/distriskin_logo_transparent.png',
      description: 'Distributeur français de marques premium pour les professionnels du soin et du bien-être : TESLAMED, NIANCE, JO ADAMS.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '421 rue des Cordineaux',
        addressLocality: 'Dommartin',
        postalCode: '69380',
        addressCountry: 'FR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33688405645',
        email: 'contact@distriskin.com',
        contactType: 'sales',
        availableLanguage: 'French',
      },
      sameAs: [],
    }),
  ])
})
