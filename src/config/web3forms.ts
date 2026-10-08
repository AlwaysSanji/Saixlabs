// Web3Forms Configuration
// Get your free Web3Forms Access Key at https://web3forms.com

export const WEB3FORMS_CONFIG = {
  // Contact Form Access Key
  contactAccessKey:
    import.meta.env.VITE_WEB3FORMS_CONTACT_ACCESS_KEY ||
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    '239da4ed-9b09-4427-b1f2-36445fe207a8',

  // Newsletter Form Access Key
  newsletterAccessKey:
    import.meta.env.VITE_WEB3FORMS_NEWSLETTER_ACCESS_KEY ||
    'eda8cd6b-3486-400d-bf4e-fcf3edd15c97',

  endpoint: 'https://api.web3forms.com/submit',
}
