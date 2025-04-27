import BaseComponent from "sap/ui/core/UIComponent";
import { createDeviceModel } from "./model/models";
import Decimal from "decimal.js";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace be.wl.tooling.fiori.sample
 */
export default class Component extends BaseComponent {

	public static metadata = {
		manifest: "json",
        interfaces: [
            "sap.ui.core.IAsyncContentCreation"
        ]
	};

	public init() : void {
		// call the base component's init function
		super.init();

        // set the device model
        this.setModel(createDeviceModel(), "device");
        const x = new Decimal(123.4567),
            y = new Decimal('123456.7e-3'),
            z = new Decimal(x);
        if(x.equals(y) && y.equals(z) && x.equals(z)){
            MessageBox.show("Equal ");
        } 
        // enable routing
        this.getRouter().initialize();
	}
}