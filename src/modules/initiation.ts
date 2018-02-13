// /// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import "./managedinitiation/ManagedInitiation";
import "./ariabuttonmanager/ARIAButtonManager";
import _MIHelper from "./managedinitiation/ManagedInitiationHelper";
const appRenderEl =  document.getElementById('showcase__render');
let showcaseMarkupIsInserted = false;
if(appRenderEl)
{
	window.addEventListener('message', (message) =>
	{
		if(typeof message.data === "string" && message.data.indexOf('render-') === 0 && showcaseMarkupIsInserted === false)
		{
			_MIHelper.InitiateArea(appRenderEl);
		}
	}, false);
}

