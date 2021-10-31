import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Captcha() {
  render (
    <GoogleReCaptchaProvider
      reCaptchaKey="[Your recaptcha key]"
      language="[optional_language]"
      useRecaptchaNet="[optional_boolean_value]"
      useEnterprise="[optional_boolean_value]"
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
        nonce: undefined // optional, default undefined
      }}
    >
      <YourApp />
    </GoogleReCaptchaProvider>,
    document.getElementById('app')
  )
}