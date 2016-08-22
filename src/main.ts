import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppModule } from './app/app.module';

import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';


export const translations = `<?xml version='1.0' encoding='utf-8'?><xliff xmlns="urn:oasis:names:tc:xliff:document:1.2" version="1.2"> <file source-language="en" datatype="plaintext" original="ng2.template" target-language="fr">   <body>     <trans-unit id="6642147ee5ae8acb8b128faedfc7985d39637911" datatype="html" approved="yes">       <source>Communities</source> <target state="translated">Communautés</target> </trans-unit>     <trans-unit id="af88c1e95a1d16d3cdbb7210981e0bfb6dc1d137" datatype="html" approved="yes">       <source>Events</source> <target state="translated">Evénements</target> </trans-unit>     <trans-unit id="e38c6d63094861fc42aede71c0c531a2d5f67c49" datatype="html" approved="yes">       <source>Missions</source> <target state="translated">Missions</target> </trans-unit>     <trans-unit id="ca312965b7b4896749515801e4911bc182dc5dde" datatype="html" approved="yes">       <source>Experts</source> <target state="translated">Experts</target> </trans-unit>     <trans-unit id="452ef1b96854fe05618303ee601f8fed3b866c9f" datatype="html" approved="yes">       <source>Resources</source> <target state="translated">Ressources</target> </trans-unit>     <trans-unit id="ff1e6fcff2bbd942c07aea80d4b9dee6974d3358" datatype="html" approved="yes">       <source><x id="START_TAG_SPAN" ctype="span"/><x id="CLOSE_TAG_SPAN" ctype="span"/>Admin</source> <target state="translated"><x id="START_TAG_SPAN" ctype="span"/><x id="CLOSE_TAG_SPAN" ctype="span"/>Admin</target> </trans-unit>   </body> </file></xliff> `;

platformBrowserDynamic().bootstrapModule(MyAppModule, 
    [
      {provide:TRANSLATIONS, useValue: translations},
      {provide:TRANSLATIONS_FORMAT, useValue:'xlf'},
      {provide:LOCALE_ID, useValue:'fr'},
    ]);

// platform browser dynamic - jit compilation (dynamic compilation in the browser)
// platform browser - ahead of time compilation (also used by platform-browser-dynamic) in browser
// platform server - run angular without DOM