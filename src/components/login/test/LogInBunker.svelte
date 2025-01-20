<script lang="ts">
  import { onDestroy } from "svelte";
  import { Nip46Broker, type Nip46BrokerParams } from "@welshman/signer";
  import { addSession, nip46Perms } from "@welshman/app";
  import {QRCode} from '@red-token/iz-svelte-library'
  // import { slideAndFade } from '@lib/transition';
  // import { loadUserData, loginWithNip46 } from '@app/commands';
  // import { clearModals } from '@app/modal';
  // import { setChecked } from '@app/notifications';
  // import { pushToast } from '@app/toast';
  // import { PLATFORM_LOGO, PLATFORM_NAME, PLATFORM_URL, SIGNER_RELAYS } from '@app/state';

  const abortController = new AbortController();

  export const SIGNER_RELAYS = ["wss://relay.stream.labs.h3.se/"];

  export const PLATFORM_URL = window.location.origin;

  export const PLATFORM_LOGO = PLATFORM_URL + "/pwa-192x192.png";

  export const PLATFORM_NAME = import.meta.env.VITE_PLATFORM_NAME;

  const init = Nip46Broker.initiate({
    perms: nip46Perms,
    url: PLATFORM_URL,
    name: PLATFORM_NAME,
    relays: SIGNER_RELAYS,
    image: PLATFORM_LOGO,
    // url: PLATFORM_URL,
    // name: PLATFORM_NAME,
    // relays: SIGNER_RELAYS,
    // image: PLATFORM_LOGO,
    abortController,
  });

  // const onSubmit = async () => {
  // 	const { pubkey, token, relays } = Nip46Broker.parseBunkerLink(bunker);
  //
  // 	// if we are in the loading state we just return, we should log here
  // 	if (loading) {
  // 		return;
  // 	}
  //
  // 	// Sanity check
  // 	if (!pubkey || relays.length === 0) {
  // 		return pushToast({
  // 			theme: 'error',
  // 			message: 'Sorry, it looks like that\'s an invalid bunker link.'
  // 		});
  // 	}
  //
  // 	// we are now in the loading state
  // 	loading = true;
  //
  // 	try {
  // 		if (!(await loginWithNip46(token, { pubkey, relays }))) {
  // 			return pushToast({
  // 				theme: 'error',
  // 				message: 'Something went wrong, please try again!'
  // 			});
  // 		}
  //
  // 		abortController.abort();
  //
  // 		await loadUserData(pubkey);
  // 	} finally {
  // 		loading = false;
  // 	}
  //
  // 	clearModals();
  // };

  // let bunker = '';
  let loading = false;

  init.result.then(async (remoteSignerPubkey) => {
    if (remoteSignerPubkey) {
      loading = true;

      const handler = {
        pubkey: remoteSignerPubkey,
        relays: SIGNER_RELAYS,
      };

      //TODO: This is an ugly way of solving the chicken and egg problem
      const params: Nip46BrokerParams = {
        handler,
        secret: init.clientSecret,
      };

      console.log(remoteSignerPubkey);
      console.log(init.clientSecret);

      const broker = Nip46Broker.get(params);
      const userPubkey = await broker.getPublicKey();

      addSession({
        pubkey: userPubkey,
        method: "nip46",
        secret: init.clientSecret,
        handler,
      });

      // await loadUserData(userPubkey);

      // setChecked('*');
      // clearModals();
    }
  });

  onDestroy(() => {
    abortController.abort();
  });
</script>

<div>Connect your signer by scanning the QR code below or pasting a bunker link.</div>
{#if !loading}
  <div>
    <QRCode code={init.nostrconnect} />
  </div>
{/if}
