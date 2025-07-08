import Resolver from '@forge/resolver';
import api, { getAppContext } from '@forge/api';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, world!';
});

resolver.define('getId', (req) => {
  console.log(req);

  const { appAri, appVersion, environmentAri, environmentType, invocationId, installationAri, moduleKey, license } = getAppContext();

    console.log('InvocationId: ', invocationId);
    // '33333333-3333-3333-0333-333333333333'

    console.log('installationAri_Full', installationAri.toString());
    // 'ari:cloud:ecosystem::installation/22222222-2222-2222-0222-222222222222'

    console.log('installationAri_InstallationId', installationAri.installationId);4
    // '22222222-2222-2222-0222-222222222222'

  return getAppContext();
});

// export async function onInstallHandler(event, context) {
//   const payload = {
//     message: "Forge app installed",
//     event,
//     context
//   };
//
//   try {
//     const response = await api.fetch("https://5b9ce8904bb8.ngrok-free.app/webhook", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });
//
//     if (!response.ok) {
//       console.error(`Webhook failed with status ${response.status}`);
//     } else {
//       console.log("Webhook sent successfully.");
//     }
//
//     return;
//   } catch (error) {
//     console.error("Error sending webhook:", error);
//   }
// }


export async function onUpgradeHandler(event, context) {
  console.log('⬆️ App upgraded!');
  console.log('Upgrade payload:', JSON.stringify(event, null, 2));
}


export const handler = resolver.getDefinitions();
