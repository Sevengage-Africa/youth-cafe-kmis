{
	events: {// any ycafe sponsored event, workshop, meeting, etc
		
		"<EVENT-NAME>-2018-05-14": { // EVENT NAME + THE DATE just in case they have the same name
			eventLocation: "",
			attendees: [ // for each participant
				{
					name: "",
					id: "",
					confirmed: false, // boolean to trigger true once admin confirms checkin
					timeIn: "2019-05-14T08:19:39-05:00", // iso-8601 date & time
					gender: "",
					dob: "1978-07-20" // iso-8601 date
				}

				// ...
			]			
		}
			
	},


	dailyVisitors: { // standard checkin-checkout for all ycafe entrants
		
		"2018-05-14": { // iso-8601 date
			visitors: [ // each entrant
				{
					name: "",
					id: "",
					confirmed: false, // boolean to trigger true once admin confirms checkin
					timeIn: "2019-05-14T08:19:39-05:00", // iso-8601 date & time
					timeOut: "2019-05-14T12:31:36-08:00", // iso-8601 date & time
					gender: "",
					dob: "1978-07-20" // iso-8601 date
				},

				// ...
			]
		} 
	}
}