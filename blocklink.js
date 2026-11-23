// id: blocklink2

(function(addons) {
	'use strict';

	class MyAddon {
		constructor() {
			// Variables and stuff
		}
    
    options = {
      enabled: true,
      username: {
          type: 'string',
          label: 'Default username:',
          value: "User"
      }
    }


		// Returns metadata about your addon
		getInfo() {
			return {
				id: 'blocklink2',
				name: "Aeryli's blocklink",
				author: ['aeryli'],
				description: 'Multiplayer scratch editor.',
        icon: 'https://aeryli.win/ico.png',
        //screenshots: [this.GetFile("screenshot.png")],
        requiresRestart: true,
    };
}


		// Called once when the addon is first enabled
		init() {
			// Perform one-time setup tasks
			console.log('[aeryli] has been initialized!');
		}
		
		// Called every time an event happens in the editor
		event(type, data) {
      switch (type) {
        case "TabChanged":
            // Code to run when the editor tab changes
            console.log(`Switched to the ${data.TAB} tab!`);
            break;
        // You can add more cases here as more events are introduced.
        default:
            // Optional: code to run for unhandled events
            break;
      }
		}

		// Called when the addon is enabled by the user
		start() {
			// Activate your addon's features
		}

		// Called when the addon is disabled by the user
		stop() {
			// Deactivate your addon's features and clean up
		}
	}

	// Create a new instance of the class and register it
	addons.register(new MyAddon());
	
})(addons);
