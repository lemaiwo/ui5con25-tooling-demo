import { ExampleColor } from "be/wl/tooling/ui5/library/library";
import Example from "be/wl/tooling/ui5/library/Example";

// create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
	text: "Example",
	color: ExampleColor.Highlight,
	press: (event) => {
		alert(event.getSource());
	}
}).placeAt("content");
